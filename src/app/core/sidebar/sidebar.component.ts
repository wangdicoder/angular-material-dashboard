import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onselectCategory = new EventEmitter();
  @Output() onSelectDiscount = new EventEmitter();
  @Output() onSearch = new EventEmitter();

  searchForm: FormGroup;
  listCheckedCategory = []

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSelectedCat(event) {
    if (event.target) {
      var { checked, value } = event.target
      console.log({ checked, value });
      this.listCheckedCategory = this.listCheckedCategory.map(item => value == item.value ? null : item).filter(_ => _)

      this.listCheckedCategory.push({ value, checked });
      this.listCheckedCategory = this.listCheckedCategory.filter(item => item.checked);

      this.onselectCategory.emit(this.listCheckedCategory)
    }

  }

  onSelectedDis(value) {
    this.onSelectDiscount.emit(value);
  }

  onSearchValue(event) {
    console.log(event);

    this.onSearch.emit(event.target.value);
  }
}
