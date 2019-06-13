# EcosiaToGoogle

## What is this?

It's a userscript written for your favourite userscript engine like Tampermonkey or similar ones to quickly perform the same search in google that you just did in Ecosia.

I personally use Ecosia for most of my searches and most of the time I find what I need. However sometimes the right thing just isn't in there and I use google. I have to copy the search, open google, paste it and search there. This can be annoying if you just really quickly need to find something.

This userscript simply adds a button on the right side of the ecosia search bar that contains a link to google with the same search as currently opened.

## How to install it?

1. Install TamperMonkey [for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  / [for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) or [Greasemonkey for FF](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
2. Click to [install](https://github.com/geisterfurz007/FoodEdit/raw/master/WaffleEdits.user.js)
3. Tampermonkey/Greasemonkey should open up and give you the option to install the extension

## How to use it?

After installation, search for something with ecosia. It should look a little something like this:

![This is how it should look like](https://i.stack.imgur.com/eolyr.png "This is how it should look like")

Clicking the "LINK TO GOOGLE" button will bring you right over to google.

## Other stuff

There is a button that requests you to install ecosia to your browser sometimes making the whole thing look weird. I am working on getting that to look nice but the button only randomly shows up for me and doesn't do so always so it's hard to debug. I am on it though!

The userscript uses the URL to create the link. It does not count what's in the search bar. This might be subject to change, it might not be. If you'd like that change, feel free to open an issue!
