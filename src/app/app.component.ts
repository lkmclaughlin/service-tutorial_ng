import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-tutorial';

  constructor(
    private usersvc:UserService
  ) {}
  ngOnInit(): void{
    this.usersvc.get(2).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        if (err.status === 404) {
          console.error("Not Found");
        } else {
          console.error(err);
        }
      }  
    })
  }
}
