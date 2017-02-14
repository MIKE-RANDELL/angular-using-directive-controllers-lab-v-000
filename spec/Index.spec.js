var path = require('path');

describe('Directive Controllers Test', function() {
	it('should display the usernames in lowercase', function() {
		browser.get('http://localhost:8080');

		var list = element.all(by.repeater('contact in ctrl.contacts'));
		expect(list.get(1).element(by.css('.username')).getText()).toEqual('stevejobs!!!!!!');
	});
});
