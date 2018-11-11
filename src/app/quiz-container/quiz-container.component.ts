import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit {
  dataSource: Object;
  constructor() { 
    this.dataSource ={
  "chart": {
    "caption": "Skill Analysis of Harry",
    "subcaption": "Scale: 1 (low) to 5 (high)",
    "theme": "fusion",
    "showlegend": "0",
    "showdivlinevalues": "1",
    "showlimits": "1",
    "plotfillalpha": "40",
    "plottooltext": "Harry's <b>$label</b> skill is rated as <b>$value</b>"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Business Capacity"
        },
        {
          "label": "User Performance"
        },
        {
          "label": "Technological Potential"
        },
        {
          "label": "Product Strength"
        },
        {
          "label": "Entrupreneur Capability"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "User Ratings",
      "data": [
        {
          "value": "3"
        },
        {
          "value": "3"
        },
        {
          "value": "4"
        },
        {
          "value": "3"
        },
        {
          "value": "2"
        }
      ]
    },
    {
        "seriesname": "Actual Rating",
        "data": [
            {
                "value": "5"
            },
            {
                "value": "5"
            },
            {
                "value": "2"
            },
            {
                "value": "3"
            }
        ]
    }
  ]
};
  }

  ngOnInit() {
  }

}
