import { CharacterSearchService } from './services/character-search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [
    CharacterSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
