import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesEdicionComponent } from './editoriales-edicion.component';

describe('EditorialesEdicionComponent', () => {
  let component: EditorialesEdicionComponent;
  let fixture: ComponentFixture<EditorialesEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialesEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialesEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
