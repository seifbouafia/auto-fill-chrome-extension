import { Component } from '@angular/core';
import {NetvoxComponent} from "./netvox/netvox.component";
import {LeocareComponent} from "./leocare/leocare.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
        NetvoxComponent,
        LeocareComponent
    ],
    styleUrls: ['./app.component.css']
})
export class AppComponent {

}


