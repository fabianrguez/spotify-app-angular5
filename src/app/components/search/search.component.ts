import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: string = '';

  constructor(public _spotifyService: SpotifyService) { }

  ngOnInit() {}

  public searchArtist() {
    this._spotifyService.getAllArtists(this.search)
      .subscribe();
  }
}
