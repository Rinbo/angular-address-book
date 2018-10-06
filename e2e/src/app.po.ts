import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  getField(name) {
    return element(by.name(name));  // will locate a element by its name and return it
  }

  getSubmitButton() {
    return element(by.buttonText('Submit'));  // will return a button element that has text submit
  }

  cardCount() {
    return element.all(by.css('.card')).count();  // finds all elements with card class and returns how many they are
  }

}
