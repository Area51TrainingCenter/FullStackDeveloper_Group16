import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresNuevoComponent } from './autores-nuevo.component';

describe('AutoresNuevoComponent', () => {
  let component: AutoresNuevoComponent;
  let fixture: ComponentFixture<AutoresNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
