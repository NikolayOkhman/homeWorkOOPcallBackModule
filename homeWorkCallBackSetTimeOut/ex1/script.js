class StopWatch {
   startButton;
   stopButton;
   display;
   converter;
   sec;
   constructor() {
      this.startButton = document
         .getElementById("btnStart")
         .addEventListener("click", () => {
            this.stopWatch();
         });
      this.stopButton = document
         .getElementById("btnStop")
         .addEventListener("click", () => {
            this.stop();
         });
      this.display = document.getElementById("scope");
      this.converter = true;
      this.sec = 0;
   }
   stopWatch() {
      if (this.converter == true) {
         this.sec++;
         setTimeout(() => {
            this.start();
         }, 1000);
      } else {
         clearTimeout(() => {
            this.startButton;
         });
      }
   }
   start() {
      if (this.sec == 1) {
         document.getElementById("text").innerText = "";
         let p = document.createElement("p");
         p.setAttribute("id", "para");
         let newText = document.createTextNode(
            "The StopWatch is running now! To STOP press Stop button"
         );
         p.appendChild(newText);
         document.getElementById("text").appendChild(p);
      }
      document.getElementById("scope").innerText = this.sec;
      this.stopWatch();
      this.converter = true;
   }
   stop() {
      if (this.converter == true) {
         this.converter = false;
         document.getElementById("para").innerText = "";
         let newP = document.getElementById("para");
         let newText1 = document.createTextNode(
            `Stopped.., to continue press START button.
            To restart click STOP button twice`
         );
         newP.appendChild(newText1);
         document.getElementById("text").appendChild(newP);
      } else if (this.converter == false) {
         this.converter = true;
         this.sec = 0;
         document.getElementById("scope").innerText = this.sec;
         document.getElementById("para").innerText = "";
      }
   }
}
let a = new StopWatch();
