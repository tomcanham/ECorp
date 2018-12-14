GraphQL/React E-Commerce Site Demo
----------------------------------

This demonstrates a simple online store, using GraphQL (specifically, the Apollo GraphQL library), React, and Redux.

On the backend, GraphQL and Apollo are used for persistence, and the persistence layer is managed by the server (ecommerce-server).  Essentially, there are products, and products are in categories. One category can have many products. Products have a name and a price, and categories have a name.

On the frontend, React is used for rendering, and GraphQL is used to talk to the frontend. Redux is used as well, simply to show that you can use Redux to track local state, if you want (instead of Apollo's Link State). React Router is used to maintain UI state between the various "pages" of the single-page app. Note that there are two sets of pages; a set of "admin" pages, and a set of regular pages. The "admin" versions are to allow editing (mutations, in GraphQL-speak) of the data. The other pages just allow viewing. The frontend was built with create-react-app; traces of the boilerplate still remain.

NB: when the app opens, a "dialog" welcoming you will be shown; just click the "X" in the corner to close it. This is just demonstrating Redux functionality side-by-side with Apollo.

Known Limitations
-----------------

* There is NO styling on the frontend; what is there is merely enough to display the key concepts.
* There is NO authentication -- anyone can do anything.
* There is very little testing -- just a few simple tests to show how to test the presentation layer of the React components.
* The backend code should be better organized; ideally, the domain concepts (products, categories) would be accessed through DAO's (data access objects) rather than directly manipulated in the resolvers. Resolvers should be essentially like a controller in MVC -- just something that moves an intent down to the model layer.

Build Instructions
------------------

Building the app will require two processes running at once -- the backend and the frontend. There is no provision for a static build of the react app; it may or may not work "out of the box."

A recent version of Node.js will be required. Extract or clone the files into a working directory.

The backend depends upon nodemon in the development mode, so if it's not installed:

```
npm install -g nodemon
```

For each of the two components (backend and frontend, ecommerce-server and ecommerce-client), change into the top level directory and install the npm packages:

```
npm install
```

This may take a minute or two to complete. Once it's done, in each folder, type:

```
npm start
```

In the ecommerce-server directory, this will start the GraphQL server; the terminal should display "Server ready at http://localhost:4000/". Note that ports 3000 and 4000 must be available for this process to work. Leave this terminal window open.

In the ecommerce-client directory, npm start will begin the create-react-app compile/watch process, and (if you have a browser open) open a browser window/tab to the sample site, which is at http://localhost:3000 by default.

That's it!