import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetvoxComponent } from './netvox.component';

describe('NetvoxComponent', () => {
  let component: NetvoxComponent;
  let fixture: ComponentFixture<NetvoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetvoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetvoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
