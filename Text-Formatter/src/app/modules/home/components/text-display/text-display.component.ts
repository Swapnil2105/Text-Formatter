import { Component, ElementRef, Input, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss']
})
export class TextDisplayComponent implements OnInit {

  text : string = '';
  newText : string = '';

  fontSize = 20;
  stylethis: { [key: string]: string } = { 'font-size': `${this.fontSize}px` };

  constructor(private sharedService : SharedService,private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  display(){
    this.sharedService.setDataChange(this.text);
  }

  @Input() item : any = 'none';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      const btnValue = changes['item'].currentValue;
      switch (btnValue) {
        case 'clearallbtn':
          this.text = '';
          this.newText = '';
          break;
        case 'whitespacebtn':
          this.newText = this.text.replace(/\s+/g, '');
          break;
        case 'reverseallbtn':
          this.newText = this.text.split('').reverse().join('');
          break;
        case 'rspecialcharbtn':
          this.newText = this.text.replace(/[^a-zA-Z0-9 ]/g, '');
          break;
        case 'removestylebtn':
          const element = this.el.nativeElement.querySelector('.remove-style');
          this.renderer.removeAttribute(element, 'style');
          break;
        case 'capitalword':
          this.newText = this.text.toUpperCase();
          break;
        case 'boldbtn':
          this.applyStyle('font-weight', 'bold');
          break;
        case 'italicbtn':
          this.applyStyle('font-style', 'italic');
          break;
        case 'underlinebtn':
          this.applyStyle('text-decoration', 'underline');
          break;
        case 'increasesizebtn':
          this.changeFontSize(10);
          break;
        case 'decreasesizebtn':
          this.changeFontSize(-10);
          break;
        default:
          this.newText = this.text;
          this.stylethis['color'] = btnValue;
          break;
      }
    }
  }

  private applyStyle(property: string, value: string) {
    this.newText = this.text;
    this.stylethis[property] = value;
  }

  private changeFontSize(amount: number) {
    this.newText = this.text;
    this.fontSize += amount;
    this.stylethis['font-size'] = `${this.fontSize}px`;
  }
}
