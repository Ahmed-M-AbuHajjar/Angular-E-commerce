import { Component } from '@angular/core';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aviato'

  constructor(private _sharedService:SharedService){ }
  hideNavAndFooter$ = this._sharedService.hideNavAndFooter$;
}
