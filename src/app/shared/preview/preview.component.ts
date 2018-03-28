import { Component } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  userObservable : {title: string}[] = [
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'},
    {'title':'Preview page'}]
}