import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/spinner.service';
import { TestService } from 'src/app/core/test.service';
import { ResultItem } from 'src/app/models/emotions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  result!: ResultItem[];
  sub!: Subscription;
  recommendations: IRecommendation[] = [];
  isVisible = false;
  sub!: Subscription;

  constructor(private testService: TestService,
    private route: ActivatedRoute,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.open()
    const atemptId = this.route.snapshot.params['id']
    this.sub = this.testService.getResult(atemptId).subscribe((res) => {
      this.result = res;
      this.spinnerService.close();
    })
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe()
  }

}
