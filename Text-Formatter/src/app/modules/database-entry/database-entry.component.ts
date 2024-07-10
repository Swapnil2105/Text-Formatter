import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-database-entry',
  templateUrl: './database-entry.component.html',
  styleUrls: ['./database-entry.component.scss']
})
export class DatabaseEntryComponent implements OnInit {
  title = 'Add Database Entry';
  form: FormGroup;
  storedForms: any[] = [];

  constructor(private fb: FormBuilder, private cookieService: CookieService) {
    this.form = this.fb.group({
      dbname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      portnumber: ['', [Validators.required, Validators.pattern(/^\d{1,5}$/)]],
      dbpassword: ['', [Validators.required, Validators.minLength(7)]],
      dburl: ['', [Validators.required, Validators.pattern(/^(https?:\/\/.*[^\/])$/)]]
    });
  }

  ngOnInit(): void {
    this.form.reset();
    this.getAllStoredForms();
  }

  onSubmit(): void {
    const formValues = this.form.value;
    const existingFormsString = this.cookieService.get('form');
    let existingForms = existingFormsString ? JSON.parse(existingFormsString) : [];
    
    existingForms.push(formValues);
    this.cookieService.set('form', JSON.stringify(existingForms));
    
    this.form.reset();
    this.getAllStoredForms();
  }

  getAllStoredForms(): void {
    const storedFormsString = this.cookieService.get('form');
    this.storedForms = storedFormsString ? JSON.parse(storedFormsString) : [];
  }
}