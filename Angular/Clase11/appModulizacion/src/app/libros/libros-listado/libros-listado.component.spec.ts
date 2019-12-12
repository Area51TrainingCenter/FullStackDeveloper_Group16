import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosListadoComponent } from './libros-listado.component';

describe('LibrosListadoComponent', () => {
  let component: LibrosListadoComponent;
  let fixture: ComponentFixture<LibrosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
