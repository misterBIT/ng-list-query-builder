import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'filter-piece',
  templateUrl: './filter-piece.component.html',
  styleUrls: ['./filter-piece.component.css']
})
export class FilterPieceComponent implements OnInit {

  @Input('piece') piece;
  @Output('remove') remove = new EventEmitter();
  @Output('update') update = new EventEmitter();
  
  @ViewChild('elPieceQuery') vc;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {         
    // console.log(this.vc);   
    if (this.piece.editable)  this.vc.nativeElement.focus();
  }
  updatePiece(query, operator) {
    this.update.emit({query, operator});
    this.piece.editable=false;
  }
  
}
