import { Component, OnInit, Input } from '@angular/core';

import { ITest } from 'src/app/models/test';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() test!: ITest;
  
  constructor() { }

  
  ngOnInit(): void {
  }
 
}
