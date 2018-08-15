import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nextpork-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isCollapsed = false;
  constructor() {}

  ngOnInit() {}
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
