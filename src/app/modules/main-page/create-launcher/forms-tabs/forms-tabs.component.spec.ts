import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTabsComponent } from './forms-tabs.component';

describe('FormsTabsComponent', () => {
  let component: FormsTabsComponent;
  let fixture: ComponentFixture<FormsTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
