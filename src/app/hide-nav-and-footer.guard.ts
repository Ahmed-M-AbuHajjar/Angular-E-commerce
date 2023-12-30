import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';


export interface Deactivatable {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class HideNavFooterGuard implements CanActivate, CanDeactivate<Deactivatable> {
  constructor(private sharedService: SharedService) {}

  canActivate(): boolean {
    this.sharedService.setHideNavAndFooter(true);
    return true;
  }

  canDeactivate(component: Deactivatable): Observable<boolean> | Promise<boolean> | boolean {
    if (component && component.canDeactivate) {
      return component.canDeactivate();
    }
    this.sharedService.setHideNavAndFooter(false);
    return true;
  }
}