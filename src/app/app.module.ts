import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ExportComponent } from './components/export/export.component';
import {DataTableModule,SharedModule,GrowlModule,DialogModule,ConfirmDialogModule,ConfirmationService,TooltipModule} from 'primeng/primeng';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SaveEmployeeDataService } from './services/saveEmployeeData.service';
import {MatCardModule,MatFormFieldModule,MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    TrainingsComponent,
    AnalyticsComponent,
    ExportComponent,
    AddEmployeeComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    DataTableModule,
    SharedModule,
    GrowlModule,
    DialogModule,
    ConfirmDialogModule,
    TooltipModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ConfirmationService,SaveEmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
