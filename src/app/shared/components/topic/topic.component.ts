import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource:any = [];
  displayedColumns: string[] = ['username', 'name', 'surname', 'email', 'rol','modify','baja'];
  
  constructor(private userService: UserService) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.userService.getUserAll().subscribe((data:any)=>{
      this.dataSource =  new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }

}
