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
    teams:string[][] = [];

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

        if(!this.numberOfTeams || this.numberOfTeams <= 0){
            return
            //if the input is not a number or less than 0 return
        }

        const allMembers = [...this.arrayOfMembers];
        //destructing arrayOfMembers to basically copy the array without changing the original arrayOfMembers;


        while(allMembers.length){
            for(let i = 0; i < this.numberOfTeams; i++){
                const rand = Math.floor(Math.random() * allMembers.length);
                const member = allMembers.splice(rand, 1)[0];

                if(!member)break; //removes the undefined if one array has just one name inside the array

                if(this.teams[i]){//if this array of i exists
                    this.teams[i].push(member); //push the member into the array else the member is the first element of the array
                }else{
                    this.teams[i] = [member]
                }
            }
        }

        console.log(this.teams);
    }
}
