import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedBlack]',
})
export class RedBlackDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.background = 'black';
    console.log(el);
  }
}
