import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog } from '@angular/material';
import { UserSignup } from 'src/app/dashboard/models/user-signup';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserSignup) { }

  ngOnInit() {
  }

}
