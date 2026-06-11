import { Given, When, Then } from '@cucumber/cucumber'; // Importamos las funciones de Cucumber para definir los pasos
import { CustomWorld } from '../support/world'; // Importamos la clase CustomWorld para acceder a las propiedades del navegador y la página
import { TextPage } from '../pages/TextPage'; // Importamos la clase TextPage que contiene los métodos para interactuar con la página de texto
import { ClickPage } from '../pages/ClickPage'; // Importamos la clase ClickPage que contiene los métodos para interactuar con la página de clics
import { SelectPage } from '../pages/SelectPage'; // Importamos la clase SelectPage que contiene los métodos para interactuar con la página de selección
import { ButtonPage } from '../pages/ButtonPage'; // Importamos la clase ButtonPage que contiene los métodos para interactuar con la página de botones
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30000); // Establecemos un tiempo de espera predeterminado para los pasos de Cucumber
let textPage: TextPage; // Declaramos una variable para almacenar la instancia de TextPage
let clickPage: ClickPage; // Declaramos una variable para almacenar la instancia de ClickPage
let selectPage: SelectPage; // Declaramos una variable para almacenar la instancia de SelectPage
let buttonPage: ButtonPage; // Declaramos una variable para almacenar la instancia de ButtonPage

Given('ingreso a la pagina del proyecto', async function (this: CustomWorld) {
  // Creamos una nueva instancia de TextPage utilizando la página del mundo personalizado
  textPage = new TextPage(this.page); // Llamamos al método para ingresar a la página del proyecto
  await textPage.ingresoALaWeb(); // Esperamos a que se complete la navegación a la página
});

When('ingreso el nombre', async function (this: CustomWorld) {
  textPage = new TextPage(this.page);
  await textPage.ingresoNombre('Juan'); // Llamamos al método para ingresar el nombre en la página
});

When('ingreso apellido', async function (this: CustomWorld) {
  textPage = new TextPage(this.page);
  await textPage.ingresoApellido('Villalobos'); // Llamamos al método para ingresar el apellido en la página
});

When('ingreso el numero de telefono', async function (this: CustomWorld) {
  textPage = new TextPage(this.page);
  await textPage.telefono('1234567890'); // Llamamos al método para ingresar el número de teléfono en la página
});

When('ingreso correo electronico', async function (this: CustomWorld) {
  textPage = new TextPage(this.page);
  await textPage.correoElectronico('juanvillalobos@test.com'); // Llamamos al método para ingresar el correo electrónico en la página
});

When('marco mi pasatiempo', async function (this: CustomWorld) {
  clickPage = new ClickPage(this.page);
  await clickPage.clickPasatiempo(); // Llamamos al método para marcar el pasatiempo en la página
});

When('elijo mi genero', async function (this: CustomWorld) {
  clickPage = new ClickPage(this.page);
  await clickPage.clickGenero(); // Llamamos al método para seleccionar el género en la página
});

When('selecciono departamento', async function (this: CustomWorld) {
  selectPage = new SelectPage(this.page);
  await selectPage.seleccionoDepartamento();
});

When('selecciono ciudad', async function (this: CustomWorld) {
  selectPage = new SelectPage(this.page);
  await selectPage.seleccionoCiudad();
});

When('selecciono un comando', async function (this: CustomWorld) {
  selectPage = new SelectPage(this.page);
  await selectPage.seleccionoComando();
});

When('doy click en enviar', async function (this: CustomWorld) {
  buttonPage = new ButtonPage(this.page);
  await buttonPage.clickEnviar();
});

Then('me muestra los datos en pantalla.', async function (this: CustomWorld) {
  textPage = new TextPage(this.page);
  await textPage.mostrarDatos();
});

Then('doy click en close', async function (this: CustomWorld) {
  buttonPage = new ButtonPage(this.page);
  await buttonPage.clickClose();
});
