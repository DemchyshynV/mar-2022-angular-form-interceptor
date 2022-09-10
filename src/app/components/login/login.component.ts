import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this._initialForm()
  }

  ngOnInit(): void {
  }

  _initialForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  login(): void {
    this.authService.login(this.form.value).subscribe(() => {
        this.router.navigate(['/cars'])
    })
  }
}
