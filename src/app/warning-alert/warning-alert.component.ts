import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
    <p>Some Warning Alert</p>
    `,
    styles: [`
        p {
            width: 300px;
            border: 25px solid red;
            background-color: lightpink;
            padding: 25px;
            margin: 25px;
            text-shadow: 1px;
            color: red;
        }
    `]
})
export class WarningAlertComponent { }
