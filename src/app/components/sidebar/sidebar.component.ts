import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/resumo-do-dia', title: 'Visualizar Resumo', icon: 'assignment', class: '' },
    { path: '/resumo-diario', title: 'Cadastrar Resumo', icon: 'input', class: '' },
    { path: '/dashboard', title: 'Analisar Resumo', icon: 'dashboard', class: '' },
    { path: '/mail', title: 'Email', icon: 'mail', class: '' },
    { path: '/login', title: 'Sair', icon: 'logout', class: 'active-pro' },

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
