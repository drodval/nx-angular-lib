import { Component, OnInit } from '@angular/core';
import { LoggerService, SecurityService, UserService } from '@unir';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'multitodo-library-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'showcase';
    cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
    steps = [
        {
            label: 'SELECCIÓN DE ESTUDIOS',
        },
        {
            label: 'DATOS PERSONALES',
        },
        {
            label: 'DATOS ACADÉMICOS',
        },
        {
            label: 'DATOS PROFESIONALES',
        },
        {
            label: 'OTROS DATOS',
        },
        {
            label: 'CONFIRMACIÓN',
        },
    ];
    dropdownLabel = 'Selecciona una ciudad';

    loading = true;
    userName: string | undefined = '';

    constructor(
        logger: LoggerService,
        private securityService: SecurityService,
        private oauthService: OAuthService,
        private userService: UserService
    ) {
        logger.log('HOLA UNIR!');
    }

    logout() {
        this.securityService.logout();
    }

    ngOnInit(): void {
        this.securityService.init((user) => {
            this.userService.user = user;
            this.userService.accessToken = this.oauthService.getAccessToken();
            this.userName = this.userService.user.info?.name;
            this.loading = false;
        });
    }
}
