
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	Parse.Cloud.httpRequest({
	  url: 'http://www.baidu.com/'
	}).then(function(httpResponse) {
	  // success
	  console.log(httpResponse.text);
	},function(httpResponse) {
	  // error
	  console.error('Request failed with response code ' + httpResponse.status);
	});
});

Parse.Cloud.define("test", function(request, response) {
	response.success("Hello, Yifan!");
});
