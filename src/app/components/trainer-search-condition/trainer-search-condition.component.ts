import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../services/trainer-search-condition-api.service';

@Component({
  selector: 'app-trainer-search-condition',
  templateUrl: './trainer-search-condition.component.html',
  styleUrls: ['./trainer-search-condition.component.scss']
})
export class TrainerSearchConditionComponent implements OnInit {

  @Input() public choices: IItem[];
  @Input() public defaultLabel: string;
  @Input() public selectItems: string[] = [];

  @Output() search = new EventEmitter<string[]>();

  public label: string;
  public isOpen = false;

  constructor() { }

  ngOnInit() {
    this.setLabel();
  }

  private setLabel(): void {
    if (Boolean(this.selectItems.length)) {
      this.choices.map(choice => {
        if (choice.id === parseInt(this.selectItems[0], 10)) {
          this.label = choice.name;
        }
      });
    } else {
      this.label = this.defaultLabel;
    }
  }

  public hasMultipleSelect(): boolean {
    return this.selectItems.length > 1;
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }

  public clear(): void {
    this.selectItems = [];
    this.toggle();
  }

  public completeSearchCondition(): void {
    this.search.emit(this.selectItems);
    this.toggle();
  }

  public check(event: Event, selectItem: IItem): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectItems.push(String(selectItem.id));
    } else {
      this.selectItems = this.selectItems.filter(item => parseInt(item, 10) !== selectItem.id);
    }

    this.setLabel();
  }

}
