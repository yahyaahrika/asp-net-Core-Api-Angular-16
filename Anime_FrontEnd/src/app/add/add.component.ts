import { SharedService } from '../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  anime = {
    id:0,
    name :'',
    scope:0,
    img:'https://img.freepik.com/free-photo/anime-baby-character-with-dragon-costume-illustration_23-2151117666.jpg'
  };

  
  AddAnmine(){
    this._shared.CreateNewAnime(this.anime)
    .subscribe(
      res=>  { console.log( res);} ,
      err=> { console.log(err);}
    );
    this.anime = {
      id:0,
      name :'',
      scope:0,
      img:'https://img.freepik.com/free-photo/anime-baby-character-with-dragon-costume-illustration_23-2151117666.jpg'
    };
  

  }
  constructor(public _shared:SharedService){}
  
  ngOnInit(){
  }

}
