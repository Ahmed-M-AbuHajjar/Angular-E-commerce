import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RemovescrollService {
   scrollEnabled = true;

  enableScroll(): void {
    this.scrollEnabled = true;
    this.updateScroll();
  }

  disableScroll(): void {
    this.scrollEnabled = false;
    this.updateScroll();
  }

  private updateScroll(): void {
    const body = document.body;

    if (this.scrollEnabled) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
  }
}
