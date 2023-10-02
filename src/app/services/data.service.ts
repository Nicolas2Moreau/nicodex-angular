import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
// const httpOptions = {
//   headers: new HttpHeaders({ 
//     // 'Content-Type':'',
//     'Access-Control-Allow-Headers':'*',
//     'Access-Control-Allow-Origin':'*',
  
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { console.log('Connection.......OK')}


  
  // get pokemons list
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }
  // get pokemon detail 
  getPokemonData(name: string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }
  // get videos
  getVideos(){
    // const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    // const mediaSource = new MediaSource();
    // const assetURL = 'http://localhost:8000/play/pokemon.mp4';
    // return this.http.get('http://localhost:8000/play/pokemon.mp4', httpOptions);

  }
//   getVideo(): Observable<Blob> {
//     // Set the headers to allow CORS
//     const headers = new HttpHeaders({
//       'Content-Type': 'video/mp4', // Adjust the content type based on your video format
//       'Access-Control-Allow-Headers':'*',
//     'Access-Control-Allow-Origin':'*',
//       // Add any other required headers here
//     });
  
//     // Include the headers in the HTTP request
//     const options = { headers, responseType: 'blob' as 'json' };
  
//     return this.http.get('http://localhost:8000/play/video.mp4', options)
//     .pipe(
//       map((response: any) => {
//         if (response === null) {
//           return new Blob();
//         }
//         return response.body;
//       }),
//       catchError(error => {
//         console.error(error);
//         return of(new Blob());
//       })
//     );
// }

getVideo(fileName: string): Observable<Blob> {
  const apiUrl = `http://localhost:8000/play/${fileName}`;
  return this.http.get(apiUrl, {responseType: 'blob' });
}

}