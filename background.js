var trTk = new RegExp('([\?\&\#](mkt_tok|(g|fb)clid|utm_(source|medium|term|campaign|content|cid|reader|referrer|name)|xtref|Echobox|hmb_(source|medium|campaign)|mc_(c|e)id|icid)=[^&#]*)', 'ig');
var amz_trTk = new RegExp('([\?\&](ref|ref_|pf_rd_(i|m|p|r|s|t)|(q|rn)id)=[^&#]*)', 'ig');


browser.webRequest.onBeforeRequest.addListener(function(details) {
	var url = details.url;
	var queryStringIndex = url.indexOf('?');
	if (url.indexOf('utm_') > queryStringIndex ||
		url.indexOf('clid') > queryStringIndex ||
		url.indexOf('mkt_tok') > queryStringIndex ||
		url.indexOf('xtref') > queryStringIndex ||
		url.indexOf('Echobox') > queryStringIndex ||
		url.indexOf('hmb_') > queryStringIndex ||
		url.indexOf('mc_') > queryStringIndex ||
		url.indexOf('icid') > queryStringIndex ) {
		var stripped = url.replace(trTk, '');
		if (stripped.charAt(queryStringIndex) === '&') {
			stripped = stripped.substr(0, queryStringIndex) + '?' + stripped.substr(queryStringIndex + 1)
		}
	}
	var amz_domain = new RegExp('(amazon\.(ca|cn|co\.(uk|jp)|com\.(au|br|mx|tr)|com|de|es|fr|in|it|nl))', 'ig');
	if (url.match(amz_domain)) {
		var refStringIndex = url.indexOf('/ref=');
		var stripped = url.replace(amz_trTk, '');
		if (refStringIndex !== -1) {
			if (stripped.substr(queryStringIndex + 1)) {
				stripped = stripped.substr(0, refStringIndex) + '?' + stripped.substr(queryStringIndex + 1);
			} else {
				stripped = stripped.substr(0, refStringIndex + 1);
			}
		}
	}
	if (stripped != url) {
		return {redirectUrl: stripped};
	}
},
{urls: ['https://*/*?*', 'http://*/*?*'], types: ['main_frame']}, ['blocking']);

