const { $ } = require('@wdio/globals');

class Registation {
  get menu() {
    return $("#customer_menu_top");
  }

  get Register() {
    return $('button[title="Continue"]');
  }

  RegisterButton() {
    this.menu.click()
    this.Register.click()
  }
}

module.exports = Registation;
