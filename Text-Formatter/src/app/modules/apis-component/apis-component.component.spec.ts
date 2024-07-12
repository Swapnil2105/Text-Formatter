import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIsComponentComponent } from './apis-component.component';

describe('APIsComponentComponent', () => {
  let component: APIsComponentComponent;
  let fixture: ComponentFixture<APIsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
