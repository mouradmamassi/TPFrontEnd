import {MatPaginatorIntl} from '@angular/material';


export class MatPaginatorIntlCustom extends MatPaginatorIntl {
  itemsPerPageLabel = 'Enregistrements par page';
  nextPageLabel     = 'Page suivante';
  previousPageLabel = 'Page précédente';
  getRangeLabel =  (page: number, pageSize: number, length: number) => { if (length == 0 || pageSize == 0) { return `0 sur ${length}`; } length = Math.max(length, 0); const startIndex = page * pageSize; const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} – ${endIndex} sur ${length}`; }
}