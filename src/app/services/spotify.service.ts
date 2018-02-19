import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private apiUrl: string = 'https://api.spotify.com/v1';

  artists: any[] = [];

  constructor(private http: HttpClient) { }

  public getAllArtists(artist: string) {
    const query = `/search?q='${artist}'&type=artist`;
    const url = this.apiUrl + query;

    return this.http.get(url)
      .map((response : any) => {
        this.artists = response.artists.items;
      });
  }

  public getArtistById(id: string) {
    const query = `/artists/${id}`;
    const url = this.apiUrl + query;

    return this.http.get(url)
      .map((response : any) => {
        return response;
      });
  }

  public getTopTrackByIdAndCountry(id: string, country: string) {
    const query = `/artists/${id}/top-tracks?country=${country}`;
    const url = this.apiUrl + query;

    return this.http.get(url)
      .map((response : any) => {
        return response.tracks;
      });
  }

  public getAuthToken() {

  }
}
