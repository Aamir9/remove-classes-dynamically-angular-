import { Component } from "@angular/core";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
   stop = -1;
   j=0;
   span;
  constructor() {
    this.test();
  }

  setTimeFunc(i){

     setTimeout((i) => {
        if (this.span.classList.contains("a")) {
          console.log("yes");
          this.span[i].classList.remove("a");
          i++;
        }
        if (this.span == null) {
          console.log("not exit");
          this.j=this.stop;
        
        }
      }, 1000);
  }
  test() {
  
    let i = 0;
    for (i = 0; i <3; i++) {
       console.log("ff");
        this.span = document.getElementsByTagName("span")[i];
       this.setTimeFunc(i);
     

    }
  }
}
