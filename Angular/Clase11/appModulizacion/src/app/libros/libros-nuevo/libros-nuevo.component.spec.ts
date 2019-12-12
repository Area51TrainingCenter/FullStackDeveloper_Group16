import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosNuevoComponent } from './libros-nuevo.component';

describe('LibrosNuevoComponent', () => {
  let component: LibrosNuevoComponent;
  let fixture: ComponentFixture<LibrosNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
