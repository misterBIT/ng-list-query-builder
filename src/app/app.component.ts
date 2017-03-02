import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items;
  itemsToDisplay;

  constructor(){
    this.items = this.itemsToDisplay = [{name: 'Campaign 1'}, {name: 'Campaign 2'}, {name: 'Campaign 23'}, {name: 'Campaign 234'}, {name: 'Campaign 2345'}, {name: 'Campaign 4'}]
  }

  applyFilter(filterPieces) {
    console.log(filterPieces);

    this.itemsToDisplay = this.items.filter(item => {
      let shouldKeepItem = true;
      filterPieces.forEach(filterPiece => {
        let contains = item.name.includes(filterPiece.query);

        if (filterPiece.operator === 'contains'     && !contains || 
            filterPiece.operator ==='not-contains'  && contains ) {
          shouldKeepItem = false;
        }
      });
      return shouldKeepItem;
      
    });

  }

  
}
