import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  hoverTimer:any;
  collapseTimer:any;
  showShopMenu: boolean = false;
  showPagesMenu: boolean = false;
  showElementsMenu: boolean = false;
  showBlogMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  startShopHoverTimer(): void {
    this.clearCollapseTimer();
    this.showShopMenu = true;
  }
  startPagesHoverTimer(): void {
    this.clearCollapseTimer();
    this.showPagesMenu = true;
  }
  startBlogHoverTimer(): void {
    this.clearCollapseTimer();
    this.showBlogMenu = true;
  }
  startElementsHoverTimer(): void {
    this.clearCollapseTimer();
    this.showElementsMenu = true;
  }

  clearHoverTimer(): void {
    clearTimeout(this.hoverTimer);
  }

  startShopCollapseTimer(): void {
    this.clearCollapseTimer();
    this.hoverTimer = this.showShopMenu = false;

  }
  startPagesCollapseTimer(): void {
    this.clearCollapseTimer();
    this.hoverTimer = this.showPagesMenu = false;

  }
  startBlogCollapseTimer(): void {
    this.clearCollapseTimer();
    this.hoverTimer = this.showBlogMenu = false;
  }
  startElementsCollapseTimer(): void {
    this.clearCollapseTimer();
    this.hoverTimer = this.showElementsMenu = false;
  }

  clearCollapseTimer(): void {
    clearTimeout(this.collapseTimer);
  }
  onNavLinksMenuHover(): void {
    this.clearCollapseTimer();
  }
}
