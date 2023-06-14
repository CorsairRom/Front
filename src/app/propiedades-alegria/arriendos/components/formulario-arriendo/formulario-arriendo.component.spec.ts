import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArriendoComponent } from './formulario-arriendo.component';

describe('FormularioArriendoComponent', () => {
  let component: FormularioArriendoComponent;
  let fixture: ComponentFixture<FormularioArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormularioArriendoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
