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
        description: 'For my ' +
          'capstone project, I designed and implemented an automated smart home with proximity activated lights, ' +
          'a stock keeping refrigerator, and a smart stove top.'
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
        description: 'As an intern I worked on the Dillard\'s Intranet using jquery and experimenting with scala. ' +
          ' Though I\'d learned about' +
          ' various practices of software development in School (ie. Agile, Version-control, Task management), this was my first' +
          ' opportunity to see it all live and in action on production software. I probably learned more about the industry in this brief' +
          ' summer internship than I learned in several years at my university.'
      },
      {
        location: 'The Boeing Company',
        dateOfAttendance: 'December 2015 - March 2019',
        position: 'Programmer/Analyst',
        description: 'Boeing was my first job out of college and I\'m grateful for the experiences I had there.' +
          ' Most of my time at Boeing was spent as a full-stack developer working with Angular and Spring Boot, building various internal' +
          ` websites that were needed by the company. The company itself is very large and very old which means that,` +
          ' like any big company that\'s large and old, it lagged behind some in it\'s development practices.' +
          ' Fortunately for me, one of my roles was to lead a transformation effort to bring teams around Boeing into' +
          ' the world of modern development. I, along with my team, built several applications that other teams would use to gauge' +
          ' their current development practices and help them transition to modern solutions.'
      },
      {
        location: 'Mastercard',
        dateOfAttendance: 'March 2019 - Current',
        position: 'Software Engineer',
        description: 'Currently, I\'m working at Mastercard, building Microservices with Spring boot that support both' +
          ' internal and external customers. I\'m enjoying my time here and excited for the future!'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
