import { NgModule, } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { Ng4PaginatorComponent } from "./ng4-paginator.component";

@NgModule({
    imports: [
        HttpModule,
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
