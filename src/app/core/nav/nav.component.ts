import { Component } from '@angular/core';
import { Input } from '@angular/core';

declare interface RouteInfo {
    path: string;
    name: string;
    icon: string;
    subMenuList: Array<any>;
    _collapse: boolean;
}

// route
export const ROUTES: RouteInfo[] = [
    {path:'/index',icon:'dashboard',name:'Dashboard',subMenuList:[],_collapse:false},

    {path:'',icon:'payment',name:'Cost',subMenuList:[
        {path:'/overview',name:'Overview'},
        {path:'/daily',name:'Daily'},
        {path:'/monthly',name:'Monthly'}
    ],_collapse:false},

    {path:'/dataSearh',icon:'location_searching',name:'Data Search',subMenuList:[],_collapse:false},

    {path:'',icon:'equalizer',name:'Analysis',subMenuList:[
        {path:'/dailyAnalysis',name:'Daily'},
        {path:'/monthlyAnalysis',name:'Monthly'}
    ],_collapse:false},

    {path:'/send',icon:'send',name:'SMS Send Tool',subMenuList:[],_collapse:false},

    {path:'/price',icon:'attach_money',name:'Price',subMenuList:[],_collapse:false},

    {path:'',icon:'shopping_cart',name:'Finance',subMenuList:[
        {path:'/finance',name:'Online Payment'},
        {path:'/record',name:'Payment History'}
    ],_collapse:false},
    
    {path:'',icon:'settings',name:'Setting',subMenuList:[
        {path:'/password',name:'Change Password'},
        {path:'/profile',name:'Account Profile'},
        {path:'/balance',name:'Balance Alert'},
        {path:'/dlr',name:'DLR Setting'}
    ],_collapse:false},
];

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})

export class NavComponent {
    menuList: any[];

    constructor() { }
  
    ngOnInit() {
      this.menuList = ROUTES.filter(menuItem => menuItem);
    }

    toggleCollapse(i) {
        this.menuList.forEach( element => {
            if (element != i && element._collapse) {
                element._collapse = false;
            }else if (element == i){
                i._collapse = !i._collapse;
            }
        });
    }
}
