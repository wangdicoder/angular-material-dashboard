import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const activeTab = <HTMLElement>document.getElementsByClassName('default-active')[0];
    activeTab.click();
  }

  tabClick(evt, id) {
    const tabcontents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabcontents.length; i++) {
      const tabcontent = <HTMLElement>tabcontents[i];
      tabcontent.style.display = 'none';
    }
    const tablinks = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tablinks.length; i++) {
      const tablink = <HTMLElement>tablinks[i];
      tablink.className = tablink.className.replace(' active', '');
    }
    document.getElementById(id).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
}
