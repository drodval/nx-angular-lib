import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pe-button',
    templateUrl: './pe-button.component.html',
    styleUrls: ['./pe-button.component.scss'],
})
export class PeButtonComponent {
    /**
     * Se puede usar para poner una label customizada
     * @type {string | undefined}
     */
    @Input() customLabel: string | undefined;

    /**
     * Flag para hacer que el componente de botón se muestre cargando
     */
    @Input() loading = false;

    /**
     * Se le puede pasar un estilo para customizar el botón
     * @type {string | undefined}
     */
    @Input() style: string | undefined;

    /**
     * Se le puede pasar una clase definida en primeng para customizar el botón
     */
    @Input() styleClass = 'p-button-primary';

    /**
     * Flag para deshabilitar el botón
     */
    @Input() disabled = false;

    /**
     * clase que se le pasa para mostrar un icono en el botón.
     * Revisar: https://primeng.org/icons#list
     * @type {string | undefined}
     */
    @Input() icon: string | undefined;

    /**
     * Texto que mostrará el botón
     */
    @Input() label = 'button';

    /**
     * Emitirá un evento al hacer clic sobre el botón
     */
    @Output() onClick = new EventEmitter<void>();
}
