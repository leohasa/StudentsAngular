import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPathThreeComponent } from './child-path-three.component';

describe('ChildPathThreeComponent', () => {
  let component: ChildPathThreeComponent;
  let fixture: ComponentFixture<ChildPathThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPathThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPathThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
