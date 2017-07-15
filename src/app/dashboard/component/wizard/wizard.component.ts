import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  tabIndex = 0;
  constructor() { }

  ngOnInit() {
    const preBtn = <HTMLElement>document.getElementById('preBtn');
    preBtn.style.visibility = 'hidden';
  }

  preOnClick() {
    const moveTab = <HTMLElement>document.querySelector('.move-tab');
    const nextBtn = <HTMLElement>document.getElementById('nextBtn');
    const preBtn = <HTMLElement>document.getElementById('preBtn');
    if (this.tabIndex === 2) {
      this.tabIndex--;
      moveTab.style.left = '20vw';
      nextBtn.style.visibility = 'visible';
      moveTab.innerHTML = 'Account';
    }else if (this.tabIndex === 1) {
      this.tabIndex--;
      moveTab.style.left = '-1vw';
      preBtn.style.visibility = 'hidden';
      moveTab.innerHTML = 'About';
    }
  }

  nextOnClick() {
    const moveTab = <HTMLElement>document.querySelector('.move-tab');
    const nextBtn = <HTMLElement>document.getElementById('nextBtn');
    const preBtn = <HTMLElement>document.getElementById('preBtn');
    if (this.tabIndex === 0) {
      this.tabIndex++;
      moveTab.style.left = '20vw';
      preBtn.style.visibility = 'visible';
      moveTab.innerHTML = 'Account';
    }else if (this.tabIndex === 1) {
      this.tabIndex++;
      moveTab.style.left = '41vw';
      nextBtn.style.visibility = 'hidden';
      moveTab.innerHTML = 'Address';
    }
  }

}
