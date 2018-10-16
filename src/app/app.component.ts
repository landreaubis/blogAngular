import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts = [
        {
            title: "Mon premier post",
            content: "Lorem ipsum dolor sit amet, ex sea maiorum verterem platonem, reque animal verterem in pro, laudem tincidunt te vix. Cum in errem labore, has suas democritum cu, mazim eirmod te sit. Quo nisl dolorum vivendum te,",
            createdAt: new Date(),
            loveIts: 1
        },
        {
            title: "Mon deuxième post",
            content: "Lorem ipsum dolor sit amet, ex sea maiorum verterem platonem, reque animal verterem in pro, laudem tincidunt te vix. Cum in errem labore, has suas democritum cu, mazim eirmod te sit. Quo nisl dolorum vivendum te,",
            createdAt: new Date(),
            loveIts: -1
        },
        {
            title: "Encore un post",
            content: "Lorem ipsum dolor sit amet, ex sea maiorum verterem platonem, reque animal verterem in pro, laudem tincidunt te vix. Cum in errem labore, has suas democritum cu, mazim eirmod te sit. Quo nisl dolorum vivendum te,",
            createdAt: new Date(),
            loveIts: 0
        },
    ];
}
