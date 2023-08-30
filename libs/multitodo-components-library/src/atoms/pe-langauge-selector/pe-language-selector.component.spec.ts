import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeLanguageSelectorComponent } from './pe-language-selector.component';

describe('PeLanguageSelectorComponent', () => {
    let component: PeLanguageSelectorComponent;
    let fixture: ComponentFixture<PeLanguageSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PeLanguageSelectorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PeLanguageSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
