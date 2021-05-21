import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss']
})
export class ThirdQuestionComponent implements OnInit {
  num:any
  no_input = 0;
  input_array:any = [];
  numbers:any=[]
  constructor() { }

  ngOnInit(): void {
  }
  new_div() {
    this.no_input += 1;
    this.input_array = [];
    // this.numbers=[];
    for (let i = 1; i <= this.no_input; i++) {
      this.input_array.push(i);
    }
  }
  delete_div(k:any){
    console.log(k);
    
    let ind=this.numbers.indexOf(k);
    console.log(ind);
    
    this.input_array.splice(ind,1)
    this.numbers.splice(ind,1)
    this.no_input-=1
    console.log(this.input_array);
    
  }
  submit(){
    let data=[this.num,...this.numbers]
    let nm:any=[]
    for(let i=0;i<data.length;i++){
     nm.push(`phone number${i}:${data[i]}`)
    }
    console.log(nm)
    
  }

}
