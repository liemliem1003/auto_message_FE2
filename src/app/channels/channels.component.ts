import { Component } from '@angular/core';
import { ApiserviceComponent } from '../apiservice/apiservice.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.scss'
})
export class ChannelsComponent {
  constructor(private apiService: ApiserviceComponent) { }
  API: any = this.apiService.Channel()
  data: any = []

  totalPage: number = 0
  limit: number = 10
  paging: number = 0

  ngOnInit() {
    this.LoadData();
  }

  ChangePage(page:number){
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

}
