import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ThreeSixtyViewComponent } from './components/three-sixty-view/three-sixty-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeSixtyViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
