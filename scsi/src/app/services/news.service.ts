import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  addNewNews(news: News) {
    let description = news.description;
    let heading = news.heading;
    let operator_id = news.operator_id;
    let timestamp = news.timestamp;
    return this.http.post<any>(`${environment.apiUrl}/addnews.php`, { description, heading, operator_id, timestamp })
      .pipe(map(News => {
        return News;
      }));
  }

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.apiUrl}/getallnews.php`);
  }
}
