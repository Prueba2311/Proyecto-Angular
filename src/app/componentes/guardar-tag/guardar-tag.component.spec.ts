import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarTagComponent } from './guardar-tag.component';

describe('GuardarTagComponent', () => {
  let component: GuardarTagComponent;
  let fixture: ComponentFixture<GuardarTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
