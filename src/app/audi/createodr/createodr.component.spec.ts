import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateodrComponent } from './createodr.component';

describe('CreateodrComponent', () => {
  let component: CreateodrComponent;
  let fixture: ComponentFixture<CreateodrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateodrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateodrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
