import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  isActive: any;
  finalList:any;
  local = [
    { id: 1, name: 'test 1', active: true },
    { id: 2, name: 'test 2', active: true },
    { id: 3, name: 'test 3', active: true },
    { id: 4, name: 'test 4', active: true },
  ];
  api = [
    { name: 'test 5', active: false },
    { name: 'test 2', active: false },
  ];

  ngOnInit() {
   this.finalList= this.api.forEach((item) => {
      let filtereditems = this.local.filter((x) => x.name === item.name);
      if (filtereditems[0] != null) {
        console.log(filtereditems);
      }
      // console.log(filtereditems)
    });
    console.log(this.finalList);
    console.log(this.local)
  }
}
