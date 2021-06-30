import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './Filter.pipe';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstformComponent } from './firstform/firstform.component';
import { SecondformComponent } from './secondform/secondform.component';
import { ThirdformComponent } from './thirdform/thirdform.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ApplyComponent } from './apply/apply.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { MatDialogModule } from '@angular/material/dialog';
import {ClipboardModule} from '@angular/cdk/clipboard';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FirstformComponent,
    SecondformComponent,
    ThirdformComponent,
    HeaderComponent,
    SearchComponent,
    DetailsComponent,
    ApplyComponent,
    ThankyouComponent
  ],
  imports: [
    ClipboardModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [ApplyComponent],
  providers: [{provide:MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
