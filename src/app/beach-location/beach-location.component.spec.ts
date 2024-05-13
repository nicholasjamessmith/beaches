import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachLocationComponent } from './beach-location.component';

describe('BeachLocationComponent', () => {
  let component: BeachLocationComponent;
  let fixture: ComponentFixture<BeachLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeachLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeachLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
