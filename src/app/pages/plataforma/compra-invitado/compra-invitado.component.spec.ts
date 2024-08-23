import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraInvitadoComponent } from './compra-invitado.component';

describe('CompraInvitadoComponent', () => {
  let component: CompraInvitadoComponent;
  let fixture: ComponentFixture<CompraInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraInvitadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
