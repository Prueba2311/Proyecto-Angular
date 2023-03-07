import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTagComponent } from './ver-tag.component';

describe('VerTagComponent', () => {
  let component: VerTagComponent;
  let fixture: ComponentFixture<VerTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
