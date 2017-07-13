import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public sidebarService: SettingsService) { }

  ngOnInit() {
    const defaultId = this.sidebarService.getSidebarIndex();
    const sideBtns: HTMLCollection = document.getElementsByClassName('sidebar-btn');
    sideBtns[defaultId - 1].children[0].className = sideBtns[defaultId - 1].children[0].className + ' active';
  }

  bgChooseClick(id) {
    this.sidebarService.setSideBarIndex(id);
    const sideBtns: HTMLCollection = document.getElementsByClassName('sidebar-btn');
    for (let i = 0; i < sideBtns.length; i++){
      sideBtns[i].children[0].className = sideBtns[i].children[0].className.replace(' active', '');
    }
    sideBtns[id - 1].children[0].className = sideBtns[id - 1].children[0].className + ' active';
  }

}
