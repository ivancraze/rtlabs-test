import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { AuthModule } from './modules/auth/auth.module';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NotFoundModule } from './modules/not-found/not-found.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeaderComponent } from './pages/search-page/components/header/header.component';
import { SearchModule } from './modules/search/search.module';

@NgModule({
  declarations: [AppComponent, EntryPageComponent, NotFoundPageComponent, SearchPageComponent, HeaderComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, NgbModule, AuthModule, NotFoundModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeaderComponent],
})
export class AppModule {}
