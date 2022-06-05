import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-operator-news',
  templateUrl: './operator-news.component.html',
  styleUrls: ['./operator-news.component.css']
})
export class OperatorNewsComponent implements OnInit {

  

  constructor(private newsService: NewsService,private router: Router) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  allNews:News[] = [];

  addNewNews(): void {
    this.router.navigate(['addnews']);
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
