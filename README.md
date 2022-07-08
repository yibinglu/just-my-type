# JustMyType
## What Is It?
A chrome extension that allows users to practice typing with the text on webpages. Practicing on typing websites can feel boring and tedious since the words don't actually have any meaning, causing people to give up quickly. With JustMyType, users will be able to practice their typing and read page content simultaneously. This is especially useful for students because typing out what they're reading will help them retain information better rather than if they were to simply skim the page.

## What It Does
Currently, the extension is able to turn all the text that can be practiced on to grey. The user is able to selected different paragraphs on the page and start typing characters, however, none of the HTML will actually get altered yet. The user can open up the console to see whether or not the character they typed matches up with the character they are on.

## What I'm Working On
There is an issue with the text selection/user input that I'm currently trying to resolve. The issue stems from the way I have set up my async functions with async/await and event handlers. Every time the user clicks on a block of text, it reruns the entire function that lets the user input characters, even if they are already half way through a previous paragraph. So if the user clicks on two different paragraphs, it will always say the user is typing it wrong because it is checking each input key with two different paragraphs.

## Future Plans/Small Bug Fixes 
- Include a timer
- Have a live words-per-minute tracker
- Extend text to practice on beyond '<p>' tags
- Make the popup visually pleasing rather than just having the toggle switch
- Fix bug where the toggle resets each time you click of the popup window 
