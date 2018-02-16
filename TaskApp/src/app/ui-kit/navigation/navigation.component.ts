import { Component, OnInit, HostListener, ElementRef, Renderer, ViewChild  } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'navigation-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isIn = false;

  @ViewChild('navigation')
  navigation: ElementRef;

  constructor(private renderer: Renderer) {

  }
    toggleState() {
        this.isIn = !this.isIn;

        const overlay = document.getElementById('overlay');
        const mediaQuery = window.matchMedia( '(max-width: 768px)' );

        if (this.isIn === true && mediaQuery.matches) {
          overlay.style.opacity = '.5';
        } else {
          overlay.style.opacity = '1';
        }

        setTimeout(() => {
          this.focus();
        }, 150);
    }

    focus() {
      this.navigation.nativeElement.focus();
      this.renderer.invokeElementMethod(this.navigation.nativeElement, 'focus', []);
    }

    closeToggle(){

      const overlay = document.getElementById('overlay');

      setTimeout(() => {
        this.isIn = false;
        overlay.style.opacity = '1';
      }, 150);
    }

    onResize(event) {

    const overlay = document.getElementById('overlay');

      if (event.target.innerWidth > 768) {
        overlay.style.opacity = '1';
      }
    }



}
