import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './views/templating.html'
})
export class TemplatingExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor(){
    
  }
  ngOnInit(){
   

    this.itemList = [
                          {"category":"south america","id":1,"itemName":"Brazil","capital":"Brasilia","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"},
                          {"category":"south america","id":2,"itemName":"Argentina", "capital":"Buenos Aires","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg"},
                          {"category":"europe","id":3,"itemName":"United Kingdom", "capital":"London","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
                          {"category":"northamerica","id":4,"itemName":"Canada","capital":"Ottawa","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"},
                          {"category":"south america","id":5,"itemName":"Colombia","capital":"Bogota","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Colombia.jpg"},    
                          {"category":"latin america","id":6,"itemName":"Brazil","capital":"Brasilia","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"}                      
                        ];
    
    this.selectedItems = [
                          {"category":"south america","id":1,"itemName":"Brazil","capital":"Brasilia","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"},
                          {"category":"south america","id":2,"itemName":"Argentina", "capital":"Buenos Aires","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg"},
                          {"category":"europe","id":3,"itemName":"United Kingdom", "capital":"London","image":"http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"},
                          {"category":"northamerica","id":4,"itemName":"Canada","capital":"Ottawa","image":"http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg"}]
    this.settings = { 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class",
                              showCheckbox: true,
                              groupBy: "category",
                              tagToBody: false,
                            };

  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any){
    console.log(items);
  }
   onDeSelectAll(items: any){
    console.log(items);
  }
  onGroupSelect(selectedGroupItem){
    console.log(selectedGroupItem);
  }
  onGroupDeSelect(deselectedGroupItem){
    console.log(deselectedGroupItem);
  }
  cssgist: boolean = false;
    title: string = "Templating menu option";
    tsgist: string = "CuppaLabs/cc0ac5976bf26b89119180ff82115fe4";
    htmlgist: string = "CuppaLabs/6399258d93fd5580be1736aba2539519";
    tstitle: string = "templating.ts"
    htmltitle: string = "templating.html";
}
