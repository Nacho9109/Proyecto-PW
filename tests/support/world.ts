import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  browserName!: string;
}

setWorldConstructor(CustomWorld);