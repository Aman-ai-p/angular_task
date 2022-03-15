import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpmoduleComponent } from './mvpmodule.component';

describe('MvpmoduleComponent', () => {
  let component: MvpmoduleComponent;
  let fixture: ComponentFixture<MvpmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
