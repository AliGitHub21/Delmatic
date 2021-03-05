import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelColourComponent } from './wheel-colour.component';

describe('WheelColourComponent', () => {
  let component: WheelColourComponent;
  let fixture: ComponentFixture<WheelColourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelColourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
