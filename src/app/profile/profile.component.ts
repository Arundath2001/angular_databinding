import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  public name = 'Arundath';
  public email = 'arundath@Beinex.com';
  public age = '22';
  public Place = 'Kozhikode';
  public branch = 'Computer Science And Engineering';
  public PhoneNo = '9999999999';

  public color = 'changecolor';


}
