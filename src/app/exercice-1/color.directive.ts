import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @HostListener('window:keyup', ['$event']) windowKeyup($event) {
   switch ($event.key) {
     case 'ArrowUp':
       this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
       break;
     case 'ArrowDown':
       this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
       break;
     case 'ArrowLeft':
       this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
       break;
     case 'ArrowRight':
       this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
       break;

   }
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

}
