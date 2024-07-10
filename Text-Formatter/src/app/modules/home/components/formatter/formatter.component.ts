import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss']
})
export class FormatterComponent implements OnInit {

  text1 : string = '';
  word_count = 0;
  char_count = 0;

  @Output() updateDataEvent = new EventEmitter<string>();

  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
    this.sharedService.dataChange.subscribe(data => {
      this.text1 = data;
      this.char_count = this.text1.length;
      this.word_count = this.char_count ? this.text1.trim().split(/\s+/).length : 0;
    })
  }

  getId(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.id === 'favcolor' ? target.value : target.id;
    this.updateDataEvent.emit(value);
  }

}
