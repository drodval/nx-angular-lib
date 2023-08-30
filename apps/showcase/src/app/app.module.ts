import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
    MultitodoComponentsLibraryModule,
    PeButtonModule,
    PeDropdownModule,
    PeInputTextModule,
    PeLanguageSelectorModule,
    PeStepsModule,
    TranslationService,
} from '@unir';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { OAuthModule } from 'angular-oauth2-oidc';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PanelModule } from 'primeng/panel';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

registerLocaleData(localeEs);
registerLocaleData(localeEn);

export function createTranslateLoader(service: TranslationService): TranslateHttpLoader {
    return service.init();
}

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        MultitodoComponentsLibraryModule,
        BrowserModule,
        PeButtonModule,
        PeInputTextModule,
        PeDropdownModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
        InputTextModule,
        ButtonModule,
        OAuthModule.forRoot(),
        TranslateModule.forRoot({
            defaultLanguage: 'es_ES',
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [TranslationService],
            },
            isolate: false,
        }),
        ProgressBarModule,
        ProgressSpinnerModule,
        CardModule,
        PanelModule,
        PeLanguageSelectorModule,
        DropdownModule,
        PanelModule,
        PeStepsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
