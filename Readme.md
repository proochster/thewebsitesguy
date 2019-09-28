# TheWebsitesGuy.co.uk

https://thewebsitesguy.co.uk

Branch `https://github.com/proochster/thewebsitesguy` 

# Jekyll

Requirements: Ruby, Gems

Install bundler `gem install bundler jekyll`

Install project `bundle install`

Use `bundle exec jekyll serve` when running for the first time or after _config.yml has been changed.

Otherwise use `jekyll serve` or the short version `jekyll s`

To run Jekyll in the development environment using different settings create a `_config_dev.yml` file and use this command when serving the site

`jekyll serve --config  "_config_dev.yml"`

# Firebase

Initialize project `firebase init`

Deploy `firebase deploy`

Deploy Functions only `firebase deploy --only functions`

Serve Functions locally `firebase serve --only functions`

To set your Firebase environment variables run `firebase functions:config:set your.setting="value" your.secondsetting="another value"`

This will be added to the `.runtimeconfig.json` file on [Google Cloud Platform](https://console.cloud.google.com/home?authuser=0&project=thewebsitesguy-contact). You will also need to deploy the function for the changes to take effect.