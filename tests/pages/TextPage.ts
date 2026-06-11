// Configurar base de cada Page Object Model (POM) para las páginas de texto
import { Page, expect } from '@playwright/test';
export class TextPage {
    constructor(private page: Page) { }

    async ingresoALaWeb() {
        await this.page.goto('https://novustechnology.pe/practice-form/');
    }

    async ingresoNombre(nombre: string) {
        console.log("Antes Ingreso name");
        await this.page.getByRole('textbox', { name: 'Nombres y Apellidos' }).fill(nombre);
        console.log("Despues Ingreso name");
    }

    async ingresoApellido(apellido: string) {
        await this.page.getByPlaceholder('Apellido').fill(apellido);
    }

    async correoElectronico(email: string) {
        await this.page.getByRole('textbox', { name: 'Correo Electrónico' }).fill(email);
    }

    async telefono(phone: string) {
        await this.page.getByRole('textbox', { name: 'Número de Teléfono (10 dígitos)' }).fill(phone);
    }

    async mostrarDatos() {
        await this.page.getByRole('heading', { name: 'Información Personal' }).click();
        await this.page.getByRole('cell', { name: 'Juan' }).click();
        await this.page.getByRole('cell', { name: 'Villalobos' }).click();
    }

}