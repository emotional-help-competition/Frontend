import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { ResultpageRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultpageRoutingModule,
    SharedModule,
    ClipboardModule
  ]
})
export class ResultModule { }
