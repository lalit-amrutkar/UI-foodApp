import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-view',
  imports: [CommonModule, FormsModule],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
  exportAs: 'tableView'
  // exportAs property allows the component to be referenced in templates 
})
export class TableViewComponent {

  @Input() tableData: any[] = []; // Input property to receive table data 
  searchQuery: string = ""
  currentPage: number = 1; // Current page number
  public totalPages: number = 10; // Total number of pages
  public pageSize: number = 10; // Number of items per page
  public totalItems: number = 100; // Total number of items
  public items: any[] = []; // Array to hold table data
  public columns: string[] = []; // Array to hold table column names
  public selectedRow: any; // Variable to hold the selected row data
  public filterValue: string = ''; // Variable to hold the filter value

  public sortDirection: string = 'asc'; // Variable to hold the sort direction
  public sortOptions: string[] = ['asc', 'desc']; // Array to hold sort options



  constructor() {
    // Initialize table data and columns here
  }

  //Edit
  editItem(item: any) {

  }

  deleteItem(item: any) {

  }
}
