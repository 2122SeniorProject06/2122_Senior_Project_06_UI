import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveseesComponent } from './fivesees.component';

describe('FiveseesComponent', () => {
  let component: FiveseesComponent;
  let fixture: ComponentFixture<FiveseesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveseesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
