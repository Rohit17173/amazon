import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersidebarComponent } from './sellersidebar.component';

describe('SellersidebarComponent', () => {
  let component: SellersidebarComponent;
  let fixture: ComponentFixture<SellersidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellersidebarComponent]
    });
    fixture = TestBed.createComponent(SellersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
