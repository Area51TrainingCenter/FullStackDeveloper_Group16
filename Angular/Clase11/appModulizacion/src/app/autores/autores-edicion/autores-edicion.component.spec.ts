import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresEdicionComponent } from './autores-edicion.component';

describe('AutoresEdicionComponent', () => {
  let component: AutoresEdicionComponent;
  let fixture: ComponentFixture<AutoresEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
