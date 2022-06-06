import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  allNews:News[] = [];

  constructor(private newsService: NewsService,private router: Router) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newsService.getAllNews()
      .subscribe(response => { 
        this.allNews = response.map(item=>{
          return new News(item.description,item.heading,item.operator_id,item.timestamp);
        });
      });
  }

}
