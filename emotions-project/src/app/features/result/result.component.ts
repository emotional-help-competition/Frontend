import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/spinner.service';
import { TestService } from 'src/app/core/test.service';
import { ResultItem } from 'src/app/models/emotions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result!:ResultItem[];

  constructor(private testService: TestService,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.open()
    const atemptId = this.testService.attempt
      this.testService.getResult(atemptId).subscribe((res)=>this.result = res)
    setTimeout(() => {      
      this.spinnerService.close();
    }, 2000)
  }

}
