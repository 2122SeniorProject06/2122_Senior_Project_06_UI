import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreehearComponent } from './threehear.component';

describe('ThreehearComponent', () => {
  let component: ThreehearComponent;
  let fixture: ComponentFixture<ThreehearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreehearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreehearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
