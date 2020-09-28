import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Guide } from 'src/app/logic/Guide';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.css']
})
export class SubListComponent implements OnInit {
  list: [Guide];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getList(list => {
      this.list = list;
    });
  }
}
