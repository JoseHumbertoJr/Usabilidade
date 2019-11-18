import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesCursoComponent } from './questoes-curso.component';

describe('QuestoesCursoComponent', () => {
  let component: QuestoesCursoComponent;
  let fixture: ComponentFixture<QuestoesCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestoesCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestoesCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
