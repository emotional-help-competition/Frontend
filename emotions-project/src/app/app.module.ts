import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TestService } from './core/test.service';
import { TestServiceMock } from './core/test.service.mock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [
    {provide: TestService, useClass: TestServiceMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
