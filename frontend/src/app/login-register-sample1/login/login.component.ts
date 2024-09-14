import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'email': [null, Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      'password': [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(data: any){
    console.log(data);
    // this.authService.login(data).subscribe((result: { token: string; }) => {
    //   localStorage.setItem('token', result.token);
    //   localStorage.setItem('user-info', JSON.stringify(result));
    //   this.router.navigate(['/dashboard']);
    // console.log('login result');
    // console.log(result);
    // window.location.reload();
    // })
  }
}
