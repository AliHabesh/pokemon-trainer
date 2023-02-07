import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

const trainerApiUrl = environment.apiTrainersUrl;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  //Handles login functionality
  public login(username: String): Observable<User | undefined> {
    return this.checkUsername(username).pipe(
      switchMap((user: User | undefined) => {
        if (user === undefined) {
          return this.createUser(username);
        }

        return of(user);
      })
    );
  }
  //Checks if the username exists in the API
  private checkUsername(username: String): Observable<User | undefined> {
    return this.http
      .get<User[]>(`${trainerApiUrl}?username=${username}`)
      .pipe(map((response: User[]) => response.pop()));
  }

  //Creates user, if user doesnt exist
  private createUser(username: String): Observable<User> {
    const user = {
      username,
      pokemons: [],
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apiKey,
    });

    return this.http.post<User>(trainerApiUrl, user, {
      headers,
    });
  }
}
