# Cypress.io_POC
Cypress is a node based javascript/React testing framework capabile of easy e2e testing.

# Setup:
1.Install NodeJs
2.Follow the basic setup guid at https://www.cypress.io/ based on your OS.
3.Insatall VSCode. (Although not needed for running tests, I found that it was very lightweight and easy to hook up to cypress.)


# Run tests:
There are 2 ways of running tests:

1. Open cypress with command you have set up. If you need assistance follow the cypress.io doc on getting started.
  *once cypress is open you can simply click on the spec file you would like to run.
  
2. In command line/Terminal we can run the scripts we set up. In this Cypress Example we can use the command *"npm run scripts || npm run posttest"*
   We run "npm run scripts" to run all our spec files. Once that is done, we run "npm run posttest" to combine all reports into a single HTML file for easy viewing.

Github CI pipeline
Currently no CI implementation or configuration files.


#Enhancements
There are a few things I would like to improve on. For starters I would like to remove all hardcoded Variables like BasePath, BaseURI, AUth Tokens etc. And add them to either and Excel sheet or a prop file. This will allow for easy changing of data in a single location instead of multiple.

This will allow for scalability and reusability.

Considering it is my fist project using the Serenity Framework with Cucumber I feel that a huge enhancement overal would be the ability to store all the data from the Serenity reports into a database. When it comes to API testing the Serenity Framework is very useful and it's extreamly powerful however I feel that the support and documentation is lacking compared to other Frameworks.

Thank You
Thank you for Reading this long Readme. I hope it was informative and gave a lot of info based on the apprach I took on writing RestAssure tests.
