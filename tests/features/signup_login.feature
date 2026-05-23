Feature: ParaBank Automation Test
  As a quality assurance engineer
  I want to automate the ParaBank website interactions
  So that I can ensure the website functions correctly

  Background:
    Given I navigate to ParaBank website

  Scenario: Test ParaBank Website Access and Navigation
    When I navigate to the ParaBank homepage
    Then I should verify the website is accessible
    And I should verify the website title contains "ParaBank"
    And I should capture page details for documentation

  Scenario: Register a New User Account
    When I navigate to the registration page
    Then I should fill in user registration details
    And I should submit the registration form
    And I should verify the registration was processed

