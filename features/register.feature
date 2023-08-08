Feature: The automationteststore Website

  Scenario Outline: As a user, I can visit the Website

    Given I am on the automation store page url
    When  Url should match <ExpectedURL>
    Then click on RegisterButon 
    Then I register with mandatory fields <address>
    Then Validate the username in landingscreen & Add a product to the cart.
    Then Proceed to the checkout & Validate on the payments page if the product details are correct.


    Examples:
      | ExpectedURL                      | address                       |                                

      | https://automationteststore.com/ | Harmu patel Nagar             |

