import { Component, OnInit,Input, Output,EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'my-slider',
  templateUrl: './myslider.component.html',
  styleUrls: ['./myslider.component.css']
})
export class MysliderComponent implements OnInit {

@Input() min:number;
@Input() max:number;
@Input() step:number;

val;

height;
nameformargin=25;
width:number;

noofcircles=[]
 @Output() newValue=new EventEmitter;

  constructor() { }

  ngOnInit() {
    for(var i=this.min;i<=this.max;i=i+this.step){
      this.noofcircles.push(i);
      
    }
    this.width=((this.max-this.min)*this.nameformargin)+(((this.max-this.min)+1)*5)
    
    

    }
    
    sendvalue(data){
      this.newValue.emit(data);
     
      

    }
     
    
    
    
    
  


}

