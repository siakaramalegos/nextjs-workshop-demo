# Universal React Apps Using Next.js

Every user’s hardware is different, and processing speed can hinder user experience on client-side rendered React applications. Server-side rendering and code-splitting can drastically improve user experience by minimizing the work that the client has to do. It’s easy to get lost in the lingo, so this workshop and presentation explores what it all means and how to easily build universal or statically exported React apps using the Next.js framework. I walk through the concepts and use code examples to cement your understanding. You’ll get the most out of this if you’re comfortable with React and ES6 syntax.

## Next.js Workshop Demo

The code in this repo was used in the demo.

- Find the deployed application [here](https://next-star-wars-eqfobbjnyg.now.sh/)
- Find the statically exported application [here](https://siakaramalegos.github.io/nextjs-workshop-demo)

Each branch represents a step in building the application:

- `1-pages-static` - Creating routes/pages and using static files. Also contains styling and `<head>` examples.
- `2-navigation` - Using `<Link>` plus a shared layout example.
- `3-loading-data` - Loading initial data with `getInitialProps`
- `4-dynamic-routes` - Setting up dynamic routes using query strings
- `5-route-masking` - Mask films routes for prettier urls
- `6-custom-server` - Setting up custom server to make pretty urls work on refresh
- `7-static-export` - Statically export to pre-rendered HTML pages

## Resources

Continue your learning with these resources and tutorials:

- About Next.js https://zeit.co/blog/next
- [Next.js GitHub repo](https://github.com/zeit/next.js/)
- [Official Tutorial](https://learnnextjs.com) by Zeit
- [New version 5.0 details](https://zeit.co/blog/next5) on the Zeit blog
- [7 Principles of Rich Web Applications](https://rauchg.com/2014/7-principles-of-rich-web-applications) by Guillermo Rauch, the inspiration for Next.js
