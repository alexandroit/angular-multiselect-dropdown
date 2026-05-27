import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
    templateUrl: './views/usingInList.html'
})
export class UsingInListExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};
    customers = [];
    constructor() {

    }
    ngOnInit() {

        this.customers = [
            {
                name: "Toshiba", countries: [{ "category": "south america", "id": 1, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" },
                { "category": "south america", "id": 2, "itemName": "Argentina", "capital": "Buenos Aires", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg" },
                ]
            },
            { name: "Apple", countries: [] },
            { name: "Samsung", countries: [] },
            {
                name: "MI", countries: [{ "category": "south america", "id": 1, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" },
                { "category": "south america", "id": 2, "itemName": "Argentina", "capital": "Buenos Aires", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg" },
                ]
            },
            { name: "Google", countries: [] }
        ];
        this.itemList = [
            { "category": "south america", "id": 1, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" },
            { "category": "south america", "id": 2, "itemName": "Argentina", "capital": "Buenos Aires", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" },
            { "category": "south america", "id": 5, "itemName": "Colombia", "capital": "Bogota", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Colombia.jpg" },
            { "category": "latin america", "id": 6, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" }
        ];

        this.selectedItems = [
            { "category": "south america", "id": 1, "itemName": "Brazil", "capital": "Brasilia", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg" },
            { "category": "south america", "id": 2, "itemName": "Argentina", "capital": "Buenos Aires", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Argentina.jpg" },
            { "category": "europe", "id": 3, "itemName": "United Kingdom", "capital": "London", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg" },
            { "category": "northamerica", "id": 4, "itemName": "Canada", "capital": "Ottawa", "image": "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg" }]
        this.settings = {
            text: "Select Countries",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: true,
            tagToBody: false
        };

    }
    onItemSelect(item: any) {
        console.log(this.customers);
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
    onGroupSelect(selectedGroupItem) {
        console.log(selectedGroupItem);
    }
    onGroupDeSelect(deselectedGroupItem) {
        console.log(deselectedGroupItem);
    }
    cssgist: boolean = false;
    title: string = "Using in List - Inside `for loop`";
    tsgist: string = "CuppaLabs/0d2dc802967cca16ffc5053d0b873aba";
    htmlgist: string = "CuppaLabs/85fb2b925a56c2e533e321ae09de0e2f";
    tstitle: string = "usingInList.ts"
    htmltitle: string = "usingInList.html";
}
