import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    newMemberName: string = "";

    //declare an empty array of string to store in the name section
    arrayOfMembers: string[] = [];

    addMember() {
        console.log("Clicked");
        this.arrayOfMembers.push(this.newMemberName);
        this.newMemberName = "";
        console.log(this.arrayOfMembers);
    }

    onInput(member: string) {
        this.newMemberName = member;
        console.log(this.newMemberName);
    }
}
