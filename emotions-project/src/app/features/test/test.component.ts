import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from 'src/app/core/test.service';
import { ITest } from 'src/app/models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tests$!: Observable<ITest[]>

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.tests$ = this.testService.getAll()
  }
  onResult(){
    
  }
}
