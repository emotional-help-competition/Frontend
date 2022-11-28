import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result = {}

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getResult().subscribe((result) => {
      this.result = result;
      console.log('result', this.result)
    })
  }

}
