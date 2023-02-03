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

    errorMessage = "";

    addMember() {

        if(!this.newMemberName){
            this.errorMessage = "Name cannot be empty";
            return; //the return prevents an empty string from being added to the list

        }

        console.log("Clicked");
        this.arrayOfMembers.push(this.newMemberName);
        this.newMemberName = ""; //this is getting referred from the html file. So that when the name is submitted on the input, it will reinitialize the input box to an empty box(empty string)
        console.log(this.arrayOfMembers);
    }

    onInput(member: string) {
        this.newMemberName = member;
        console.log(this.newMemberName);
    }
}
