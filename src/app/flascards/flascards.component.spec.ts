import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlascardsComponent } from './flascards.component';

describe('FlascardsComponent', () => {
  let component: FlascardsComponent;
  let fixture: ComponentFixture<FlascardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlascardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlascardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
