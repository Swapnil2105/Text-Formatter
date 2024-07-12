import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

@Component({
  selector: 'app-apis-component',
  templateUrl: './apis-component.component.html',
  styleUrls: ['./apis-component.component.scss']
})
export class APIsComponentComponent  {

  userId: string = '';
  inputBody: string = '';
  errorMessage: string = '';
  responseData: any = [];
  isPhotosResponse: boolean = false;

  constructor(private jsonplaceholderService: JsonplaceholderService) { }

  // ngOnInit(): void {
  // }

  fetchUserInfo() {
    this.clearError();
    if(!this.userId) {
      this.errorMessage = 'User ID should be not empty!';
      return;
    }
    this.jsonplaceholderService.getUserInfo(Number(this.userId)).subscribe(
      data => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      error => this.errorMessage = error.message
    );
  }

  fetchPhotos() {
    this.clearError();
    if(!this.userId) {
      this.errorMessage = 'User ID should be not empty!';
      return;
    }
    this.jsonplaceholderService.getUserPhotos(Number(this.userId)).subscribe(
      data => {
        this.isPhotosResponse = true;
        this.responseData = data;
      },
      error => this.errorMessage = error.message
    );
  }

  fetchAlbums() {
    this.clearError();
    if(!this.userId) {
      this.errorMessage = 'User ID should be not empty!';
      return;
    }
    this.jsonplaceholderService.getUserAlbums(Number(this.userId)).subscribe(
      data => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      error => this.errorMessage = error.message
    );
  }

  fetchTodos() {
    this.clearError();
    if(!this.userId) {
      this.errorMessage = 'User ID should be not empty!';
      return;
    }
    this.jsonplaceholderService.getTodos(Number(this.userId)).subscribe(
      data => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      error => this.errorMessage = error.message
    );
  }

  createUser() {
    this.clearError();
    if(!this.inputBody) {
      this.errorMessage = 'Input body should be not empty!';
      return;
    }
    this.jsonplaceholderService.createUser({ body: this.inputBody }).subscribe(
      data => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      error => this.errorMessage = error.message
    );
  }

  updateUser() {
    this.clearError();
    if(!this.userId || !this.inputBody) {
      this.errorMessage = 'User ID and Input Body should be not empty!';
      return;
    }
    this.jsonplaceholderService.updateUser(Number(this.userId), { body: this.inputBody }).subscribe(
      data => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      error => this.errorMessage = error.message
    );
  }

  deleteUser() {
    this.clearError();
    if(!this.userId) {
      this.errorMessage = 'User ID should be not empty!';
      return;
    }
    this.jsonplaceholderService.deleteUser(Number(this.userId)).subscribe(
      data => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      error => this.errorMessage = error.message
    );
  }

  private clearError() {
    this.errorMessage = '';
  }

  getKeys(obj: any): string[] {
    return obj?Object.keys(obj): [];
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
}
