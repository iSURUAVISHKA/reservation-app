import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootDirectory: any[] = [
    {
        name: "Applications",
        icon: "folder",
        expanded: true,
        files: [
            {
                icon: "calendar",
                name: "Calendar",
                active: true
            },
            {
                icon: "line-chart",
                name: "Charts",
                active: false
            },
            {
                icon: "dashboard",
                name: "Dashboard",
                active: false
            },
            {
                icon: "map",
                name: "Maps",
                active: false
            },
        ]
    },
    {
        name: "Files",
        icon: "folder",
        expanded: false,
        files: [
            {
                icon: "file",
                name: "Cover Letter.doc",
                active: false
            }
        ]
    },
    {
        name: "Images",
        icon: "folder",
        expanded: false,
        files: [
            {
                icon: "image",
                name: "Screenshot.png",
                active: false
            }
        ]
    }
];
}
