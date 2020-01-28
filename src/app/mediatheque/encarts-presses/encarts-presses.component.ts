import { Component, OnInit } from '@angular/core';
import { EncartPresse } from 'src/app/classes/encart-presse';

@Component({
  selector: 'app-encarts-presses',
  templateUrl: './encarts-presses.component.html',
  styleUrls: ['./encarts-presses.component.css']
})
export class EncartsPressesComponent implements OnInit {

  encartsPresses: EncartPresse[]=[
    new EncartPresse(1, 
      "1 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(2, 
      "2 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(3, 
      "3 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(4, 
      "4 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(5, 
      "5 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(6, 
      "6 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(7, 
      "7 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(8, 
      "8 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]"),
    new EncartPresse(9, 
      "9 Plomb, pesticides, déchets médicaux : à Guérande, les marais salants sont menacés de toutes parts",
      "https://www.lemurdelapresse.com/images/murpresse/logo_News/franceinfo.gif",
      "https://www.francetvinfo.fr/image/75rt4cgpk-a283/500/281/20831157.jpg",
      "Sur notre plateforme #AlertePollution, un représentant associatif a signalé plusieurs atteintes à la biodiversité et à la qualité de l'eau autour des marais salants. Sur place, les différents acteurs tentent d'y faire face.",
      "https://www.francetvinfo.fr/monde/environnement/alerte-pollution/plomb-pesticides-dechets-medicaux-a-guerande-les-marais-salants-sont-menaces-de-toutes-parts_3796837.html#xtor=RSS-3-[lestitres]")
  ];
  pageSize: number = 3;
  pagedList = [];
  breakpoint = 3;
  constructor() { }

  ngOnInit() {
    this.pagedList = this.encartsPresses.slice(0, this.pageSize);
  }
  onChangePagedList(pagedList){
    this.pagedList = pagedList;
  }
  onResize(breakpoint){
    this.breakpoint = breakpoint;
  }

}
