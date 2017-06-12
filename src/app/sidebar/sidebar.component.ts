import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const accordions = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener('click', function () {
        const panel = <HTMLElement>accordions[i].nextElementSibling;
        accordions[i].classList.toggle('active');
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }
}
