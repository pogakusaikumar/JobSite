import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstformComponent } from './firstform.component';

describe('FirstformComponent', () => {
  let component: FirstformComponent;
  let fixture: ComponentFixture<FirstformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
