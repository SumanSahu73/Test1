# Test1
Test for uploading the file into the github
Steps to Install Cypress as NPM Dependencies: 

1. Download Cypress Binary from https://download.cypress.io/desktop 

2. Create a fresh project folder (!Important, dont use an already existing folder that might have unnecessary caches). 

3. Open Visual studio and load the newly created project folder. 

4. Open CMD (command prompt) terminal window (not powershell) in visual studio. 

5. Run below commands in sequence: 

a) npm install -g yarn 

b) yarn add cypress -D 

c) yarn config set enableStrictSsl false 

d) yarn config set “strict-ssl” false 

e) npm config set strict-ssl false 

   Once done running with all the commands, close and restart visual studio 

6. Run below commands now cmd terminal: 

a) setx CYPRESS_INSTALL_BINARY C:\\Users\\vsingh24\\Downloads\\cypress.zip 

Note: Always replace the highlighted path with yours actual Cypress.zip file path 

b) npm install cypress 

7. Once done successfully with above commands. You are good to open cypress. To open run 

npx cypress open 

 Please read about - API Testing  (Different types of Requests and Status Codes.)

Try doing a dry run on Postman with Different APIs

https://udemy.com/course/rest-api-automation-testing-rest-assured/learn/lecture/33224906#overview -> Section 3 of this course covers the basics.

 

Cypress Reporting / Mocha awesome Reporter -> https://www.youtube.com/watch?v=aR74j4Hk0vo

 

Cypress with Jenkins : https://www.youtube.com/watch?v=UIlknGqAoiE

https://youtu.be/RhBRFyLqxz0
https://youtu.be/Gf0gxV1bYbc

 

Steps to get file path: 

1. Right click on Cypress.zip file 

2. From the list of options, click on 'Properties' 

3. Now copy the file path from there and paste in the command. 


As you guys are progressing with your courses, please start working on your frameworks using DemoBlaze website. Try creating multiple flows in POM format. 

Also try implementing your code in typescript. For this you can use the following tsconfig file :

 

{

  "compilerOptions": {

   "target": "es2016",

    "module": "commonjs",

    "lib": ["dom", "es6", "es7"],

    "types": ["node","cypress"],

    "strict": true,

    "skipLibCheck": true,

    "resolveJsonModule": true,

     // ... other options

    "esModuleInterop": true

  },

  "include": ["**/*.ts"]

} 

 

Make sure your spec files and page objects are of .ts format. You can use .json for locators & test data.

________________________________________________________________________________________________________________

 

Additional Learning:

 

Practice pdf downloading on this site: https://demo.imacros.net/Automate/PDFdemo

[Hint: You can use these npm plugins - cypress-downloadfile , pdf-parse

 

For value calculations : https://www.saucedemo.com/

Go to the above site -> login -> add a few products to cart -> checkout -> on final checkout page validate total value of products added with and without taxes. 

The intent here is to capture prices given in dollars and cents -> convert them to numbers -> store them and add them using promise chaining ->  validate them with the values present on the webpage using assertions.

 

For API Automation: https://reqres.in/  

Try using this site to automate the Demo APIs in cypress. Additionally, you can try automating APIs with OAuth Authentication.

 

Multi window handling: https://demo.automationtesting.in/Windows.html

Try window handling practice using this website. (Child Windows, New Tabs etc.)

 

Please try to implement these for your learning. You don't need to create POM for additional learning resources, you  can create spec files and implement them directly.

 

Reach out to me in case of any queries.

For Automating File Download, please use this link if the previous one is not working. Download the pdf not by clicking on the download button, rather by Automating the capturing of URL and hitting it with the plugin I shared previously.

https://cyberleninka.org/article/n/398


Implementing Xpath:


Installation : npm install -D @cypress/xpath


Add this to you e2e.ts file : require('@cypress/xpath');



Add this to your Page Object Models - /// <reference types="@cypress/xpath" />



And to use Xpath - cy.xpath("")
