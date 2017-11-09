import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetsComponent } from './poets.component';

describe('PoetsComponent', () => {
  let component: PoetsComponent;
  let fixture: ComponentFixture<PoetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
