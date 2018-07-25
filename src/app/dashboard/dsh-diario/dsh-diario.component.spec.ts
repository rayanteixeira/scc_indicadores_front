import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DshDiarioComponent } from './dsh-diario.component';

describe('DshDiarioComponent', () => {
  let component: DshDiarioComponent;
  let fixture: ComponentFixture<DshDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DshDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DshDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
