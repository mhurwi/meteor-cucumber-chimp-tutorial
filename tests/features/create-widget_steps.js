module.exports = function() {
  'use strict';

  this.When(/^I enter "([^"]*)" in the name field$/, function (arg1) {
    browser.setValue('input[name="widgetName"]', arg1);
  });

  this.When(/^submit the form$/, function () {
	   browser.click('input[type="submit"]');
  });

  this.Then(/^I should see a list of widget names containing "([^"]*)"$/, function (arg1) {
    let _el = '.widget-name';
    browser.waitForVisible(_el);
    expect(browser.getText(_el)).toEqual(arg1);
  });
};
