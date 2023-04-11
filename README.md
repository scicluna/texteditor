GIVEN a text editor web application
WHEN I open my application in my editor - DONE
THEN I should see a client server folder structure - DONE

WHEN I run `npm run start` from the root directory - DONE
THEN I find that my application should start up the backend and serve the client - DONE

WHEN I run the text editor application from my terminal - DONE
THEN I find that my JavaScript files have been bundled using webpack - DONE

WHEN I run my webpack plugins - DONE
THEN I find that I have a generated HTML file, service worker, and a manifest file - DONE

WHEN I use next-gen JavaScript in my application - DONE
THEN I find that the text editor still functions in the browser without errors - DONE

WHEN I open the text editor - DONE
THEN I find that IndexedDB has immediately created a database storage - DONE

WHEN I enter content and subsequently click off of the DOM window - DONE
THEN I find that the content in the text editor has been saved with IndexedDB - DONE

WHEN I reopen the text editor after closing it - DONE
THEN I find that the content in the text editor has been retrieved from our IndexedDB - DONE

WHEN I click on the Install button - DONE
THEN I download my web application as an icon on my desktop - DONE

WHEN I load my web application - DONE
THEN I should have a registered service worker using workbox - DONE

WHEN I register a service worker - DONE
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets - DONE

WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application