import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazerLoginPage } from './fazer-login.page';

describe('FazerLoginPage', () => {
  let component: FazerLoginPage;
  let fixture: ComponentFixture<FazerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazerLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
