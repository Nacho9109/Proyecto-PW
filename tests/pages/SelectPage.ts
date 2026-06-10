// Configurar base de cada Page Object Model (POM) para las páginas de texto
import { Page, expect } from '@playwright/test';
export class SelectPage {
    constructor(private page: Page) { }

    //selecciono departamento
    async seleccionoDepartamento() {
        await this.page.selectOption('#department', 'LIMA');
    }

    //selecciono ciudad
    async seleccionoCiudad() {
        await this.page.selectOption('#city', 'LIMA');
    }

    //selecciono un comando 
    async seleccionoComando() {
        await this.page.selectOption('#commands', 'Switch Commands');
    }

}