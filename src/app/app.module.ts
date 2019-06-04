import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RaaModule } from 'raa-angular';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ResultListComponent } from './result-list/result-list.component';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    RaaModule,
    RouterModule,
    MatNativeDateModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
