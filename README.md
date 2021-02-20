# Cypress.io_POC
This is a cypress.io javascript framework with basic e2e fuctionality. This was made as part of an assessment.


#Using modified Page Object model
I really like the Page Object Pattern, which you can read more about it here. This pattern allows maintainability, as it proposed to encapsulate all HTML stuff (css selectors, clicks, etc) in a Page object. This way, when you do several scenarios related to the same page, all the HTML is in one specific file; and if these tests break because of an HTML change, then you can go to that Page, change it and fix several tests at once.
