import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../css/style.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript();
  }

  loadScript() {
    $("#slider4").responsiveSlides({
      auto: true,
      pager: true,
      nav: true,
      speed: 1000,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });
  }

}
