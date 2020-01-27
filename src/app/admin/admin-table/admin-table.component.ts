import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

// Table interface
export class UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  action: string;
}
// Dialog  interface
export interface DialogData {
  animal: string;
  name: string;
}
/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminTableComponent implements OnInit {

  //Pour la ligne selectionnee
  highlightedRows= [];
  //vérifier si le champs a ete modifie
  inputChange:boolean = false;
  //pour le message de modification
  durationInSeconds = 5;
  // ligne changer
  rowSelected: UserData;
  // Avant de changer la ligne
  rowBeforeChanged;
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'action'];
  dataSource: MatTableDataSource<UserData>;
  animal: string;
  name: string;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    public dialog: MatDialog, 
    private _snackBar: MatSnackBar) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //permet d'ouvrir le message de modification
  openAlertModification() {
    this._snackBar.openFromComponent(AlertTableModificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  // dialog edit
  openDeleteDialog(row): void {
    const dialogRef = this.dialog.open(AdminTableDeleteDialog, {
      width: '300px',
      data: {titre: 'un utilisateur', contenu: 'cet utilisateur', row: row, remove: false}
    });

    dialogRef.afterClosed().subscribe(result => {
  
      if(result != null){
        console.log(row);
        console.log('remove line');
        this.deleteRow(row);
      }
       
      console.log('The dialog was closed');
    });
    this.highlightedRows.push(row);
  }

  getRowBeforeChanged(row){
    row = Object.assign({}, this.rowBeforeChanged);
    console.log(row);
    return row;
    // return this.rowBeforeChanged;
  }
  //pour supprimer un enregistrement
  deleteRow(row){
    let index = this.dataSource.filteredData.indexOf(row);
    this.dataSource.data.splice(index, 1);//pour test aprés je modifier
    this.dataSource._updateChangeSubscription();
  }

  //pour ajouter un ligne
  addRow(){
    let row = {
      id: " ",
      name: " ",
      progress: " ",
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
      action:'action'
    };
    this.dataSource.data.unshift(row);//pour test aprés je modifier
    this.dataSource._updateChangeSubscription();
    return row;
  }
  //refrecher la ligne si les modification sont annulées
  refreshRowSelcted(row){
    if(this.rowSelected != null){
      row.name =  this.rowSelected.name;
      row.id =  this.rowSelected.id;
      row.color =  this.rowSelected.color;
      row.progress =  this.rowSelected.progress;
    }
   
  }
  //pour verifier si un champs et modifier ou pas
  isChangedValue(beforeChange, afterChange){
    //console.log(afterChange);
    return beforeChange != afterChange;
  }

  //garder la ligne courante
  rowTableSelected(row){

    this.rowSelected = Object.assign({}, row);
    // this.rowChanged = JSON.parse(JSON.stringify(row));
    // console.log(row);
  }

  //Pour recuperer la ligne changer
  rowChangedElement(rowbeforeChanged, nameColumn, elementChanged){
   // this.rowBeforeChanged = Object.assign({}, rowbeforeChanged);
    this.rowBeforeChanged = JSON.parse(JSON.stringify(rowbeforeChanged))
    this.rowSelected[nameColumn] = elementChanged; 
    // console.log(this.rowBeforeChanged);
    // console.log(this.rowChanged);
  }

  //verifer si un ligne est modifier
  isRowchanged(row){
    if(row!= null && this.rowSelected != null)
      return JSON.stringify(this.rowSelected) !== JSON.stringify(row);
    return true;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    action:'action'
  };

}

// dialog
@Component({
  selector: 'admin-table-dialog',
  templateUrl: 'admin-table-delete-dialog.html',
})
export class AdminTableDeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<AdminTableDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  annuler(): void {
    this.dialogRef.close();
  }

}

// alert message de modification
@Component({
  selector: 'admin-table-alert-component',
  templateUrl: 'admin-table-alert.html',
  styles: [`
    .table-alert-message {
      color: white;
    }
  `],
})
export class AlertTableModificationComponent {}
