import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UserService } from '../services/user.service';

@UntilDestroy()
@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {

  userFormGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.userFormGroup = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      description: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.userFormGroup.value);
    this.userService.addUser(this.userFormGroup.value)
    .pipe(untilDestroyed(this))
    .subscribe(() => {
      this.router.navigate(['/request-queue-number']);
    });
    
  }

}
