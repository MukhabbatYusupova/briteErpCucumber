@user1
Feature: Create or Delete Calendar Event
  Agile Story:
  As a event manager
  I should be able to create/delete the event on Calendar


Background:
  Given I logged in as an Event manager
  When I navigate to Calendar module
  Then the page title should be "Meetings - Odoo"


Scenario: Create an event on Calendar
  Given I am on Calendar page
  When I click on any date on Calendar
  Then Create window should display
  And I write "event" and click on create
  Then new event should be displayed on Calendar page

Scenario: Delete a created event
  Given I am on Calendar page
  When I clicked on created event
  Then Create window should display
  And I click on delete
  Then event should be dissapear from Calendar
