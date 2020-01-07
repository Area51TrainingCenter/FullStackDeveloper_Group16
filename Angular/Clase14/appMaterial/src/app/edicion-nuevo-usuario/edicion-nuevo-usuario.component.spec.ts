import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionNuevoUsuarioComponent } from './edicion-nuevo-usuario.component';

describe('EdicionNuevoUsuarioComponent', () => {
  let component: EdicionNuevoUsuarioComponent;
  let fixture: ComponentFixture<EdicionNuevoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionNuevoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionNuevoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
