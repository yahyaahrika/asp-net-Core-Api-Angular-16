import { Component,OnInit } from '@angular/core';  
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {


  animes:any;

  constructor( public _shared : SharedService){}
  ngOnInit() { 

   return this._shared.GetListAnime().subscribe(
      res => {
        this.animes = res,
        console.log(res) },
      err =>{ console.log(err) }
      
      );

  }

  delete(id :any){
    return this._shared.Delete(id).subscribe(
      res => {// Get List Data
      this.ngOnInit();
     },
      err =>{ console.log(err) });
  }


}
