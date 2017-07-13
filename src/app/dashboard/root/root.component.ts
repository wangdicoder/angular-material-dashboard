import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {
  public id: number;
  constructor(public sidebarService: SettingsService) {
    this.id = sidebarService.getSidebarIndex();
  }

  ngOnInit() {
    this.sidebarService.sidebarIndexUpdate.subscribe((id: number) => {
      this.id = id;
      console.log(id);
    });
  }

  ngOnDestroy() {
    this.sidebarService.sidebarIndexUpdate.unsubscribe();
  }
}
