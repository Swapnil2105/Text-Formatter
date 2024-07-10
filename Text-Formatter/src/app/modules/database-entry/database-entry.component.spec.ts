import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseEntryComponent } from './database-entry.component';

describe('DatabaseEntryComponent', () => {
  let component: DatabaseEntryComponent;
  let fixture: ComponentFixture<DatabaseEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
