import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() vote: number;
  array = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
    this.array = this.array.map((item, index) => (index ? ((this.vote < item && this.vote > this.array[index - 1]) ? -1 : 0) : 0) || (this.vote >= item ? 1 : 0))
  }

}
