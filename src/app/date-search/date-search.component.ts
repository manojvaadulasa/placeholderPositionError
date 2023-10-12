import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-search',
  templateUrl: './date-search.component.html',
  styleUrls: ['./date-search.component.scss']
})
export class DateSearchComponent implements OnInit {
  @Input() display: boolean = false;
  @Output() backClicked = new EventEmitter<boolean>();
  forms: UntypedFormGroup;
  constructor() {
    this.forms = new UntypedFormGroup({});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes['display'] && changes['display']['currentValue'] === true) {
        document.body.classList.toggle('filter-search-sidebar');
      }
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  back() {
    this.backClicked.emit(false);
    document.body.classList.remove('filter-search-sidebar');
  }

  initForm() {
    this.forms = new UntypedFormGroup({
      'from': new UntypedFormControl(''),
      'to': new UntypedFormControl('')
    });
  }

}
