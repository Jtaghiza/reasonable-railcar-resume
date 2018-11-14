import { Component, OnInit } from '@angular/core';
import { History } from './history/history.model'

@Component({
  selector: 'rp-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  edu: History = {
    sectionTitle: 'Education',
    locations: [
      {
        location: 'University Of Arkansas',
        dateOfAttendance: 'May 2015',
        position: 'Bachelor of Science - Computer Science',
        // tslint:disable-next-line:max-line-length
        description: 'For my capstone project, I designed and implemented an automated smart home with proximity activated lights, a stock keeping refrigerator, and a smart stove top.'
      }
    ]
  };

  wrkExp: History = {
    sectionTitle: 'Work Experience',
    locations: [
      {
        location: 'Dillard\'s Inc',
        dateOfAttendance: 'June 2013 - August 2013',
        position: 'Intern',
        description: 'As an intern I worked on the Dillards Intranet using jquery and experimenting with scala.'
      },
      {
        location: 'The Boeing Company',
        dateOfAttendance: 'December 2015 - Current',
        position: 'Programmer/Analyst',
        // tslint:disable-next-line:max-line-length
        description: 'Currently, I\'m creating Boeing internal applications using Angular, Spring framework, and MySql, all deployed to Pivatol Cloud Foundry.'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
