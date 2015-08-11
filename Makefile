fetch:
	@curl --silent "http://api.eventmobi.com/en/api/v1/events/FSTOCONF15/sections/118605.json" | jq .response > _data/agenda.json
	@curl --silent "http://api.eventmobi.com/en/api/v1/events/FSTOCONF15/sections/118607.json" | jq .response > _data/speakers.json
	@curl --silent "http://api.eventmobi.com/en/api/v1/events/FSTOCONF15/sections/118608.json" | jq .response > _data/sponsors.json

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve --watch

clean:
	@rm -rf _site
	@rm -rf .sass-cache

all: clean fetch build
