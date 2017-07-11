import { Component, OnInit } from '@angular/core';
import { SidebarBgServiceService } from '../../services/sidebar-bg-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public sidebarService: SidebarBgServiceService) { }

  ngOnInit() {
  }

  bgChooseClick(id) {
    this.sidebarService.setSideBarIndex(id);
  }

}
