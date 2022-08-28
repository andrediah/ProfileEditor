import { Component } from '@angular/core';
import { Users } from './interfaces/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Editor';

  formUser :Users = {
    age : 10,
    favouriteColor: "Blue",
    name:"Bob"
  }
  displayEdit:boolean = false;

  toggleEdit():void{
    this.displayEdit = !this.displayEdit;
  }
  newName:string = this.formUser.name;
  newAge:number = this.formUser.age;
  newColour:string =this.formUser.favouriteColor;

  saveChanges():void{
    this.formUser.name = this.newName;
    this.formUser.age = this.newAge;
    this.formUser.favouriteColor = this.newColour;
    this.toggleEdit();

  }
}
