import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './../shared.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  anime: any;
  id : any;
  constructor( private act: ActivatedRoute, public _shared :SharedService , private router :Router){}
  

  update(id :any , anime :any){
   return this._shared.Update(id ,anime)
      .subscribe(
        req =>{ console.log(req);     this.router.navigate(['/List']);},
        err => {console.log(err)}
       );
    
  }
  ngOnInit(){
    this.id= this.act.snapshot.paramMap.get('id');
    return this._shared.GetAnime(this.id).subscribe(
      req =>{ this.anime = req},
      err => {console.log(err)}
     );
   
    
  }
  
}
