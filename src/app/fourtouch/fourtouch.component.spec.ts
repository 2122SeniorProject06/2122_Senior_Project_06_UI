import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourtouchComponent } from './fourtouch.component';

describe('FourtouchComponent', () => {
  let component: FourtouchComponent;
  let fixture: ComponentFixture<FourtouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourtouchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourtouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
