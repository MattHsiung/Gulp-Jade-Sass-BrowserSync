# Quick Start Static Site Builder
## Matt Hsiung
### Pre-configured Gulp Build System
<ul>
	<li>jade</li>
	<li>sass -> auto-prefixer</li>
	<li>browser-sync</li>
</ul>

#Installation

1. 'npm install'
2. 'gulp'
3. Rock out.

#Usage

##Working with Jade
The templates you will edit are in the 'build/jade' directory. 'index.jade' gets compiled into 'index.html' in the root directory, which is what is used to serve up the main html. 

My suggestion is to leave 'index.jade' alone and 'include' your other files in to keep things nice and organized. This is demonstrated for you in the files.

This was built for a simple 'one page' site in mind. However, multi-page sites can easily be made by changing the const 'multipage' to true in the 'gulpfile.js' file. 
However, be aware that this will cause all files in the 'jade' directory to be compiled into their own html files in the root. 

##Working with SASS
The SASS files are located in the 'build/sass' directory. 
'style.sass' is the main file, and gets compiled into 'css/style.css'. Again, my advice is to branch out and use '@import' to include other files, however this is mostly for organizational purposes. 

##Javascript
This was setup for simple static sites so there's just a simple 'js/main.js' file where you can put your js code. Gulp doesn't do any processing, if you want concat or uglify you'll have to add those yourself. Gulp does watch the file though, so you can still take advantage of browser sync's reloading. 
Also for a simple site, I just use cdns for external scripts but of course you can just insert anything you want into the index file.   