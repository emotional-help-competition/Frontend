import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { QuestionComponent } from './question/question.component';
import { CircleItemComponent } from './circle-item/circle-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

const components = [HeaderComponent, FooterComponent, ButtonComponent, CardComponent, QuestionComponent, CircleItemComponent, SpinnerComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ], exports: [...components]
})
export class SharedModule { }
