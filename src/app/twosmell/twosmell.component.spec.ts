import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosmellComponent } from './twosmell.component';

describe('TwosmellComponent', () => {
  let component: TwosmellComponent;
  let fixture: ComponentFixture<TwosmellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwosmellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwosmellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
