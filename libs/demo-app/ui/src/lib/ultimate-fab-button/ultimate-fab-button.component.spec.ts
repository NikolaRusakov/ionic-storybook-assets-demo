import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateFabButtonComponent } from './ultimate-fab-button.component';

describe('UltimateFabButtonComponent', () => {
  let component: UltimateFabButtonComponent;
  let fixture: ComponentFixture<UltimateFabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimateFabButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimateFabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
