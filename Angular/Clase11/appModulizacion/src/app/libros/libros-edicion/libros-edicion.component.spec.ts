import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosEdicionComponent } from './libros-edicion.component';

describe('LibrosEdicionComponent', () => {
  let component: LibrosEdicionComponent;
  let fixture: ComponentFixture<LibrosEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
