import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Travel } from '../Model/Travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  listTravels : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }
  readonly BaseURI = 'http://localhost:8089/SpringMVC';

  getTravels(){
    return this.myHttp.get(this.BaseURI+ '/travel/retrieve-all-travels');
  }
  getAllTravelssFromServer(): Observable<Travel[]> {
     
    return this.myHttp.get<Travel[]>('http://localhost:8089/SpringMVC/travel/retrieve-all-travels');
  }

  deleteTravelById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/travel/remove-travel/"+id);
    }

    getTravelById(idTravel:number):Observable<Travel>{
      return this.myHttp.get<Travel>("http://localhost:8089/SpringMVC/travel/retrieve-travel/"+idTravel);
      }

      addTravel(travel:Travel):Observable<Travel>{
        return this.myHttp.post<Travel>("http://localhost:8089/SpringMVC/travel/add-travel/",travel,this.httpOptions);
        }
  

}
