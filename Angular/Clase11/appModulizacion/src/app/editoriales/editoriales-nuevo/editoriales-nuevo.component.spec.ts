import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesNuevoComponent } from './editoriales-nuevo.component';

describe('EditorialesNuevoComponent', () => {
  let component: EditorialesNuevoComponent;
  let fixture: ComponentFixture<EditorialesNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialesNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialesNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
