import { Injectable } from '@angular/core';
import { BeachLocation } from './beachlocation';

@Injectable({
  providedIn: 'root'
})
export class BeachesService {
  beachLocationList: BeachLocation[] = [
    {
      rank: 1,
      name: 'Indian Wells Beach',
      state: 'New York',
      photo: '../assets/beaches/indianwells.png',
      easyAccess: true
    },
    {
      rank: 2,
      name: 'Ocracoke Beach',
      state: 'North Carolina',
      photo: '../assets/beaches/ocracoke.png',
      easyAccess: true
    },
    {
      rank: 3,
      name: 'Newport Beach',
      state: 'California',
      photo: '../assets/beaches/newport-beach.png',
      easyAccess: true
    },
    {
      rank: 4,
      name: 'Huntington Beach',
      state: 'California',
      photo: '../assets/beaches/huntington-beach.png',
      easyAccess: true
    },
    {
      rank: 5,
      name: 'Waikiki Beach',
      state: 'Hawaii',
      photo: '../assets/beaches/waikiki-beach.png',
      easyAccess: true
    },
    {
      rank: 6,
      name: 'Bayhead',
      state: 'New Jersey',
      photo: '../assets/beaches/bayhead2.png',
      easyAccess: true
    },
    {
      rank: 7,
      name: 'Big Sur',
      state: 'California',
      photo: '../assets/beaches/big-sur.png',
      easyAccess: false
    },
    {
      rank: 8,
      name: 'Rockaway Beach',
      state: 'New York',
      photo: '../assets/beaches/rockaway.png',
      easyAccess: true
    },
    {
      rank: 9,
      name: 'Clearwater Beach',
      state: 'Florida',
      photo: '../assets/beaches/clearwater.png',
      easyAccess: true
    },
  ]
  //Functions that allow dependices to access the service's data
  getAllBeachLocations(): BeachLocation[] {
    return this.beachLocationList;
  }

  getBeachLocationByRank(rank: number): BeachLocation | undefined {
    return this.beachLocationList.find((beachLocation) => beachLocation.rank === rank);
  }
  constructor() { }
}
