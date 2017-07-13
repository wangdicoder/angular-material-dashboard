import {AfterViewInit, Component, OnInit, OnDestroy} from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public color: string;
  constructor(public setingsService: SettingsService) { }

  ngOnInit() {
    this.color = this.setingsService.getSidebarFilter();
    this.setingsService.sidebarFilterUpdate.subscribe((filter: string) => {
      this.color = filter;
    });
  }
  ngOnDestroy() {
    this.setingsService.sidebarFilterUpdate.unsubscribe();
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
