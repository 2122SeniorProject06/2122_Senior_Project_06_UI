import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetasteComponent } from './onetaste.component';

describe('OnetasteComponent', () => {
  let component: OnetasteComponent;
  let fixture: ComponentFixture<OnetasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnetasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
