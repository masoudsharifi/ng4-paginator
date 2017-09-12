import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { Ng4PaginatorComponent } from "./ng4-paginator.component";



@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        Ng4PaginatorComponent
    ],
    declarations: [
        Ng4PaginatorComponent
    ],
    providers: [],
})
export class Ng4PaginatorModule { }
