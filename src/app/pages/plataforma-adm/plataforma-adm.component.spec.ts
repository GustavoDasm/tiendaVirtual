import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaAdmComponent } from './plataforma-adm.component';

describe('PlataformaAdmComponent', () => {
  let component: PlataformaAdmComponent;
  let fixture: ComponentFixture<PlataformaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlataformaAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlataformaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
