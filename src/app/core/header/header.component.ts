import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ROUTES } from '../nav/nav.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(location: Location,  private element: ElementRef) {
        this.location = location;
        this.sidebarVisible = false;
    }

    apiItems : Array <any> = [
        {value: 'ratbt95y', viewValue: 'ratbt95y(Master)'},
        {value: 'ratbt95y', viewValue: 'ratbt95y'},
        {value: 'ratbt95y', viewValue: 'ratbt95y'}
    ];
    
	selected: String = 'ratbt95y';
    active: boolean = false;
    subMenuName: String = '';

    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
    }
    
    getTitle(){
        this.subMenuName = '';
        // 路径名称
        let titlee = this.location.prepareExternalUrl(this.location.path());
        
        // 循环匹配路径名称
        for(let item = 0, len = this.listTitles; item < len.length; item++){
            if(!len[item].subMenuList.length){
                if(len[item].path === titlee){
                    return len[item].name;
                }
            }else {
                for(let j = 0, subMenu = this.listTitles[item].subMenuList; j < subMenu.length; j++){
                    if(subMenu[j].path === titlee){
                        this.subMenuName = subMenu[j].name;
                        return len[item].name;
                    }
                }
            }
        }
        return 'Dashboard';
      }
}
