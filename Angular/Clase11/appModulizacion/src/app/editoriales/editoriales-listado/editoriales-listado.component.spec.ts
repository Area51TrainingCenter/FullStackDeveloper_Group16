import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesListadoComponent } from './editoriales-listado.component';

describe('EditorialesListadoComponent', () => {
  let component: EditorialesListadoComponent;
  let fixture: ComponentFixture<EditorialesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
