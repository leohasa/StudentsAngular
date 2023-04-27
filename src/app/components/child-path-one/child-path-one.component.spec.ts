import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPathOneComponent } from './child-path-one.component';

describe('ChildPathOneComponent', () => {
  let component: ChildPathOneComponent;
  let fixture: ComponentFixture<ChildPathOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPathOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPathOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
