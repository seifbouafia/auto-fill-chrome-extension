import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeocareComponent } from './leocare.component';

describe('LeocareComponent', () => {
  let component: LeocareComponent;
  let fixture: ComponentFixture<LeocareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeocareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeocareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
