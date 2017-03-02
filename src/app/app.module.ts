import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { FilterPieceComponent } from './filter-piece/filter-piece.component';
import { ListFilterComponent } from './list-filter/list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPieceComponent,
    ListFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(), DropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
