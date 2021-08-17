import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  REAL_SCRIPT = [
    {
      time: 15,
      speaker: 'Harvey',
      sentence: 'Hello, I would like to speak with Luke.'
    },
    {
      time: 15,
      speaker: 'Luke',
      sentence: 'Hi'
    },
    {
      time: 20,
      speaker: 'Harvey',
      sentence: 'Hi'
    },
    {
      time: 24,
      speaker: 'Luke',
      sentence: 'Yes, it\'s Luke speaking'
    },
    {
      time: 28,
      speaker: 'Harvey',
      sentence: 'Hi this is also'
    },
    {
      time: 32,
      speaker: 'Harvey',
      sentence: 'I\m an executive recruiter from Crossover and I\'m calling about your application for the Software Architect.'
    },
    {
      time: 38,
      speaker: 'Unknown',
      sentence: 'Do you remember how long I think perfect perfect.'
    },
  ];

  EXPECTED_SCRIPT = [
    'Hi, good afternoon.',
    'I would like to speak with :name:.',
    'I\'m an executive recriter from Crossover and I\'m calling you about your recent application for the Software ARchitect - Angular role.',
    'Do you remember this application?'
  ];

  agentName = 'Harvey';

  RealSentences: string[];
  agentScripts: any[];

  constructor() {
    this.agentScripts = this.REAL_SCRIPT.filter(script => script.speaker === this.agentName);
    this.RealSentences = this.agentScripts.map(script => script.sentence);
    console.log(this.RealSentences);
  }

  ngOnInit(): void {
    console.log(this.RealSentences[0].split(' '));

  }

}
