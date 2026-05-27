import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './views/view.html'
})
export class SearchFilterByOnePropertyExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor() {

  }
  ngOnInit() {


    this.itemList = [
      {"id":1,"itemName":"Brazil","name":"BR"},
                          {"id":2,"itemName":"Argentina","name":"AR"},
                          {"id":3,"itemName":"Chile","name":"CL"},
                          {"id":4,"itemName":"Canada","name":"CA"},
                          {"id":5,"itemName":"Colombia","name":"CO"},    
                          {"id":6,"itemName":"Brazil","name":"BR"}    
    ];

    this.selectedItems = [
      {"id":1,"itemName":"Brazil","name":"BR"},
                          {"id":2,"itemName":"Argentina","name":"AR"},
                          {"id":3,"itemName":"Chile","name":"CL"},
                          {"id":4,"itemName":"Canada","name":"CA"}];
    this.settings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      badgeShowLimit: 3,
      searchBy: ['itemName'],
      searchPlaceholderText: 'Search by name',
      tagToBody: false 
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  cssgist: boolean = false;
  title: string = "Search filter by one property / key";
  tsgist: string = "CuppaLabs/f6acd1eb94c95df32f689260b1f38b4c";
  htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
  tstitle: string = "searchFilterByProperty.ts"
  htmltitle: string = "searchFilterByProperty.html";
}
