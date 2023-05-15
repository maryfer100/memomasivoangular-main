import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, _} from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {
  getRowId: any;
 
  constructor (private http: HttpClient){}

public columnDefs: ColDef[] = [
  { headerName : 'NO.EMPLEADO', field: 'numemp'},
  { headerName : 'NOMBRE', field: 'nombre'},
  { headerName : 'CENTRO', field: 'centro'},
  { headerName : 'PUESTO', field: 'puesto'},
 
];
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: false,
    filter: false,
  };

  // Data that gets displayed in the grid
  public rowData!: Observable<any[]>;
  
  // For accessing the Grid's API
  //@ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  @ViewChild('myGrid') myGrid!: AgGridAngular;
 
  // Example load data from sever
  onGridReady(_params: GridReadyEvent) {
    this.rowData = this.http.get<any[]>('https://infoempleados-786f9-default-rtdb.firebaseio.com/info.json'); 
            console.log('rowid:'+_params);
      
          }
  
  //Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
    console.log('id: '+ e.node.id);
    console.log('id: '+ e.data.numemp);
    console.log('data: '+this.myGrid.api.getRowNode('1')); 
  }
}