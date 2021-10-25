all:
	sassc styles/style.scss ./style.css
	@google-chrome ./index.html