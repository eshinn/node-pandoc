# node-pandoc [![npm version](https://badge.fury.io/js/node-pandoc.svg)](https://badge.fury.io/js/node-pandoc) [![SugarHai](https://img.shields.io/badge/farts-sprinkles-E482B5.svg)](http://www.sugarhai.com/images/sprinklepoo-gif.gif)
Run Pandoc from NodeJS. Pandoc installation is required.

## Install

```sh
# If using as a dependancy in your module
npm install node-pandoc --save

# ...or for use in your project
npm install node-pandoc --save-dev
```
*Prior to using node-pandoc, you must [install Pandoc](http://pandoc.org/installing.html) by [John MacFarlane](http://johnmacfarlane.net/).*

## What&rsquo;s Pandoc?

> If you need to convert files from one markup format into another, pandoc is your swiss-army knife. Pandoc can convert documents in [markdown](http://daringfireball.net/projects/markdown/), [reStructuredText](http://docutils.sourceforge.net/docs/ref/rst/introduction.html), [textile](http://redcloth.org/textile), [HTML](http://www.w3.org/TR/html40/), [DocBook](http://www.docbook.org/), [LaTeX](http://www.latex-project.org/), [MediaWiki markup](http://www.mediawiki.org/wiki/Help:Formatting), [TWiki markup](http://twiki.org/cgi-bin/view/TWiki/TextFormattingRules), [OPML](http://dev.opml.org/spec2.html), Emacs [Org-Mode](http://orgmode.org/), [Txt2Tags](http://txt2tags.org/), Microsoft Word [docx](http://www.microsoft.com/interop/openup/openxml/default.aspx), LibreOffice [ODT](http://en.wikipedia.org/wiki/OpenDocument), [EPUB](http://en.wikipedia.org/wiki/EPUB), or [Haddock markup](http://www.haskell.org/haddock/doc/html/ch03s08.html) to  
>
> * HTML formats: XHTML, HTML5, and HTML slide shows using [Slidy](http://www.w3.org/Talks/Tools/Slidy), [reveal.js](http://lab.hakim.se/reveal-js/), [Slideous](http://goessner.net/articles/slideous/), [S5](http://meyerweb.com/eric/tools/s5/), or [DZSlides](http://paulrouget.com/dzslides/)
> * Word processor formats: Microsoft Word [docx](http://www.microsoft.com/interop/openup/openxml/default.aspx), OpenOffice/LibreOffice [ODT](http://en.wikipedia.org/wiki/OpenDocument), [OpenDocument XML](http://opendocument.xml.org/)
> * Ebooks: [EPUB](http://en.wikipedia.org/wiki/EPUB) version 2 or 3, [FictionBook2](http://www.fictionbook.org/index.php/Eng:XML_Schema_Fictionbook_2.1)
> * Documentation formats: [DocBook](http://www.docbook.org/), [GNU TexInfo](http://www.gnu.org/software/texinfo/), [Groff man pages](http://www.gnu.org/software/groff/groff.html), [Haddock markup](http://www.haskell.org/haddock/doc/html/ch03s08.html)
> * Page layout formats: [InDesign ICML](https://www.adobe.com/content/dam/Adobe/en/devnet/indesign/cs55-docs/IDML/idml-specification.pdf)
> * Outline formats: [OPML](http://dev.opml.org/spec2.html)
> * TeX formats: [LaTeX](http://www.latex-project.org/), [ConTeXt](http://www.pragma-ade.nl/), LaTeX Beamer slides
> * [PDF](http://en.wikipedia.org/wiki/Portable_Document_Format) via LaTeX
> * Lightweight markup formats: [Markdown](http://daringfireball.net/projects/markdown/) (including [CommonMark](http://commonmark.org/)), [reStructuredText](http://docutils.sourceforge.net/docs/ref/rst/introduction.html), [AsciiDoc](http://www.methods.co.nz/asciidoc/), [MediaWiki markup](http://www.mediawiki.org/wiki/Help:Formatting), [DokuWiki markup](https://www.dokuwiki.org/wiki:syntax), Emacs [Org-Mode](http://orgmode.org/), [Textile](http://redcloth.org/textile)
> * Custom formats: custom writers can be written in [lua](http://www.lua.org/)

## So Then What&rsquo;s Node-Pandoc Do?

Node-Pandoc is simply a bridge between the Pandoc CLI (command-line interface) and NodeJS.

## License

Copyright &copy; Eric Shinn  
Licensed under the MIT License
