import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist: any;
  public tracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(parameters => parameters['id'])
      .subscribe(id => {
        this._spotifyService.getArtistById(id)
          .subscribe((data) => this.artist = data);
        this._spotifyService.getTopTrackByIdAndCountry(id, 'ES')
          .subscribe((data) => this.tracks = data);
      });
  }

}
