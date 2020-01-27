export class Annonce {
    id: number;
    titre: string;
    contenu: string;
    datePublication: Date;
    constructor(id, titre, contenu, datePublication){
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.datePublication = datePublication;
    }
}
