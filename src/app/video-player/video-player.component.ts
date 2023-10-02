// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../services/data.service';
// import { Video } from 'electron';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders({ 
//     // 'Content-Type':'',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Headers':'*',
//     'Access-Control-Allow-Origin':'*',
  
//   })
// };

// @Component({
//   selector: 'app-video-player',
//   templateUrl: './video-player.component.html',
//   styleUrls: ['./video-player.component.css']
// })
// export class VideoPlayerComponent implements OnInit {
//   videoData: any;
//   constructor(private dataService: DataService,private http: HttpClient) { }

//   loading=true;
//   // public videoData:Blob=new Blob();
//   ngOnInit(): void {
//     // this.dataService.getVideos().subscribe((response: any) => {
//     //   this.loading=true;
//     //   // console.log(response);
//     //   if(response){
//     //     this.videoData=response;
//     //     this.loading=false;
//     //   }
      
//     // })
//     this.dataService.getVideo().subscribe((response: any) => {
//       this.loading=true;
//       // console.log(response);
//       if(response){
//         this.videoData=response;
//         this.loading=false;
//       }
//     })
//   }

// //   getVideoData(): void {
// //     // Make an HTTP request to your Rust API to fetch video data
// //     this.http.get('http://localhost:4242/play/video.mp4', httpOptions).subscribe(
// //       (data: ArrayBuffer) => {
// //         this.loading=true;
// //         // Create a Blob from the array buffer data
// //         const blob = new Blob([data], { type: 'video/mp4' });
// //         // Create a URL for the Blob data
// //         const videoUrl = window.URL.createObjectURL(blob);
// //         this.videoData = videoUrl; // Assign the video URL to the variable
// //         this.loading=false;
// //       },
// //       (error) => {
// //         console.error(error);
// //       }
// //     );
// // }
// }





import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
 
})
export class VideoPlayerComponent {
  isLoading = true;
  videoUrl: any;

  constructor(private videoService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const fileName = 'pokemon.mp4'; // Replace with the desired video file name
    this.videoService.getVideo(fileName).subscribe(
      
      (data: Blob) => {
        this.isLoading = true;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(data));
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching video:', error);
      }
    );
  }
}
