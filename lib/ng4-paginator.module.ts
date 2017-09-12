import { NgModule, } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { PaginatorComponent } from "./paginator.component";



@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        PaginatorComponent
    ],
    declarations: [
        PaginatorComponent
    ],
    providers: [],
})
export class Ng4PaginatorModule { }
