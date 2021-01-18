import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementopersonaComponent } from './elementopersona.component';

describe('ElementopersonaComponent', () => {
  let component: ElementopersonaComponent;
  let fixture: ComponentFixture<ElementopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementopersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
