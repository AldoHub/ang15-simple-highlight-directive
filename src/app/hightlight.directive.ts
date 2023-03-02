import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @Input('appHoverHighlight') highlightColor!: string;

  constructor(private el: ElementRef) { }

    /**
     * The directive defines two @HostListener functions
     * that are triggered when the mouse enters or leaves the element.
     * These functions call the highlight method with the specified highlight color or null to remove the highlight.
     * 
     */


  @HostListener('mouseenter') onMouseEnter() {
    //set the color to whatever is passed or yellow if prop is emptu
    this.highlight(this.highlightColor || 'yellow');
  }

  //on mouseleave clear the color
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}