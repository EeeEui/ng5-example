import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    menuList: Array<any> = [
        {route:'/index',icon:'home',name:'Home',subMenuList:[],_collapse:false},
        {route:'',icon:'payment',name:'Cost',subMenuList:[
            {route:'/finance',name:'Finance'},
            {route:'/preview',name:'Preview'}
        ],_collapse:false},
        {route:'',icon:'location_searching',name:'Data Search',subMenuList:[],_collapse:false},
        {route:'',icon:'equalizer',name:'Analysis',subMenuList:[
            {route:'/finance',name:'Finance'},
            {route:'/preview',name:'Preview'}
        ],_collapse:false},
        {route:'',icon:'send',name:'SMS Sending Tool',subMenuList:[],_collapse:false},
        {route:'',icon:'attach_money',name:'Price',subMenuList:[],_collapse:false},
        {route:'',icon:'shopping_cart',name:'Finance',subMenuList:[
            {route:'/finance',name:'Finance'},
            {route:'/preview',name:'Preview'}
        ],_collapse:false},
        {route:'',icon:'settings',name:'Setting',subMenuList:[
            {route:'/finance',name:'Finance'},
            {route:'/preview',name:'Preview'}
        ],_collapse:false}
    ];
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
