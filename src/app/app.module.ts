// Angular Stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Modules
import { AppRoutingModule } from './routing.module';
import { AppMaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { PopupComponent } from './routes/popup/popup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopupComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
