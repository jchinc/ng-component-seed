import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {

    message: string = 'Hola Mundo';

    constructor() { }

    ngOnInit(): void { }
}