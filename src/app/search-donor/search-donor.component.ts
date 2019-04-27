import {Component, OnInit} from '@angular/core';
import {FindDonorService} from '../shared/find-donor.service';
import {Donor} from '../donor';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.component.html',
  styleUrls: ['./search-donor.component.scss']
})
export class SearchDonorComponent implements OnInit {

  donors: Donor[];
  showSpinner: boolean = false;

  constructor(private findDonor: FindDonorService) {
  }

  ngOnInit() {
  }

  search(searchPhrase: string) {
    this.showSpinner = true;
    console.log(searchPhrase);
    this.findDonor.getDonors(searchPhrase).subscribe(data => {
      this.donors = data;
      this.showSpinner = false;
    });
  }
}

