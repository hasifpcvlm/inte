import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {
index:any;
nth=0
  constructor() { }

  ngOnInit(): void {
  }
  nthTerm()
	{
		if (this.index% 2 == 1)
			this.nth = (this.index * this.index) + 1;
		else
			this.nth = (this.index * this.index) - 1;

		return this.nth;
	}
}
