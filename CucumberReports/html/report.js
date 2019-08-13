$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CalendarEvent.feature");
formatter.feature({
  "name": "Create or Delete Calendar Event",
  "description": "  Agile Story:\n  As a event manager\n  I should be able to create/delete the event on Calendar",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@user1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in as an Event manager",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarEventStepDef.i_logged_in_as_an_Event_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Calendar module",
  "keyword": "When "
});
formatter.match({
  "location": "CalendarEventStepDef.i_navigate_to_Calendar_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Meetings - Odoo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventStepDef.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an event on Calendar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@user1"
    }
  ]
});
formatter.step({
  "name": "I am on Calendar page",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarEventStepDef.i_am_on_Calendar_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on any date on Calendar",
  "keyword": "When "
});
formatter.match({
  "location": "CalendarEventStepDef.i_click_on_any_date_on_Calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create window should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventStepDef.create_window_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write \"event\" and click on create",
  "keyword": "And "
});
formatter.match({
  "location": "CalendarEventStepDef.i_write_and_click_on_create(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new event should be displayed on Calendar page",
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventStepDef.new_event_should_be_displayed_on_Calendar_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in as an Event manager",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarEventStepDef.i_logged_in_as_an_Event_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Calendar module",
  "keyword": "When "
});
formatter.match({
  "location": "CalendarEventStepDef.i_navigate_to_Calendar_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Meetings - Odoo\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventStepDef.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete a created event",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@user1"
    }
  ]
});
formatter.step({
  "name": "I am on Calendar page",
  "keyword": "Given "
});
formatter.match({
  "location": "CalendarEventStepDef.i_am_on_Calendar_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on created event",
  "keyword": "When "
});
formatter.match({
  "location": "CalendarEventStepDef.i_clicked_on_created_event()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Create window should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventStepDef.create_window_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on delete",
  "keyword": "And "
});
formatter.match({
  "location": "CalendarEventStepDef.i_click_on_delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "event should be dissapear from Calendar",
  "keyword": "Then "
});
formatter.match({
  "location": "CalendarEventStepDef.event_should_be_dissapear_from_Calendar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});