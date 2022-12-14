import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CircleItemComponent } from './circle-item/circle-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { EmotionMapComponent } from './emotion-map/emotion-map.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const components = [HeaderComponent, FooterComponent, ButtonComponent, CardComponent, CircleItemComponent, SpinnerComponent, RecommendationListComponent, RecommendationComponent, EmotionMapComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ], exports: [...components]
})
export class SharedModule { }
