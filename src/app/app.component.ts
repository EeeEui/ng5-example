import { Component} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { templateJitUrl } from '@angular/compiler';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }

	ngOnInit() {
		// 滚动条
		const elemSlider = <HTMLElement>document.querySelector('.page-sidenav');
		const ps = new PerfectScrollbar(elemSlider);
		ps.update();
	}

	// 倒序函数
	reverse(word: string) {
		if (word == 'AAA'){
			return word;
		}else {
			return word.split("").reverse().join("");
		}
	}

	// 切割数组
	sliceArr(count:number,size:number) {
		let result: Array<string> = [];
		let page: number = Math.ceil(count/size);

		for (let i=0,j=page; i<j; i++){
			let start:number = i * size + 1;
            let end: number = (i+1) * size;
			let temp: string = start+"-"+end;
			result.push(temp);
		}
		return result;
	}

}

