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
  @Input() public isOpen = false;

  @Output() search = new EventEmitter<string[]>();
  @Output() open = new EventEmitter<boolean>();

  public label: string;

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

    if (this.isOpen) {
      this.open.emit();
    }
  }

  public clear(): void {
    this.selectItems = [];
    this.search.emit(this.selectItems);
    this.setLabel();
    this.toggle();
  }

  public completeSearchCondition(): void {
    this.search.emit(this.selectItems);
    this.toggle();
  }

  public check(checked: boolean, selectItem: IItem): void {
    if (checked) {
      this.selectItems.push(String(selectItem.id));
    } else {
      this.selectItems = this.selectItems.filter(item => parseInt(item, 10) !== selectItem.id);
    }

    this.setLabel();
  }

  public isChecked(id: number): boolean {
    return this.selectItems.includes(String(id));
  }

}
