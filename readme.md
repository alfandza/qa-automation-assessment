# Documentation

## Executive Summary

### What I tested across all three platforms

#### Web Testing (Playwright)
- Purchase 1 Mobile
- Purchase 1 Laptop
- Purchase 1 Monitor

#### API Testing (Postman)
- GET Post (Successfull test only)
- GET Post By ID
    - ID Valid
    - Max Valid ID
    - Non Existing ID
    - Invalid ID format
- POST post (Successfull test only)

### Mobile Testing (WebdriverIO)
- Launch App
- Login
    - Login valid
    - Login invalid password format
    - Login invalid email format
    - Login invalid email and password format
- Forms
- Swipe
    - Swipe left-right
    - Swipe up-down

### Overall Test Summary

Web Report can be navigated through [here](./web-testing/playwright-report/index.html)

API Report can be navigated through [here](./api-testing/results/JSONPlaceholder.postman_test_run.json)

Mobile Result can be navigated through [here](/mobile-testing/reporter/spec.md)

### Key Findings and Insight

#### Web Testing
- Web Testing must be logged in each manually (Cannot utilize storageState authentication)

#### API Testing
- API Testing currently is in dummy state, so for POST API we cannot really make sure the sent API is actually in the database

#### Mobile Testing
- Swipe Left Right is having some issues for Carousel, currently doing 1 swipe Left, 1 swipe right instead of all carousel

## AI Tools Usage Reports

### AI Tools I used

#### Web Testing
- GitHub Copilot
    - Code Completion (to help complete code)
    - Chat Agent (to explain what is this code)

#### API Testing
- ChatGPT Web
    - Explanation and Initiation on Test Code Scripts
    - Explanation and Initiation on Test Runner and Data File (*.json)

#### Mobile Testing
- ChatGPT Web
    - Initializing WebdriverIO (Set up project)

- GitHub Copilot
    - Code Completion (to help complete code)
    - Chat Agent (to inspect problems when running Tests, usually related to Project Setup rather than actual test script issue)

### How these tools help

AI helps me on initializing WebDriverIO project and help me complete the code so I can code faster.

### Examples of AI-generated script

#### API Testing

data.json
```json
[
  {
    "id": 1,
    "expectedStatus": 200,
    "description": "Valid post ID"
  },
  {
    "id": 100,
    "expectedStatus": 200,
    "description": "Max valid ID"
  },
  {
    "id": 9999,
    "expectedStatus": 404,
    "description": "Non-existing post ID"
  },
  {
    "id": "abc",
    "expectedStatus": 404,
    "description": "Invalid ID type"
  }
]
```

Postman Check
```javascript
const expectedStatus = pm.iterationData.get("expectedStatus");
const description = pm.iterationData.get("description");

pm.test(`Status code matches – ${description}`, () => {
    pm.response.to.have.status(expectedStatus);
});

if (expectedStatus === 200) {
    pm.test("Response has required fields", () => {
        const json = pm.response.json();
        pm.expect(json).to.have.property("id");
        pm.expect(json).to.have.property("userId");
        pm.expect(json).to.have.property("title");
        pm.expect(json).to.have.property("body");
    });
}
```

### Pros & Cons in using AI

#### Pros
- Help initialize project faster
- Help in writing code faster (With Code completion feature)

#### Cons
- QA less likely to understand what the code actually does
- Code sometimes contains issue/bugs/actually doesnt exist anymore


## Tes Flow Diagram

Purchase in Demoblazer

![Test Flow Diagram](./diagrams/Purchase%20Demoblazer.drawio.png)

## Edge Cases

### Edge Cases for each of the Tests

#### Web Testing
- Test 100 Mobiles Items, 100 Laptops items and 100 Desktop items
    - Verify Purchase flow doesnt break
    - Verify UI doesnt break
- Test Purchase without login
    - Verify Application will require you to log in

#### API Testing
- Test when API Server is down
    - Verify it returns 500
    - Verify it gives message that the API is down

#### Mobile Testing
- Test when Logging in with Internet off
    - Verify it gives message that the network is down
- Test Swipe at each of the end scrollable line
    - Verify what the response is (Does it swipe or it acts like back button)



## Scalability Strategy

### Scaling to 100+ Test Cases

I will approach this by
- If this is same tests goal, but different data, I will utilize Data-Driven Testing instead of manually copying each one
- For other tests, I copy some line for initiation test, then add code line

### Framework suggestion

#### Web Testing

##### Playwright
This is because Playwright is far easier to set up, to code, to maintain and to understand by QA peers

#### API Testing

##### Postman
This is because we can do Manual Test first on Postman, then we can do script automation tests. Postman also have UI friendly and well-known by QA and Developers.

#### Mobile Testing

##### Katalon Studio
Katalon Studio have easier to set up, less likely to code and easier to grab the elements. However, Katalon Studio is freemium, Free version does less rather than Paid version.

##### WebdriverIO
WebDriverIO has similar approach to Playwright, by code design.

### CI/CD integration ideas

#### Github Actions
If we have Github Repository, its far easier to set up in Github Actions for Developing, Testing and Merge or Deploy

### Long-term maintenane strategy

- Add comment in each of the code
- Make the code easily readable (Try to avoid using complicated locator like XPath)

