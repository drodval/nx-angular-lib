import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItems } from '../../models/dropdown.items';
import { DropdownChangeEvent } from 'primeng/dropdown';

@Component({
    selector: 'pe-dropdown',
    templateUrl: './pe-dropdown.component.html',
    styleUrls: ['./pe-dropdown.component.scss'],
})
export class PeDropdownComponent {
    /**
     * Con este objeto se construirán las distintas opciones que
     * tendrá el selector
     * @type {DropdownItems[]}
     */
    @Input() options: DropdownItems[] = [];

    /**
     * Etiqueta que tendrá el selector
     * @type {string}
     */
    @Input() label!: string;

    /**
     * Flag para deshabilitar el selector
     */
    @Input() disabled = false;

    /**
     *  Flag para poner el selector como invalido
     * @type {boolean | null}
     */
    @Input() invalid?: boolean | null;

    /**
     * Mensaje de error que saldrá cuando el selector no tiene datos
     * @type {string}
     */
    @Input() selectErrorMessage?: string;

    /**
     * Evento que emitirá cuando se seleccione una opción
     */
    @Output() changeSelected = new EventEmitter<DropdownChangeEvent>();

    /**
     * Opción seleccionada en ese momento
     * @type {DropdownChangeEvent | undefined}
     */
    selectedOption: DropdownChangeEvent | undefined;

    /**
     * cuando se cambia de opción en el selector se asignará selectedOption y
     * changeSelected emitirá el evento
     * @param $event
     */
    onChange($event: DropdownChangeEvent) {
        this.selectedOption = $event.value;
        this.changeSelected.emit($event);
    }
}
