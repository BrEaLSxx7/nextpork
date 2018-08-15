import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard Admin',  icon: 'design_app', class: '' },
  { path: '/icons', title: 'Dashboard Sucursal',  icon:'education_atom', class: '' },
  { path: '/maps', title: 'Sucursales',  icon:'location_map-big', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
  { path: '/user-profile', title: 'Ver mis pedidos',  icon:'users_single-02', class: '' },
  { path: '/table-list', title: 'Reportes',  icon:'design_bullet-list-67', class: '' },
// { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' }
];
@Component({
  selector: 'nextpork-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed2 = false;
  constructor() {}

  ngOnInit() {}
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
