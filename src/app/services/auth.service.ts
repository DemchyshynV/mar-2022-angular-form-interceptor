import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IToken, IUser} from '../interfaces';
import {Observable, tap} from 'rxjs';
import {urls} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly accessTokenKey = 'access'
  private readonly refreshTokenKey = 'refresh'

  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<void> {
    return this.httpClient.post<void>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user).pipe(
      tap(value => {
        this._setTokens(value)
      })
    )
  }
  refresh(refresh:string):Observable<IToken>{
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap(value => {
        this._setTokens(value)
      })
    )
  }

  private _setTokens(tokens: IToken): void {
    localStorage.setItem(this.accessTokenKey, tokens.access)
    localStorage.setItem(this.refreshTokenKey, tokens.refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) || ''
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) || ''
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken()
  }
  deleteTokens():void{
    localStorage.removeItem(this.refreshTokenKey)
    localStorage.removeItem(this.accessTokenKey)
  }
}
