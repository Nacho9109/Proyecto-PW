// Configurar base de cada Page Object Model (POM) para las páginas de texto
import { Page, expect } from '@playwright/test';
export class ClickPage {
    constructor(private page: Page) { }

    //click en pasatiempo
    async clickPasatiempo() {
        await this.page.getByRole('checkbox', { name: 'Deportes' }).check();
    }

    //click en genero
    async clickGenero() {
        await this.page.getByRole('radio', { name: 'Masculino' }).check();
    }

}
