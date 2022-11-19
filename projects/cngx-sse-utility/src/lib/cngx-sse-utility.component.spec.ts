import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CngxSseUtilityComponent } from './cngx-sse-utility.component';

describe('CngxSseUtilityComponent', () => {
  let component: CngxSseUtilityComponent;
  let fixture: ComponentFixture<CngxSseUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CngxSseUtilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CngxSseUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
