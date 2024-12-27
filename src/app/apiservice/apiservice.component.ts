import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root' // This makes the service available globally
})

export class ApiserviceComponent {
  constructor(private http: HttpClient) { }
  httpRequest: any = this.http
  private apiUrl = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${this.apiToken}`,
    })
  };

  User() {
    const HTTPRequest = this.http;
    var str = "/users"
    return {
      postLogin: (credentials: any) => {
        const api = this.apiUrl + str + "/login"
        return HTTPRequest.post(api, credentials).toPromise();
      }
    }
  }
  Channel() {
    const HTTPRequest = this.http;
    var str = "/channels"
    return {
      getAll: (limit: number, paging: number) => {
        const api = this.apiUrl + str + `/getall?limit=${limit}&paging=${paging}`
        return HTTPRequest.get(api, this.httpOptions).toPromise();
      },
      getById: (id: any) => {
        const api = this.apiUrl + str + `/get/${id}`
        return HTTPRequest.get(api, this.httpOptions).toPromise();
      },
      postCreate: (body: any) => {
        const api = this.apiUrl + str + "/create"
        return HTTPRequest.post(api, body).toPromise();
      },
      putUpdate: (body: any) => {
        const api = this.apiUrl + str + `/update/${body.id}`
        return HTTPRequest.put(api, body).toPromise();
      }
    }
  }
  Post() {
    const HTTPRequest = this.http;
    var str = "/posts"
    return {
      getAll: (limit: number, paging: number) => {
        const api = this.apiUrl + str + `/getall?limit=${limit}&paging=${paging}`
        return HTTPRequest.get(api, this.httpOptions).toPromise();
      },
      getById: (id: any) => {
        const api = this.apiUrl + str + `/get/${id}`
        return HTTPRequest.get(api, this.httpOptions).toPromise();
      },
      putUpdate: (body: any) => {
        const api = this.apiUrl + str + `/update/${body.id}`
        return HTTPRequest.put(api, body).toPromise();
      },
      postCreate: (body: any) => {
        const api = this.apiUrl + str + "/create"
        return HTTPRequest.post(api, body).toPromise();
      },
    }
  }
  CohereAI(text: any) {
    const HTTPRequest = this.http;
    const API_KEY = 'UUWIFEwRhAIsSSZwVkG0Nbclor21ye6SsFBVe3BQ';
    const URL = 'https://api.cohere.ai/generate';
    var body = {
      model: 'command-xlarge-nightly',
      prompt: text,
      max_tokens: 100,
      temperature: 0.7,
    }
    var headers = {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    }
    return HTTPRequest.post(URL, body, { headers }).toPromise();

  }
  //
}
