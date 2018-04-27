import { Component} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

	// 表单验证


}

