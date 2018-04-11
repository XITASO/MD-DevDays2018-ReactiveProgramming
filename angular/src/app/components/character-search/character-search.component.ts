import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { CharacterSearchService } from '../../services/character-search.service';
import { Character } from '../../models/character';

@Component({
  templateUrl: 'character-search.component.html',
  styleUrls: ['character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  public characterForm: FormControl;
  public characters: Observable<Character[]>;

  constructor(
    private readonly characterSearchService: CharacterSearchService
  ) {}

  ngOnInit() {
    this.characterForm = new FormControl();

    this.characters = Observable.from([]);
  }

  public resetAutocomplete(): void {
    this.characterForm.reset();
  }

  public displayCharacter(character: Character): string {
    return character ? character.name : '';
  }

}
