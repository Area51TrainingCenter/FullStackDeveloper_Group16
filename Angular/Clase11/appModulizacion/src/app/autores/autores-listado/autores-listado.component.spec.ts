import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresListadoComponent } from './autores-listado.component';

describe('AutoresListadoComponent', () => {
  let component: AutoresListadoComponent;
  let fixture: ComponentFixture<AutoresListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
