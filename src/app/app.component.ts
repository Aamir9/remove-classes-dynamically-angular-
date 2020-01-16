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
 test() {

    setTimeout(() => {
      this.span = document.getElementsByTagName("span");
      let spanlength = document.getElementsByTagName("span").length;
      let i = 0;
      for (i = 0; i < spanlength; i++) {
        if (this.span[i].className === "a") {
          this.span[i].classList.remove("a");
        }
      }
    })
  }


}
