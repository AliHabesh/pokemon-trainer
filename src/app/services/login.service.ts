import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // Check if user exists
  /* private checkUsername(username: String): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
    .pipe(
      map((response: User[]) => response.pop())
    )
    
  }
  */

  //if not - create user

  //store user (if new)
}
