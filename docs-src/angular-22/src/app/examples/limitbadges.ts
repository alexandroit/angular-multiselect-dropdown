import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './views/view.html'
})
export class LimitBadgesExample implements OnInit {

  itemList = [];
  selectedItems = [];
  settings = {};

  constructor() {

  }
  ngOnInit() {


    this.itemList = [
      { "id": 1, "itemName": "Brazil" },
      { "id": 2, "itemName": "Argentina" },
      { "id": 3, "itemName": "Chile" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "Colombia" },
      { "id": 6, "itemName": "Brazil" }
    ];

    this.selectedItems = [
      { "id": 1, "itemName": "Brazil" },
      { "id": 2, "itemName": "Argentina" },
      { "id": 3, "itemName": "Chile" },
      { "id": 4, "itemName": "Canada" }];
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
  title: string = "Limit badges length";
  tsgist: string = "CuppaLabs/00a25e7f8f70199f6571ac9fccbb94c2";
  htmlgist: string = "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8";
  tstitle: string = "limitBadges.ts"
  htmltitle: string = "limitBadges.html";
}
