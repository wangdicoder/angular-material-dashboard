import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnClick(position) {
    let from = 'top';
    let align = 'right';
    switch (position) {
      case 'top-left':
        align = 'left';
        break;
      case 'top-center':
        align = 'center';
        break;
      case 'bottom-left':
        align = 'left';
        from = 'bottom';
        break;
      case 'bottom-center':
        align = 'center';
        from = 'bottom';
        break;
      case 'bottom-right':
        from = 'bottom';
        break;
    }
    $.notify({
      message: 'Welcome to <b>MATERIAL DASHBOARD</b> - a beautiful dashboard for every web developer.'
    }, {placement: {from, align}});
  }

}
