
import {  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { EmployeeData } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee_list_presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.scss'],
  viewProviders: [EmployeeListPresenterService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListPresentationComponent implements OnInit {

  // Set Data for list
  @Input() public set employeeList(value : EmployeeData[] | null){
    console.log(value);
    if(value){
      if(!this._employeeListOrignal){
        this._employeeListOrignal = value;
      }     
      this._employeeList = value;
    }
  }

  public get employeeList() : EmployeeData[] {
    return this._employeeList;
  }

  // Delete
  @Output() public delete : EventEmitter<number>;
  @Output() public originalData : EventEmitter<EmployeeData[]>;
  
  private _employeeList! : EmployeeData[];
  private _employeeListOrignal :EmployeeData[];
  public isFilterMode : Boolean;
  public displayList : EmployeeData[];  

  constructor( private employeeListPresenter : EmployeeListPresenterService, private router: Router, private overlay : Overlay,private cdr: ChangeDetectorRef) { 
    this.delete = new EventEmitter();
    this.originalData = new EventEmitter();
    this.displayList =[];
  }

  ngOnInit(): void {
    this.employeeListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })    
    this.filterList();
  }

  // Delete
  public OnDelete(id : number){
    this.employeeListPresenter.onDelete(id);
  }

  // Edit
  onEdit(id: number) {
    this.router.navigateByUrl(`mvp/edit/${id}`);
  }

  // Open Overlay
  public filterOverlay( ){
    this.employeeListPresenter.openFilter(this._employeeListOrignal);
  }

  // Filter List
  public filterList(){
    this.employeeListPresenter.filterData$.subscribe((res)=>{ 
      this._employeeList = res ;
      this.isFilterMode = true;
    });
  }
  
  // Pagination
  public changePage(items: EmployeeData[]){
    this.displayList = items;
  }

}

  
