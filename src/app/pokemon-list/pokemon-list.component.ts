import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BehaviorSubject, Observable } from 'rxjs';




@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {


  pokemons: any[] = [];     //local pokemons array init
  // pokemonsBS: BehaviorSubject<Array<any>> = new BehaviorSubject(this.pokemons)     //local pokemons array init
  public loadingBS:BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()      //get pokemons objects
      .subscribe((response: any) => {
        this.loadingBS.next(true);
        response.results.forEach((result: any) => {
          this.dataService.getPokemonData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              if(this.pokemons.length >= 10){
                this.pokemons.sort((a, b) => a.id - b.id);
                setTimeout(()=>{this.loadingBS.next(false)}, 1500)

              }
            });
        });
       
      });
  }

  // make a getpokemon func  
}
