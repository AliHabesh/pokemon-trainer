import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../enums/storage-keys.enum';

const trainerApiUrl = environment.apiTrainersUrl;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  public login(username: String): Observable<User | undefined> {
    return this.checkUsername(username).pipe(
      switchMap((user: User | undefined) => {
        if (user === undefined) {
          return this.createUser(username);
        }

        return of(user);
      }),
      tap((user: User) => {
        StorageUtil.storageSave<User>(StorageKeys.User, user);
      })
    );
  }

  private checkUsername(username: String): Observable<User | undefined> {
    return this.http
      .get<User[]>(`${trainerApiUrl}?username=${username}`)
      .pipe(map((response: User[]) => response.pop()));
  }

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
