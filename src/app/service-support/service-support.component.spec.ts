import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSupportComponent } from './service-support.component';

describe('ServiceSupportComponent', () => {
  let component: ServiceSupportComponent;
  let fixture: ComponentFixture<ServiceSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
