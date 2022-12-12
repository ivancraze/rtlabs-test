import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';

const peoples: string[] = ['Иван', 'Алексей', 'Айрат', 'Сергей', 'Андрей', 'Айрат2', 'Андрей2'];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  public autocompleteResult: string[] = [];
  public searchResult: string[] = [];
  public searchResultVisible: boolean = false;

  autocomplete: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] : peoples.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
    );

  onSearchButtonClick() {
    this.searchResultVisible = true;
    if (this.autocompleteResult && this.autocompleteResult.length) {
      this.searchResult = this.autocompleteResult;
    }
  }

  ngOnInit(): void {
    this.searchResultVisible = false;
  }
}
