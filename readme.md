# Universal React Apps Using Next.js

Every user’s hardware is different, and processing speed can hinder user experience on client-side rendered React applications. Server-side rendering and code-splitting can drastically improve user experience by minimizing the work that the client has to do. It’s easy to get lost in the lingo, so this workshop and presentation explores what it all means and how to easily build universal or statically exported React apps using the Next.js framework. I walk through the concepts and use code examples to cement your understanding. You’ll get the most out of this if you’re comfortable with React and ES6 syntax.

## Slides

Check them out here: https://siakaramalegos.github.io/nextjs-workshop-slides/

## Next.js Workshop Demo

### Deployed application

- Find the deployed application [here](https://next-star-wars-eqfobbjnyg.now.sh/)
- Find the statically exported application [here](https://siakaramalegos.github.io/nextjs-workshop-demo)

### Branches by step

The code in this repo was used in the demo. Each branch represents a step in building the application:

- `1-pages-static` - Creating routes/pages and using static files. Also contains styling and `<head>` examples.
- `2-navigation` - Using `<Link>` plus a shared layout example.
- `3-loading-data` - Loading initial data with `getInitialProps`
- `4-dynamic-routes` - Setting up dynamic routes using query strings
- `5-route-masking` - Mask films routes for prettier urls
- `6-custom-server` - Setting up custom server to make pretty urls work on refresh
- `7-static-export` - Statically export to pre-rendered HTML pages
- `8-loading` - Add a loading bar indicator at top of screen hooking into Next.js' Router API

### Explanation of Scripts

These scripts are for the fully implemented demo. Different steps in building the app have different scripts.

- `dev` - runs the custom API server.js file in development mode
- `build` - generate the production application to be deployed to a served environment
- `start` - run the production application from the custom API server.js file,
- `export` - generate the static export in development mode
- `dev-static` - serve the contents of the static export folder on localhost:8080
- `deploy` - generate the gh-pages production static export and deploy it to gh-pages, including the `.nojekyll` dotfile

## Resources

Continue your learning with these resources and tutorials:

- About Next.js https://zeit.co/blog/next
- [Next.js GitHub repo](https://github.com/zeit/next.js/)
- [Official Tutorial](https://learnnextjs.com) by Zeit
- [New version 5.0 details](https://zeit.co/blog/next5) on the Zeit blog
- [7 Principles of Rich Web Applications](https://rauchg.com/2014/7-principles-of-rich-web-applications) by Guillermo Rauch, the inspiration for Next.js

## Social Media & Speaking

You can follow me on [Twitter](https://twitter.com/thegreengreek) and [Medium](https://medium.com/@thegreengreek)!

Interested in having me speak at your event? Check out my [speaking history](https://github.com/siakaramalegos/sia_speaks) and/or my [website](https://siakaramalegos.github.io/).
