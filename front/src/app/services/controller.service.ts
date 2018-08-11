import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ControllerService {

  private header: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });;

  constructor(private http: HttpClient) { }

  movementxy(movementxy:any = { x:0, y:0}):Observable<any>{
    return this.http.post<any>('api/movementxy',movementxy,{headers: this.header});
      
  }

  movementz(movementxy:any = { z:0}){
    return this.http.post<any>('api/movementz',movementxy,{headers: this.header});
  }

  pincers_open(){
    return this.http.post<any>('api/pincers/open',{},{headers: this.header});
  }
  pincers_close(){
    return this.http.post<any>('api/pincers/close',{},{headers: this.header});
  }

}
