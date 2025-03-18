import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdductComponent } from './add-prodduct.component';

describe('AddProdductComponent', () => {
  let component: AddProdductComponent;
  let fixture: ComponentFixture<AddProdductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProdductComponent]
    });
    fixture = TestBed.createComponent(AddProdductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
