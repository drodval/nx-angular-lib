import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeDropdownComponent } from './pe-dropdown.component';

describe('PeDropdownComponent', () => {
  let component: PeDropdownComponent;
  let fixture: ComponentFixture<PeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
