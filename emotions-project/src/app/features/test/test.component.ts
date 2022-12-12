import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/spinner.service';
import { TestService } from 'src/app/core/test.service';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  postSub!: Subscription;
  isSubmited = false;
  isVisible = false;
  questions: IQuestion[] = [];
  
  testForm = new FormGroup({
    questions: new FormArray([])
  });

  constructor(private testService: TestService,
    private router: Router,
    private route: ActivatedRoute,
    public spinnerService: SpinnerService) { }

  get questionsArr(): FormArray {
    return this.testForm.get('questions') as FormArray
  }
  id!: number;

  ngOnInit(): void {
    this.spinnerService.open()
    this.id = this.route.snapshot.params['id'];
    this.sub = this.testService.getQuizz(this.id).subscribe(res => {
      this.questions = res;
      this.setFormData();
      this.isVisible = true;
      this.spinnerService.close()
    })
  }

  private setFormData() {
    this.questions.forEach(question => this.addQuestion(question));
  }

  private addQuestion({ emotion, value }: IQuestion) {
    const emotionId = emotion.id
    this.questionsArr.push(
      new FormGroup({
        emotionId: new FormControl(emotionId),
        value: new FormControl(value, [
          Validators.required
        ])
      })
    )
  }

  radioOptions(question: IQuestion) {
    return new Array(5);
  }

  onSubmit() {
    this.isSubmited = true;
    if (this.testForm.invalid) return
    this.testService.processTest(this.testForm.value.questions as IQuestion[], this.id).subscribe(atemptId => {
      this.router.navigate(['/result', atemptId])
    })
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
    if (this.postSub) this.postSub.unsubscribe();
  }
}