export class EncartPresse {
    id: number;
    titre: string;
    logoImg: string;
    imgUrl: string;
    contenu: string;
    presseUrl: string;

    constructor(id, titre, logoImg, imgUrl, contenu, presseUrl){
        this.id = id;
        this.titre = titre;
        this.logoImg = logoImg;
        this.imgUrl = imgUrl;
        this.contenu = contenu;
        this.presseUrl = presseUrl;
    }
}
