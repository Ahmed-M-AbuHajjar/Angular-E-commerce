import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

}
