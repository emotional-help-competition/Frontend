import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/spinner.service';
import { TestService } from 'src/app/core/test.service';
import { IRecommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  emotionJoy = false;
  emotionFear = false;
  emotionSadness = false;
  emotionDisgust = false;
  emotionSurprise = false;
  emotionAnger = false;

  recommendations: IRecommendation[] = [];
  isVisible = false;
  sub!: Subscription;

  constructor(private testService: TestService,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.open()
    this.sub = this.testService.getRecommendations().subscribe((res) => {
      this.recommendations = res;
    });
    setTimeout(() => {
      this.emotionJoy = this.testService.emotionJoy;
      this.emotionFear = this.testService.emotionFear;
      this.emotionSadness = this.testService.emotionSadness;
      this.emotionDisgust = this.testService.emotionDisgust;
      this.emotionSurprise = this.testService.emotionSurprise;
      this.emotionAnger = this.testService.emotionAnger;
      this.isVisible = true;
      this.spinnerService.close();
    }, 2000);
  }
  
  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe()
  }
}
