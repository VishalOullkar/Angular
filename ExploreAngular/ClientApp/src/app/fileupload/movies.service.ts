import { Injectable } from '@angular/core';
import { Movie } from './movie';
//import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod, } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { error } from 'util';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: Http,private httpClient:HttpClient) { }

  MovieList: Movie[];
  SelectedMovie: Movie;



  //getMovieList() {
  //  this.http.get('http://localhost/sample/api/Movies')
  //    .map((data: Response) => {
  //      return data.json() as Movie[];
  //    }).toPromise().then(x => {
  //      this.MovieList = x;
  //      console.warn(this.MovieList)
  //    })
  //}

  getMovieList(): Observable<Movie[]>
  {

    return this.httpClient.get<Movie[]>('http://localhost/sample/api/Movies').catch(this.errorhandler)

  }
  errorhandler(Error: HttpErrorResponse)
  {
    return Observable.throw(Error.message ||'Server Error')
  }


  postMovie(movie: Movie) {

    //const endpoint = 'http://localhost/sample/api/Movies';
    //const formData: FormData = new FormData();
    //formData.append('Image', selectedFile, selectedFile.name);
    //formData.append('Genre', movie.Genre);
    //formData.append('Title', movie.Title);
  
    //return this.http
    //  .post(endpoint, formData);
  
    var body = JSON.stringify(movie);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this.http.post('http://localhost/sample/api/Movies', body, requestOptions).map(x => x.json());
  }

  putMovie(id, movie) {
    var body = JSON.stringify(movie);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost/sample/api/Movies/' + id, body,
      requestOptions).map(res => res.json());
  }

  deleteMovie(id: number) {
    return this.http.delete('http://localhost/sample/api/Movies/' + id).map(res => res.json());
  }
}
