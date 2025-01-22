import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  data = {
    to : "",
  subject:"",
  message:""
}
doSubmitForm()
{
  console.log("try to submit form ");
  console.log("DATA",this.data);
}
}
