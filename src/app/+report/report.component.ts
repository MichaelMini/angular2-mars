import { Component, OnInit } from '@angular/core';
import { Encounter, IAlien } from '../shared/models';
import { AlienService, EncounterService } from '../shared/services';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'], 
  providers: [AlienService, EncounterService], 
  directives: [ROUTER_DIRECTIVES]
})
export class ReportComponent implements OnInit {

	public NO_ALIEN_SELECTED: string;
	public aliens: IAlien[];
	public encounter: Encounter;

  constructor(
  		private router: Router,
  		private alienService: AlienService,
  		private encounterService: EncounterService
  	) {
  		this.NO_ALIEN_SELECTED = '(none)';
  	}

  ngOnInit(): void {

  	this.encounter = new Encounter(this.NO_ALIEN_SELECTED, moment().format('YYYY-MM-DD').toString(), null, this.encounter.colonist_id);
  	this.alienService.getAliens().then( result => this.aliens = result )
  }

  onSubmit(event, form): void {
  	console.log(this.encounter)
  	// this.encounterService.createEncounter(this.encounter)
  	// 					.then( encounter => this.router.navigate(['/encounters']))
  }

  get noAlien() : boolean{
  	return this.encounter.atype === this.NO_ALIEN_SELECTED;
  }

}
