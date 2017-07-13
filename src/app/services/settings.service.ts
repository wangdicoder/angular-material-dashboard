import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SettingsService {
  public sidebarIndex = 1;
  public sidebarIndexUpdate: EventEmitter<number> = new EventEmitter();

  constructor() { }

  getSidebarIndex() {
    return this.sidebarIndex;
  }
  setSideBarIndex(id) {
    this.sidebarIndex = id;
    this.sidebarIndexUpdate.emit(this.sidebarIndex);
  }
}
