Feature: Test app login

Scenario: user login
    Given user is on login page
    When put login and password correctly
    Then user should be on main page