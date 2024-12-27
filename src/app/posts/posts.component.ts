import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiserviceComponent } from '../apiservice/apiservice.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  constructor(private apiService: ApiserviceComponent) { }
  API: any = this.apiService.Post()
  data: any = []

  totalPage: number = 0
  limit: number = 10
  paging: number = 0

  ngOnInit() {
    this.LoadData();
  }

  ChangePage(page: number) {
    this.paging = page
    this.LoadData();
  }

  async LoadData() {
    var limit = this.limit
    var paging = this.paging
    await this.API.getAll(limit, paging).then((result: any) => {
      this.data = result.contents.data
      this.totalPage = result.contents.totalPages
      console.log(result);
    })
  }

  formatDateTime(text: any) {
    const date = new Date(text);
    const formattedDate = date.toLocaleTimeString('en-GB') + ' ' + date.toLocaleDateString('en-GB').split('/').join('/');
    return formattedDate
  }

}
