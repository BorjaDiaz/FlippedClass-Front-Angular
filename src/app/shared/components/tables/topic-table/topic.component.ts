import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { NewTopicComponent } from '../../dialogs/new-topic/new-topic.component';
import { TopicService } from 'src/app/services/auth/topic.service';
import { DeleteTopicComponent } from '../../dialogs/delete-topic/delete-topic.component';

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
  
  constructor(
    private topicService: TopicService,
    private dialog: MatDialog) { }


  //Obtener todos los temas y ponerlos en la tabla
  ngOnInit() {
    this.topicService.getTopicAll().subscribe((data:any)=>{
      this.dataSource =  new MatTableDataSource(data)
      this.dataSource.sort = this.sort;
    });
  }

  //Metodo de filtro
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //Borrar Tema
  openDialogDeleteTopic(element: any){
    const dialogRef = this.dialog.open(DeleteTopicComponent,{
      width: '250px',
      data: {element: element}
    });
  }

  //Crear nuevo Tema
  openDialogNewTopic(){
    const dialogRef = this.dialog.open(NewTopicComponent,{
      width: '250px'
    });
  }

}

