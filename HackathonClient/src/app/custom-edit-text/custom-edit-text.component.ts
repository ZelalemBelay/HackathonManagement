import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { HTeamMember } from '../model/HTeamMember';

@Component({
  selector: 'custom-edit-text',
  templateUrl: './custom-edit-text.component.html',
  styleUrls: ['./custom-edit-text.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CustomEditTextComponent,
    multi: true,
  }]
})
export class CustomEditTextComponent implements ControlValueAccessor {

  constructor() { 
    this.inputValue = this.val;
  }

  @Input()
  inputType: string;

  @Input()
  inputLabel: string;

  inputValue: string;

  @Input()
  val: string;

  onChange: (value: string)=> void;

  handleChange(event: any) {
    this.inputValue = event.target.value;
    this.onChange(event.target.value)
  }

  writeValue(value) {
    this.inputValue = value;
  }

  registerOnChange(onChange: (value: string)=> void) {
    this.onChange = onChange;
   }
  registerOnTouched(fn) { }
}
