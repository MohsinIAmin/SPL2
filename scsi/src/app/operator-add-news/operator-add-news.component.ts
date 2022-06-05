import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-operator-add-news',
  templateUrl: './operator-add-news.component.html',
  styleUrls: ['./operator-add-news.component.css']
})
export class OperatorAddNewsComponent implements OnInit {
  heading: string = '';
  description: string = '';

  news = new News('','','','');
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.news.operator_id = String(localStorage.getItem('token'));
    this.news.timestamp = String(Date.now());
    this.newsService.addNewNews(this.news)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['operatornews']);
        }
      );
    this.news = new News('','','','');
  }

}
