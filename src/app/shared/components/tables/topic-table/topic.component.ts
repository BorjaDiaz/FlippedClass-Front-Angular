import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DeleteTopicComponent } from '../../dialogs/delete-topic/delete-topic.component';
import { NewTopicComponent } from '../../dialogs/new-topic/new-topic.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource:any = [];
  displayedColumns: string[] = ['id','topic','delete'];
  element: any;
  
  constructor(private userService: UserService,private http: HttpClient,private dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.userService.getTopicAll().subscribe((data:any)=>{
      this.dataSource =  new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }

  onDeleteTopic(element: any){
    const dialogRef = this.dialog.open(DeleteTopicComponent,{
      width: '250px',
      data: {element: element}
    });
  }

  openNewTopic(){
    const dialogRef = this.dialog.open(NewTopicComponent,{
      width: '250px'
    });
  }

}
