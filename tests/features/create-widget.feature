Feature: Create a Widget

  As a visitor to the site,
  so that I can add a new widget,
  I want to enter a name and click a button
  And see that new widget on my screen.

  Background:
	Given I am on the site

  @watch
  Scenario: Visitor creates a widget
	When I enter "alpha" in the name field
	And submit the form
	Then I should see a list of widget names containing "alpha"

# /tests/features/create-widget.feature
