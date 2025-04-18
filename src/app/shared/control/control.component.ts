import { afterNextRender, afterRender, Component, ContentChild, contentChild, ElementRef, HostBinding, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  constructor() {
    afterRender(() => {console.log('afterRender')})

    afterNextRender(() => {console.log('afterNextRender')})
  }

  onClick() {
    console.log('clicked');
    console.log(this.el.nativeElement);
    console.log(this.control?.nativeElement);
  }
}
