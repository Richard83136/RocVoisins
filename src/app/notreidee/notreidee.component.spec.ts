import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreideeComponent } from './notreidee.component';

describe('NotreideeComponent', () => {
  let component: NotreideeComponent;
  let fixture: ComponentFixture<NotreideeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotreideeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotreideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
