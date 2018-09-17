import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatFormFieldModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,   
    //MatFormFieldModule,
    //MatButtonModule,
    //MatInputModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
    //LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
