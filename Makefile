xpi:
	mkdir dist || true
	zip -r -FS dist/auto-vertical-tabs.zip * --exclude "*.git*" ".editorconfig" "package*.json" "node_modules/*" "dist/"
	mv dist/auto-vertical-tabs.zip dist/auto-vertical-tabs.xpi

clean:
	rm -rf dist
