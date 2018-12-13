OpenTable front-end coding challenge
====================================

## Running

Install dependencies via

    $ yarn install

and run the app in development mode via

    $ yarn start

it'll open the page (localhost:8080) in the default browser.


## Comments on the problem and my work

### Journey until now
For starter (pun intended), I liked the challenge spec and enjoyed working on it, thanks.

First I've checked some sites (OpenTable of course, but also Just Eat, etc) to collect ideas about how ordering food typically looks like, then started designing (both UI and logic) on paper (see photos in 'docs/ideation/'), asked for details over email and started working on the code then.

During coding, I needed to restructure the code, especially the state, a few times (as can be seen in git log), as it was easier for me to go step-by-step and rethink the code if I didn't like it than trying to design and build the whole in one go.

### Further improvements
From functionality perspective, the current code covers the requirements: there is no way to order an invalid basket and there are messages covering all problems, however it does not have good usability, as some messages are showing problems the user need to fulfil (e.g. missing courses), while others are hints of what cannot be done (e.g. about invalid combinations). This is due to that I wanted to first get to a fully working solution, and redesign it afterwards.

About the code, it's kind of inelegant for now - too many things are hardcoded, as mentioned above, wanted to reach a functioning state and refactor afterwards (which would be the next to do).

Tests are also missing from this submission - I'm just learning TDD now and I'm not yet confident in it, especially about testing React, and didn't want to confuse myself and fumble the test because of my inexperience.

I also had other ideas to extend the problem with that I'd add later, like possibility to select another waiter, Luigi, who has no problem serving multiple seafood, but treats 'Vegetarian Lasagne' as heresy.
