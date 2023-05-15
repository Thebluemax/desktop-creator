import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconManagerComponent } from './icon-manager.component';

describe('IconManagerComponent', () => {
  let component: IconManagerComponent;
  let fixture: ComponentFixture<IconManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
