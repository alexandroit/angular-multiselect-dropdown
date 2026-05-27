import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './views/view.html'
})
export class SearchFilterExample implements OnInit {

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
  title: string = "Search filter";
  tsgist: string = "CuppaLabs/447bd5fce6dfc2832f5f4a8c36726a9b";
  htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
  tstitle: string = "searchFilter.ts"
  htmltitle: string = "searchFilter.html";
}
