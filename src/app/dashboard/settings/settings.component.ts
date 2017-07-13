import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public settingService: SettingsService) { }

  ngOnInit() {
    const defaultId = this.settingService.getSidebarImageIndex();
    const sideBtns: HTMLCollection = document.getElementsByClassName('sidebar-btn');
    sideBtns[defaultId - 1].children[0].className = sideBtns[defaultId - 1].children[0].className + ' active';
  }

  bgChooseClick(id) {
    this.settingService.setSidebarImageIndex(id);
    const sideBtns: HTMLCollection = document.getElementsByClassName('sidebar-btn');
    for (let i = 0; i < sideBtns.length; i++){
      sideBtns[i].children[0].className = sideBtns[i].children[0].className.replace(' active', '');
    }
    sideBtns[id - 1].children[0].className = sideBtns[id - 1].children[0].className + ' active';
  }

  filterChooseClick(id) {
    console.log(id);
  }

  bgColorChooseClick(color) {
    this.settingService.setSidebarColor(color);
  }
}
