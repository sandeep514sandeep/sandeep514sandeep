const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const RandomString = require("../support/randomStringGenerator");
const randomString = RandomString(6);

Given(/^I am on the automation store page url$/, async () => {
  browser.url("https://automationteststore.com/");
});

When(/^Url should match (.*)$/, async (expectedURL) => {
  await expect(browser).toHaveUrl(expectedURL);
});

Then(/^click on RegisterButon$/, async () => {
  let Registermenu = await $(`#customer_menu_top`);
  await Registermenu.click();
  let Register = await $(`button[title ="Continue"]`);
  await Register.click();
});

Then(/^I register with mandatory fields (.*)$/, async (address) => {
  let Fname = await $(`#AccountFrm_firstname`);
  await Fname.setValue(randomString);
  let Lname = await $(`#AccountFrm_lastname`);
  await Lname.setValue(randomString);
  let Email = await $(`#AccountFrm_email`);
  await Email.setValue(randomString.concat("@mailinator.com"));
  let Address = await $(`#AccountFrm_address_1`);
  await Address.setValue(address);
  let City = await $(`#AccountFrm_city`);
  await City.setValue("Bangalore");
  let Zip = await $(`#AccountFrm_postcode`);
  await Zip.setValue("534002");
  browser.pause(20000);
  let region = await $("#AccountFrm_zone_id");
  await region.selectByIndex(2);
  let loginname = await $("#AccountFrm_loginname");
  await loginname.setValue(randomString);
  await console.log(loginname);
  let password = await $("#AccountFrm_password");
  await password.setValue(randomString);
  let confirmpassword = await $("#AccountFrm_confirm");
  await confirmpassword.setValue(randomString);
  let radio = await $("#AccountFrm_newsletter0");
  await radio.click();
  let checkbox = await $("#AccountFrm_agree");
  await checkbox.click();
  let button = await $(`button[title="Continue"]`);
  await button.click();
});

Then(/^Validate the username in landingscreen & Add a product to the cart.$/, async () => {
let usernametitle = await $('#customer_menu_top .menu_text')
await expect(usernametitle).toHaveTextContaining(randomString)
let addproduct = await $('section#categorymenu > nav > ul > li:nth-of-type(3) > a')
await addproduct.click()
let selectproduct = await $('a[title="Add to Cart"]')
await selectproduct.click();
})

Then(/^Proceed to the checkout & Validate on the payments page if the product details are correct.$/, async () => {
  
let proceedcart = await $('.productpagecart');
proceedcart.click()

 let proceedcards = await $('#cart_checkout1');
await  proceedcards.click()
let subtotal = await $('tr:nth-child(1) > .align_right:nth-child(2) > .cart_block_total')
let total = await subtotal.getText()
console.log("total======",total)
 let tax = await $('tr:nth-child(2) > .align_right:nth-child(2) > .cart_block_total')
 let totaltax = await tax.getText()
 console.log("tax====",totaltax)
let subtotalcheck = await $("//b[normalize-space()='$38.50']")
let subtotalchk = await subtotalcheck.getText()
console.log("subtotal====",subtotalchk)


 let taxcheck = await $("//span[contains(@class,'bold')][normalize-space()='$2.00']")
 let subtaxchk = await taxcheck.getText()
 console.log("subtax====",subtaxchk)
 await expect(subtotal).toHaveTextContaining(subtotalchk)
 await expect(tax).toHaveTextContaining(subtaxchk)
 
});