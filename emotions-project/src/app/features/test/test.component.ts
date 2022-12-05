import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { TestService } from 'src/app/core/test.service';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {

  sub!: Subscription;
  isSubmited = false;
  questions: IQuestion[] = [];

  testForm = new FormGroup({
    questions: new FormArray([])
  });


  constructor(private testService: TestService,
    private router: Router) { }

  get questionsArr(): FormArray {
    return this.testForm.get('questions') as FormArray
  }

  ngOnInit(): void {
    this.sub = this.testService.getAll().subscribe(questions => {
      this.questions = questions;
      this.setFormData();
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
    console.log(this.testForm.value.questions)
    this.isSubmited = true;
    if (this.testForm.invalid) return
    this.testService.postTest(this.testForm.value.questions as IQuestion[]).subscribe()
    this.router.navigate(['/result'])    
  }


  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}