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

  btnNotify() {
    $.notify({
      message: 'Welcome to <b>MATERIAL DASHBOARD</b> - a beautiful dashboard for every web developer.'
    }, {
      placement: {
        from: 'top',
        align: 'left'
      }
    });
  }

}
