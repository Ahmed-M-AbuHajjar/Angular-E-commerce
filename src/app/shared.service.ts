import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private hideNavAndFooterSubject = new BehaviorSubject<boolean>(false);
  hideNavAndFooter$ = this.hideNavAndFooterSubject.asObservable();

  setHideNavAndFooter(value: boolean): void {
    this.hideNavAndFooterSubject.next(value);
  }
}