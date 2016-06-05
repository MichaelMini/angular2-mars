import { Component, OnInit } from '@angular/core';
import { Encounter } from '../shared/models';
import { EncounterService } from '../shared/services';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  providers: [EncounterService],
  directives: [ROUTER_DIRECTIVES]
})
export class EncountersComponent implements OnInit {

	public encounters: Encounter[];

  constructor(
  	private router: Router,
  	private encounterService: EncounterService
  	) {

  }

  ngOnInit() {
  	console.log(this);
  	this.encounterService.getEncounter().then( result => this.encounters = result );
  	
  }

}
