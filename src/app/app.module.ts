import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { SidewidgetComponent } from './sidewidget/sidewidget.component';
import { FooterComponent } from './footer/footer.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './service/posts.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CategoriesComponent,
    SidewidgetComponent,
    FooterComponent,
    BlogpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
