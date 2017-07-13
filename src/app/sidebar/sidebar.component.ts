import {AfterViewInit, Component, OnInit, OnDestroy} from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { ROUTES } from './sidebar-routes.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  constructor(public setingsService: SettingsService) {
    this.menuItems = ROUTES;
    this.activeFontColor = 'rgba(0,0,0,.6)';
  }

  ngOnInit() {
    this.color = this.setingsService.getSidebarFilter();
    this.setingsService.sidebarFilterUpdate.subscribe((filter: string) => {
      this.color = filter;
      if (filter === '#fff') {
        this.activeFontColor = 'rgba(0,0,0,.6)';
      }else {
        this.activeFontColor = 'rgba(255,255,255,.8)';
      }
    });
  }
  ngOnDestroy() {
    this.setingsService.sidebarFilterUpdate.unsubscribe();
  }

  ngAfterViewInit() {
  }
}
