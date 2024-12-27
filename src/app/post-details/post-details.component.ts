import { Component } from '@angular/core';
import { ApiserviceComponent } from '../apiservice/apiservice.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  constructor(private apiService: ApiserviceComponent, private route: ActivatedRoute) { }

  API: any = this.apiService.Post()
  APIChannel: any = this.apiService.Channel()
  data: any

  isUpdate: boolean = false
  postId: any

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.postId = params['post_id']
      params['post_id'] ? this.isUpdate = true : false
      if (this.isUpdate) {
        this.API.getById(this.postId).then((result: any) => {
          this.data = result.contents[0]

          this.APIChannel.getById(this.data.channel_id).then((data: any) => {
            console.log(data);
            this.data.channel_name = data.contents[0].channel_name
          })

          console.log(this.data);

        })
      }
    })
  }
  Submit(post_title: any, post_contents: any, channel_id: any, status: any, time: any) {
    if (this.isUpdate) {
      var publish_time = this.ConvertToDateTime(time)
      var updateBody = {
        id:this.data.id,
        post_title:post_title,
        post_contents:post_contents,
        channel_id:this.data.channel_id,
        status:status,
        publish_time:publish_time
      }

      if (publish_time == `Error`) {
        alert("Thời gian đăng bài sai format")
        return
      }
      this.API.putUpdate(updateBody).then((result:any)=>{
        console.log(result);
      })
      
    }else{
      var publish_time = this.ConvertToDateTime(time)
      var createBody = {
        post_title:post_title,
        post_contents:post_contents,
        channel_id:channel_id,
        status:status,
        publish_time:publish_time
      }
      this.API.postCreate(createBody).then((result:any)=>{
        console.log(result);
      })
    }
  }
  formatDateTime(text: any) {
    const date = new Date(text);
    const formattedDate = date.toLocaleTimeString('en-GB') + ' ' + date.toLocaleDateString('en-GB').split('/').join('/');
    return formattedDate
  }

  ConvertToDateTime(text:any) {
    try {
      const [time, date] = text.split(' ');
      const [day, month, year] = date.split('/').map(Number);
      const [hours, minutes, seconds] = time.split(':').map(Number);
  
      // Tạo đối tượng Date
      const localDate = new Date(year, month - 1, day, hours, minutes, seconds);
  
      // Định dạng lại thành 'yyyy-mm-dd hh:mm:ss'
      const formattedDateTime = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ` +
                                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      return formattedDateTime;
    } catch (error) {
      throw new Error("Invalid format. Expected 'hh:mm:ss dd/mm/yyyy'");
    }
  }
  

}
