# Tracking Token Stripper
This is a Firefox browser extension that strips Google Analytics
(i.e. [Urchin Tracking Monitor][utm]) tokens, Google and Facebook click
tracking identifiers, and some other tracking tokens from URL query strings. This is done *before* the web request is made and results in both more private browsing as well as more aesthetically pleasing URLs.

## Getting Started
### Installing
1. Download the latest version of the addon from the [release page]
2. Open `about:addons` and select `Ìnstall Add-on From File...` from the cog menu (top-right)
3. Select `token_stripper-<version>-fx.xpi`
4. Click "Add" when prompted for permission to install the extension

**Note:** [Firefox Add-ons] version coming SOON™ !

## Add-on information
### Stripped query string parameters
The following tracking tokens are stripped when browsing URLs :

| Source | Stripped Tokens |
| :---: | :--- |
| Facebook | fbclid |
| Google | gclid |
| Google Analytics<br />([UTM]) | utm_campaign<br />utm_cid<br />utm_content<br />utm_medium<br />utm_name<br />utm_reader<br />utm_referrer<br />utm_source<br />utm_term |
| HumbleBundle | hmb_campaign<br />hmb_medium<br />hmb_source |
| MailChimp | mc_cid<br />mc_eid |
| Other | ICID *(experimental, might break some websites)* <br />mkt_tok<br />xtref |

### Permissions
This extension requires the following [permissions] :
 - `webRequest`, to use the [`webRequest` API][webRequest]
 - `webRequestBlocking`, to use `webRequest` in a blocking fashion
 - `http://*/*?*`, to filter HTTP URLs
 - `https://*/*?*`, to filter HTTPS URLs

## Contributing
Feel free to submit a [pull request](https://github.com/LynXx-Meow/firefox-token-stripper/pulls) to improve this extension. :)

## Authors
* **Jon Parise** - *Initial work* - [jparise](https://github.com/jparise)
* **LynXx** - *Remove more tracking tokens* - [LynXx](https://github.com/LynXx-Meow)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[![Urchin Logo](icon-128.png "Urchin Logo")](http://www.openclipart.org/detail/69997)

[Urchin Logo](http://www.openclipart.org/detail/69997) by Jordan Irwin / Deluge.

[release page]: https://github.com/LynXx-Meow/firefox-token-stripper/releases/latest
[Firefox Add-ons]: https://addons.mozilla.org
[utm]: https://en.wikipedia.org/wiki/UTM_parameters
[addons]: https://addons.mozilla.org/addon/utm-tracking-token-stripper/
[permissions]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions
[webRequest]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest
