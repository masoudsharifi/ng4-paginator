import { 
    Input,
    Output, 
    OnInit,
    Component,
    EventEmitter,
    // ChangeDetectorRef,
    DoCheck
  } from '@angular/core';
  
  @Component({
    selector: 'ng4-paginator',
    template: `  
      <table>
        <tr>
          <td>
            <button
              *ngIf="pageGroupNumber > 1"
              class="page-btn page-btn-default"
              (click)="onPageSelectionChange(1)">&lt;&lt;</button>
          </td>
          <td>
            <button 
              *ngIf="pageGroupNumber > 1"
              class="page-btn page-btn-default"
              (click)="onPageSelectionChange(startPageNumber - 1)">&lt;</button>
          </td>
          <td *ngFor="let num of pageNumbers">
            <a
              [ngClass]="[num === currentPage ? 'page-btn page-btn-primary' : 'page-btn page-btn-default']"
              (click)="onPageSelectionChange(num)">{{num}}</a>
          </td>
          <td>
            <button
              *ngIf="pageGroupNumber < lastPageGroupNumber"
              class="page-btn page-btn-default"
              (click)="onPageSelectionChange(lastPageNumber)">&gt;</button>
          </td>
          <td>
            <button
              *ngIf="pageGroupNumber < lastPageGroupNumber && currentPage < totalPageCount "
              class="page-btn page-btn-default"
              (click)="onPageSelectionChange(totalPageCount)">&gt;&gt;</button>
          </td>
        </tr>
      </table>
    `,
    styles: [`
    .page-btn {
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: normal;
        font-family: Arial, Verdana;
        line-height: 1.428571429;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
             -o-user-select: none;
                user-select: none;
    }
    .page-btn-primary {
        color: #fff;
        background-color: #428bca;
        border-color: #357ebd;
        border: 1px solid #808080;
    }
    .page-btn-primary:hover,
    .page-btn-primary:focus,
    .page-btn-primary:active,
    .page-btn-primary.active {
        color: #fff;
        background-color: #3276b1;
        border-color: #285e8e;
    }
    .page-btn-default {
        background-color: #fff;
        border-color: #d4d4d4;
    }
    .page-btn-default:hover,
    .page-btn-default:focus,
    .page-btn-default:active,
    .page-btn-default.active {
        color: #333;
        background-color: #ebebeb;
        border-color: #adadad;
    }
    .row {
      margin-right: 0px;
      margin-left: 0px;
    }
    
    .row:before,
    .row:after {
      display: table;
      content: " ";
    }
    
    .row:after {
      clear: both;
    }
    
    .row:before,
    .row:after {
      display: table;
      content: " ";
    }
    
    .row:after {
      clear: both;
    }   
    .group-button {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      float: left;
    }
    .group-button > .btn:first-child:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    `]
  })
  export class Ng4PaginatorComponent implements OnInit, DoCheck {
    @Input() totalRecords: number = 0;
    @Input() pagesPerGroup: number = 5;
    @Input() recordsPerPage: number = 10;
    @Output() currentPageChanged: EventEmitter<number> = new EventEmitter<number>();
  
    totalPageCount: number;
    currentPage: number;
    startPageNumber: number;
    lastPageNumber: number;
    pageGroupNumber: number = 1;
    lastPageGroupNumber: number;
    pageNumbers: number[]; 
  
    constructor(
      // private _changeDetectorRef: ChangeDetectorRef
    ) {}
  
    ngOnInit() {
      this.currentPage = 1;
      this.pageNumbers = [];

      this.totalPageCount = Math.floor(this.totalRecords / this.recordsPerPage);
      if(this.totalRecords % this.recordsPerPage !== 0) {
        this.totalPageCount++;
      }
      this.lastPageGroupNumber = Math.floor(this.totalPageCount / this.pagesPerGroup);
      if((this.totalPageCount % this.pagesPerGroup) !== 0) {
        this.lastPageGroupNumber++;
      }   
      this.populatePageArray();
    }

    ngDoCheck() {
      console.log('Something changed...');
    }
  
    populatePageArray() {  
      this.pageGroupNumber = Math.floor(this.currentPage / this.pagesPerGroup);
      if(this.currentPage % this.pagesPerGroup !== 0) {
        this.pageGroupNumber++;
      }
  
      this.startPageNumber = ((this.pageGroupNumber - 1) * this.pagesPerGroup) + 1;
      if(this.startPageNumber === 0) {
        this.startPageNumber = 1;
      }
      let i = this.startPageNumber;

      this.pageNumbers = [];        
      let j = this.startPageNumber;
      let maxJ = this.startPageNumber;
      maxJ += +this.pagesPerGroup;

      for(;j < maxJ && j <= this.totalPageCount;j++) {
        this.pageNumbers.push(j);
      } 
      this.lastPageNumber = j;
      // this._changeDetectorRef.detectChanges();
    }
  
    onPageSelectionChange(newPageNumber) {          
      if(newPageNumber > 0 && newPageNumber <= this.totalPageCount) {
        this.currentPage = newPageNumber;
        this.populatePageArray();    
        this.currentPageChanged.emit(newPageNumber);
      }
    }  
  }