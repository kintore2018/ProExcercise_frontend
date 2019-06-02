import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() key: string;
  @Input() checked: boolean;

  @Output() change = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public onChange(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLInputElement;
    this.change.emit(target.checked);
  }

}
