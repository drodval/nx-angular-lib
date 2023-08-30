import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'multitodo-library-pe-steps',
  templateUrl: './pe-steps.component.html',
  styleUrls: ['./pe-steps.component.scss']
})
export class PeStepsComponent {
  @Input() steps!: MenuItem[];
  @Input() activeIndex = 0;
  @Input() readonly = false;
  @Output() changeActiveStep = new EventEmitter<number>();

  onActiveIndexChange(event: number) {
      this.activeIndex = event;
      this.changeActiveStep.emit(this.activeIndex)
  }

}
