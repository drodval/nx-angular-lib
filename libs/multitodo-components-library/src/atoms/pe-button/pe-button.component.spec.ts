import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeButtonComponent } from './pe-button.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

describe('PeButtonComponent', () => {
    let component: PeButtonComponent;
    let fixture: ComponentFixture<PeButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PeButtonComponent],
            imports: [ButtonModule, RippleModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PeButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
