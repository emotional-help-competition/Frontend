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

  // emotionJoy = false;
  // emotionFear = false;
  // emotionSadness = false;
  // emotionDisgust = false;
  // emotionSurprise = false;
  // emotionAnger = false;

  result!:ResultItem[];

  constructor(private testService: TestService,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.open()
    this.testService.getResult(1).subscribe((res)=>this.result = res)
    setTimeout(() => {
      // this.emotionJoy = this.testService.emotionJoy;
      // this.emotionFear = this.testService.emotionFear;
      // this.emotionSadness = this.testService.emotionSadness;
      // this.emotionDisgust = this.testService.emotionDisgust;
      // this.emotionSurprise = this.testService.emotionSurprise;
      // this.emotionAnger = this.testService.emotionAnger;
      this.spinnerService.close();
    }, 2000)
  }

}
