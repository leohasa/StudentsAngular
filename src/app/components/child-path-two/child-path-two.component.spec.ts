import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPathTwoComponent } from './child-path-two.component';

describe('ChildPathTwoComponent', () => {
  let component: ChildPathTwoComponent;
  let fixture: ComponentFixture<ChildPathTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPathTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPathTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
