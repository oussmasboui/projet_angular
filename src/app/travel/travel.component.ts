import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Travel } from '../Model/Travel';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  ListTravels:Travel[];
  travel:Travel;
  
  constructor(private ac:ActivatedRoute, private travelServ:TravelService) { }

  ngOnInit(): void {
    this.travelServ.getAllTravelssFromServer().subscribe(res=>{
      this.ListTravels=res;
    console.log(this.ListTravels)
  });


  }
  deleteTravel(id:number){
    this.travelServ.deleteTravelById(id).subscribe(()=>this.travelServ.getAllTravelssFromServer()
      .subscribe(res=>{this.ListTravels=res})
    );
  }

/*addTravel(){
  this.travelServ.addTravel(this.newTravel).subscribe(tr=> {console.log(tr);});
  this.router.navigate(['travels']);
}*/
  


}