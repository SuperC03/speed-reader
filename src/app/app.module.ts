// Angular Stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Custom Modules
import { AppRoutingModule } from './routing.module';
import { AppMaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { PopupComponent } from './routes/popup/popup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RendererComponent } from './components/renderer/renderer.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopupComponent,
    ToolbarComponent,
    RendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
