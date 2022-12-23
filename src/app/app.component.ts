import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'game';

  get data() {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'));
    }

    return null;
  }

  ngOnInit(): void {
    const data = [
      {
        id: 1,
        questions: 'What is cloud computing?',
        options: [
          {
            text: 'Transitioning to fully virtual IT setup',
            ans: 'A',
            isTrue: false,
          },
          {
            text: 'Creating custom operating models to solve customer problems',
            ans: 'B',
            isTrue: false,
          },
          {
            text: 'Virtual storage space for businesses',
            ans: 'C',
            isTrue: false,
          },
          {
            text: 'On-demand delivery of IT resources over the internet with pay-as-you-go pricing',
            ans: 'D',
            isTrue: true,
          },
        ],
      },
      {
        id: 2,
        questions:
          'Customers can realize substantial business value by using AWS services. What are the four pillars of the AWS Cloud Value Framework?',
        options: [
          {
            text: 'Cost savings, cloud optimization, operational resilience, and cloud security',
            ans: 'A',
            isTrue: true,
          },
          {
            text: 'Cost reduction, infrastructure replacement, process improvement, and speed to deployment',
            ans: 'B',
            isTrue: false,
          },
          {
            text: 'Cost reduction, modernization, business agility, and infrastructure replacement',
            ans: 'C',
            isTrue: false,
          },
          {
            text: 'Cost savings, staff productivity, operational resilience, and business agility',
            ans: 'D',
            isTrue: true,
          },
        ],
      },
      {
        id: 3,
        questions:
          'What should AWS Partners discuss when a customer has a concern about data security?',
        options: [
          {
            text: 'AWS Security Standard and Compliance Certifications',
            ans: 'A',
            isTrue: true,
          },
          {
            text: 'Amazon Elastic Compute Cloud',
            ans: 'B',
            isTrue: false,
          },
          {
            text: 'Amazon Elastic Compute Cloud',
            ans: 'C',
            isTrue: false,
          },
          {
            text: 'AWS Solution Space',
            ans: 'D',
            isTrue: true,
          },
        ],
      },
      {
        id: 4,
        questions:
          'Which pillar of the AWS Cloud Value Framework is often the initial focus for customers considering a cloud migration?',
        options: [
          {
            text: 'Business agility',
            ans: 'A',
            isTrue: false,
          },
          {
            text: 'Operational resilience',
            ans: 'B',
            isTrue: false,
          },
          {
            text: 'Cost savings',
            ans: 'C',
            isTrue: true,
          },
          {
            text: 'Staff productivity',
            ans: 'D',
            isTrue: true,
          },
        ],
      },
      {
        id: 5,
        questions:
          'How does AWS Sales refer to a customer that is in the early phases of AWS adoption?',
        options: [
          {
            text: 'Mature',
            ans: 'A',
            isTrue: false,
          },
          {
            text: 'Project',
            ans: 'B',
            isTrue: false,
          },
          {
            text: 'Greenfield',
            ans: 'C',
            isTrue: true,
          },
          {
            text: 'Engaged',
            ans: 'D',
            isTrue: true,
          },
        ],
      },
    ];
    localStorage.setItem('data', JSON.stringify(data));
  }

  popup(id: number): void {
    const question = this.data.find((item: any) => item.id === id);
    console.log(question)
  }
}
