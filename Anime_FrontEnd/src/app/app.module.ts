import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    AddComponent,
    ListComponent,
    NotfoundComponent,
    UpdateComponent,
  ],
  imports: [
  
BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent,
    AnimeComponent,
    AddComponent,
    ListComponent,
    NotfoundComponent,
    UpdateComponent]
})
export class AppModule { }
