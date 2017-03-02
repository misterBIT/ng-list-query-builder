import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css']
})
export class ListFilterComponent {

  @Input() filterTypes;
  @Output() onFilter = new EventEmitter();

  filterPieces = [];

  addFilterPiece(filterType) {
    this.filterPieces.push({type: filterType, query: '', editable: true, operator: ''});
  }
  updateFilterPiece(idx, data) {  
    this.filterPieces[idx].query = data.query;
    this.filterPieces[idx].operator = data.operator;
    this.onFilter.emit(this.filterPieces);
  }
  removeFilterPiece(idx) {
    this.filterPieces.splice(idx, 1);
    this.onFilter.emit(this.filterPieces);
  }  

}
