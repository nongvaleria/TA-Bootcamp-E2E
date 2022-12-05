Feature: Bootcamp E2E

    Background:
        Given I am on the homepage
        And I close the promo banner if it appears

    Scenario: Search bar
        When As a user I entry the word Windows in the search bar
        And I click the search button
        Then I see that at least one item appears

    Scenario: Internet shop logo button
        When As a user I Open Today's Best Deals tab
        And I click on the Internet shop logo
        Then I see that the main page is opened