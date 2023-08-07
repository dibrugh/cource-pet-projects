# Dependencies
index.js 
    ↓  
import class App and call App.render()
    ↓
App.js imports class Comics and inside App.render() awaits Comics.render()
    ↓
Comics.js imports constants and use them inside Comics.render() to get data

# process of development
1. Create package.json (by using npm-init) 
    1.1 Add parcel-bundler (--save-del, only dev dependency) + axios (--save, i.e public dependency)
    1.2 Modify package.json (scripts). Add start-script that is going to be used in the beginning of iteration (so parcel'll track changes);
build-script - to build the project.
    1.3 nmp run start
    1.4 (fix) configured post-css to have correct work of :global classes

2. Index.html
    2.1 Add root elements (2 states r planned, so 2 root elements are to be created)
3. Create .gitignore

4. Prepare constants and export them
    4.1 Constants for requests to API (base url, api key, etc.)
    4.2 Constants of root elements (base page, modal windows, etc.)
    4.3 Constants for image sizes 
    4.3.1 Constant for path constructor of unavailable images;

5. Import axios
    5.1 Write a class that will have async-method that can send requests to API (using axios) and return list of objects
    5.2 Create instance of that class

6. Modules 
    6.1 Export constants, intance, etc.
    6.2 Import before-mentioned to index.js

7. Index.js 
    7.1 Write an asyc IIFE that gets final data from the resolved promise

8. Components
    8.1 Create new component - App (folder App/App.js, App.css, also index.js for correct bundling)
        8.1.1 Move constants to App.js from index.js (instead of them we'll just use the method of App class)
        8.1.2 Basic styles for App.js
        8.2.1 => 8.1.3 As we extracted the function from App class to Comics, inside App.render() we can just call Comics.render()

    8.2 Create new component - Comics (Comics.js, Comics.css, index.js)
        8.2.1 Move imports and render method from App.js to Comics.js
        8.2.2 Create render method that will take data from Marvel API, loop through, take cards with correct img path and fill in html;
        8.2.3 Add styles to Comics.css
        8.2.4 Implement new method - 'eventListener', there we pass an URI formed in render() method; We need URI to send a request and
        get list of characters of a specific comics;
        8.3.1 => 8.2.5 Create new method - renderComics to validate data;

    8.3 Create new component - Error
        8.3.1 Create new Error class and export an instance, then import to Comics.js
        8.3.2 Add styles to Error

    8.4 Create new component - Characters
    8.5 Create new mini-component - Notification


9. Implement style modules to eliminate potential conflics/redefinings if we'd use same class names (e.i we will isolate .css files)
Modules can be used only for classes
    9.1 npm i postcss-modules --save-dev
    9.2 Rename module as 'Name.module.css' and fix imports
    9.3 Create global classes in App.js (using :global(.class){})