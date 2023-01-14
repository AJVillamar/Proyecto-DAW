import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRescatesComponent } from './crud-rescates.component';

describe('CrudRescatesComponent', () => {
  let component: CrudRescatesComponent;
  let fixture: ComponentFixture<CrudRescatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRescatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRescatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
