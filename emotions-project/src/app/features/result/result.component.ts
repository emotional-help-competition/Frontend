import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/spinner.service';
import { TestService } from 'src/app/core/test.service';
import { ResultItem } from 'src/app/models/emotions';
import { IRecommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  result!: ResultItem[];
  sub!: Subscription;
  recSub!: Subscription;
  recommendations: IRecommendation[] = [];
  isVisible = false;
  link = this.router.routerState.snapshot.url;

  constructor(private testService: TestService,
    private route: ActivatedRoute,
    private router: Router,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerService.open()
    const atemptId = this.route.snapshot.params['id']
    this.recSub = this.testService.getRecommendations(atemptId).subscribe(res => this.recommendations = res)
    this.sub = this.testService.getResult(atemptId).subscribe((res) => {
      this.result = res;
      this.isVisible = true;
      this.spinnerService.close();
    })
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
    if (this.recSub) this.recSub.unsubscribe();
  }

}
