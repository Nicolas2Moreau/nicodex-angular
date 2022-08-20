import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { console.log('Connection.......OK')}
  // get pokemons
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }
  getPokemonData(name: string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }
}
