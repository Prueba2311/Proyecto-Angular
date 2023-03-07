import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTagsComponent } from './listar-tags.component';

describe('ListarTagsComponent', () => {
  let component: ListarTagsComponent;
  let fixture: ComponentFixture<ListarTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
