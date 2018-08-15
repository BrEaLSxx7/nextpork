import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeridosComponent } from './requeridos.component';

describe('RequeridosComponent', () => {
  let component: RequeridosComponent;
  let fixture: ComponentFixture<RequeridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
