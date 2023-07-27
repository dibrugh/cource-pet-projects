# process of development

1. Create package.json (by using npm-init) 
    1.1 Add parcel-bundler (--save-del, only dev dependency) + axios (--save, i.e public dependency)
    1.2 Modify package.json (scripts). Add start-script that is going to be used in the beginning of iteration (so parcel'll track changes);
build-script - to build the project.
    1.3 nmp run start
2. Index.html
    2.1 Add root elements (2 states r planned, so 2 root elements are to be created)
3. Create .gitignore

4. Prepare constants for requests to API (base url, api key, etc.)

5. Import axios
    5.1 Write a class that will have async-method that can send requests to API (using axios) and return list of objects
    5.2 Create instance of that class

6. Modules 
    6.1 Export constants, intance, etc.
    6.2 Import before-mentioned to index.js

7. Index.js 
    7.1 Write an asyc IIFE that gets final data from the resolved promise

