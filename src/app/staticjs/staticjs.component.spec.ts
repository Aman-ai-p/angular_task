import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticjsComponent } from './staticjs.component';

describe('StaticjsComponent', () => {
  let component: StaticjsComponent;
  let fixture: ComponentFixture<StaticjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
