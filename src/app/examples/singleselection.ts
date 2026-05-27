import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './views/singleSelection.html'
})
export class SingleSelectionExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};
  count = 6;

  constructor() {

  }
  ngOnInit() {


    this.itemList = [
      { "id": 1, "itemName": "Brazil", "name": "BR" },
      { "id": 2, "itemName": "Argentina", "name": "AR" },
      { "id": 3, "itemName": "Chile", "name": "CL" },
      { "id": 4, "itemName": "Canada", "name": "CA" },
      { "id": 5, "itemName": "Colombia", "name": "CO" },
      { "id": 6, "itemName": "Brazil", "name": "BR" }
    ];

    this.selectedItems = [
      { "id": 1, "itemName": "Brazil", "name": "BR" }];
    this.settings = {
      enableSearchFilter: true,
      addNewItemOnFilter: true, singleSelection: true, text: "Select Country",
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
  onAddItem(data: string) {
    this.count++;
    this.itemList.push({ "id": this.count, "itemName": data, "name": data });
    this.selectedItems = [];
    this.selectedItems.push({ "id": this.count, "itemName": data, "name": data });
  }
  cssgist: boolean = false;
  title: string = "Single Selection";
  tsgist: string = "CuppaLabs/6ef578ce507dfd548eec39e008b4de14";
  htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
  tstitle: string = "singleSelection.ts"
  htmltitle: string = "singleSelection.html";
}
