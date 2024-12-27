import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiserviceComponent } from '../apiservice/apiservice.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-channel-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './channel-details.component.html',
  styleUrl: './channel-details.component.scss'
})
export class ChannelDetailsComponent {
  constructor(private apiService: ApiserviceComponent, private route: ActivatedRoute) { }

  API: any = this.apiService.Channel()
  data: any

  isUpdate: boolean = false

  channelId: any
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.channelId = params['channel_id']
      params['channel_id'] ? this.isUpdate = true : false
      if (this.isUpdate) {
        this.API.getById(this.channelId).then((result: any) => {
          this.data = result.contents[0]
          console.log(this.data);
        })
      }
    })
  }


  Submit(channel_name: any, channel_id: any, status: any) {
    if (this.isUpdate) {
      var updateBody = {
        channel_name: channel_name,
        channel_id: channel_id,
        status: status,
        id:this.data.id
      }
      this.API.putUpdate(updateBody).then((result: any) => {
        console.log(result);
      })
    }else{
      var createBody = {
        channel_name: channel_name,
        channel_id: channel_id,
        status: status,
      }
      this.API.postCreate(createBody).then((result: any) => {
        console.log(result);
      })
    }
  }
}
