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

    numberOfTeams : number | string = ""; //this can be a number of "4" or 4 and convert "4" to a number

    addMember() {

        if (!this.newMemberName) {
            this.errorMessage = "Name cannot be empty";
            return; //the return prevents an empty string from being added to the list
        }
        this.errorMessage = "";
        this.arrayOfMembers.push(this.newMemberName);
        this.newMemberName = ""; //this is getting referred from the html file. So that when the name is submitted on the input, it will reinitialize the input box to an empty box(empty string)
        console.log(this.arrayOfMembers);
    }

    onInput(member: string) {
        this.newMemberName = member;
        console.log(this.newMemberName);
    }

    onNumberOfTeamsInput(value: string) {
        this.numberOfTeams = Number(value); //converts the string of the value to a number for the numberOfTeams
    }

    generateTeams(){

    }
}
