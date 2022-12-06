import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService  } from 'ngx-toastr';
import { DialogComponent } from '../../dialog/dialog/dialog.component';
import { NoticiasService } from 'src/app/services/noticias.service';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  title = 'AngularCrud';

  displayedColumns: string[] = ['productname', 'category', 'date', 'freshness', 'price', 'comment', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api : NoticiasService, private toastr: ToastrService){
    

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.getAllProducts();
      }
    })
  }

  getAllProducts(){
    this.dataSource = new MatTableDataSource(this.api.getProduct());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  editProduct(row : any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data : row
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.getAllProducts();
      }
      })
  }

  deleteProduct(id: string){

    this.api.deleteProducto(id) 
    this.getAllProducts();
    this.toastr.success('The product was deleted successfully!', 'Product Deleted!');

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
