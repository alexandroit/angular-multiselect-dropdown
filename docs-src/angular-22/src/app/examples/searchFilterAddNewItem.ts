import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './views/searchFilter.html'
})
export class SearchFilterAddItemExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};
  count = 6;
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
      addNewItemOnFilter: true,
      enableFilterSelectAll: true,
      tagToBody: false
    };
  }
  onAddItem(data:string){
    this.count++;
    const list = [...this.itemList, ... [{"id": this.count,"itemName":data,"name":data}]]
    this.itemList = list;
    this.selectedItems.push({"id": this.count,"itemName":data,"name":data});
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
  title: string = "Search and Add New Item, if not found";
  tsgist: string = "CuppaLabs/c1e00c870c3e3b9213e69e0a93518cc6";
  htmlgist: string = "CuppaLabs/0583ba4be8b7c192d14f04375f96c074";
  tstitle: string = "searchFilterAddNewItem.ts"
  htmltitle: string = "searchFilter.html";
}
