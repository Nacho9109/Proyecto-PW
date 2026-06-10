// Configurar base de cada Page Object Model (POM) para las páginas de texto
import { Page, expect } from '@playwright/test';
export class ButtonPage {
    constructor(private page: Page) { }

    //click en enviar
    async clickEnviar() {
        await this.page.getByRole('button', { name: 'Enviar' }).click();
    }

    //click en Close
    async clickClose() {
        await this.page.getByRole('button', { name: 'Close' }).click();
    }

}