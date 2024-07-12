import { Component } from '@angular/core';
import { JsonplaceholderService } from './services/jsonplaceholder.service';

@Component({
  selector: 'app-apis-component',
  templateUrl: './apis-component.component.html',
  styleUrls: ['./apis-component.component.scss']
})
export class APIsComponentComponent {
  userId: string = '';
  inputBody: string = '';
  errorMessage: string = '';
  responseData: any = [];
  isPhotosResponse: boolean = false;

  constructor(private jsonplaceholderService: JsonplaceholderService) {}

  fetchData(type: string) {
    this.clearError();
    if (!this.userId) {
      this.errorMessage = 'User ID should not be empty!';
      return;
    }

    switch (type) {
      case 'comments':
        this.jsonplaceholderService.getUserComments(Number(this.userId)).subscribe(
          (data: any) => {
            this.isPhotosResponse = false;
            this.responseData = data;
          },
          (error: any) => this.errorMessage = error.message
        );
        break;
      case 'albums':
        this.jsonplaceholderService.getUserAlbums(Number(this.userId)).subscribe(
          (data: any) => {
            this.isPhotosResponse = false;
            this.responseData = data;
          },
          (error: any) => this.errorMessage = error.message
        );
        break;
      case 'photos':
        this.jsonplaceholderService.getUserPhotos(Number(this.userId)).subscribe(
          (data: any) => {
            this.isPhotosResponse = true;
            this.responseData = data;
          },
          (error: any) => this.errorMessage = error.message
        );
        break;
      case 'todos':
        this.jsonplaceholderService.getUserTodos(Number(this.userId)).subscribe(
          (data: any) => {
            this.isPhotosResponse = false;
            this.responseData = data;
          },
          (error: any) => this.errorMessage = error.message
        );
        break;
      default:
        break;
    }
  }

  createUser() {
    this.clearError();
    if (!this.inputBody) {
      this.errorMessage = 'Input body should not be empty!';
      return;
    }
    this.jsonplaceholderService.createUser({ body: this.inputBody }).subscribe(
      (data: any) => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      (error: any) => this.errorMessage = error.message
    );
  }

  updateUser() {
    this.clearError();
    if (!this.userId || !this.inputBody) {
      this.errorMessage = 'User ID and Input Body should not be empty!';
      return;
    }
    this.jsonplaceholderService.updateUser(Number(this.userId), { body: this.inputBody }).subscribe(
      (data: any) => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      (error: any) => this.errorMessage = error.message
    );
  }

  deleteUser() {
    this.clearError();
    if (!this.userId) {
      this.errorMessage = 'User ID should not be empty!';
      return;
    }
    this.jsonplaceholderService.deleteUser(Number(this.userId)).subscribe(
      (data: any) => {
        this.isPhotosResponse = false;
        this.responseData = data;
      },
      (error: any) => this.errorMessage = error.message
    );
  }

  private clearError() {
    this.errorMessage = '';
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
}
