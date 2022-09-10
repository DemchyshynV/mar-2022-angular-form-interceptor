import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICar, IResponse} from '../interfaces';
import {urls} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IResponse<ICar>> {
    return this.httpClient.get<IResponse<ICar>>(urls.cars)
  }
}
