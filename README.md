# Redacted
This is a tech challenge to build a webapp that allows a user to redact text.

The user designates keywords they'd like to be redacted, and source text that the redaction would take place on. Then, when clicking on the Submit button on the webpage the source text would be returned with the letters XXXX replacing the keywords originally designated.

### Tools:
- Node 14.15.0
- Express 4.16.1

Struggles:
- Updating to Mac OS 11 Big Sur during the course of this project
- Coding in a language & framework I'm not as familiar with
- Understanding how to manipulate the DOM
- String manipulation working differently in a JS file vs. EJS
- Proper organization of directories
- Understanding concepts like `require` vs. `import`, `var` vs. `const`

### Instructions
`git clone https://github.com/dtsehl/redacted.git`

`npm install`

`npm start`

Then browse to localhost:3000, or view the page live [here](https://redacted-node.herokuapp.com/)

### [Wireframe Link](https://miro.com/app/board/o9J_lfe9p7k=/)

I am using GitHub Projects for organization.

### [Heroku Deployment](https://redacted-node.herokuapp.com/)

### Lessons About Testing
I could not come up with a testing framework that would work, so I even tried Dockerizing an RSpec/Capybara testing framework because I am familiar with Capybara. The functionality I wanted was something like telling the testing framework to visit a particular page on the site, interact with elements on the page and then expect a result to happen.

This did not work. Among things I learned was how testing frameworks actually do their job: they use a browser to navigate to a website and manipulate it. Without installing a browser (such as Firefox or Chrome) inside of the Docker container, the test could not do its job.

In the case of Capybara, it is able to test Javascript by using the Selenium Webdriver instead of its default Rack.

### Future Enhancements
- Properly abstract away code from the view
- Make a way to clear the redacted text from the webpage, perhaps with a button
- Randomize the number of 'X's that text is replaced with
- Hook up a Database and allow the user to upload a document that would then be parsed through
- Add Users so they could keep track of what documents they've redacted and keyowrds
    - In that same token, analysis of what keywords are used the most could be useful, if stored in a persistent database
    - This would also necessitate additional security concerns, not only because having Users requires password storage considerations (or the use of something like OAuth 2) but also because the text and keywords would be sensitive
