import {Component, OnInit} from '@angular/core';
import {FindDonorService} from '../shared/find-donor.service';
import {Donor} from '../donor';
// import {JsModal} from '../../assets/js/modal.js';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.component.html',
  styleUrls: ['./search-donor.component.scss']
})
export class SearchDonorComponent implements OnInit {

  donors: Donor[];
  showSpinner: boolean = false;
  optionsSelect: Array<any>;

  constructor(private findDonor: FindDonorService) {
  }

  ngOnInit() {
    // JsModal.getModal();
  }

  // search(searchPhrase: string) {
  //   this.showSpinner = true;
  //   console.log(searchPhrase);
  //   this.findDonor.getDonors(searchPhrase).subscribe(data => {
  //     this.donors = data;
  //     this.showSpinner = false;
  //   });
  //}
}

