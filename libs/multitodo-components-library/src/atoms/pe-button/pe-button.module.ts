import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeButtonComponent} from "./pe-button.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [PeButtonComponent],
  imports: [CommonModule, ButtonModule, RippleModule],
  exports: [PeButtonComponent]
})
export class PeButtonModule {}
