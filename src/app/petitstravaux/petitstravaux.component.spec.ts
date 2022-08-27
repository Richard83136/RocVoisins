import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitstravauxComponent } from './petitstravaux.component';

describe('PetitstravauxComponent', () => {
  let component: PetitstravauxComponent;
  let fixture: ComponentFixture<PetitstravauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitstravauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitstravauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
