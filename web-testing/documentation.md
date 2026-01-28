# Documentation regarding on what I set up

## Prerequisite and Initiate

### Prerequisite
- Node.js (v24.11.0) and NPM (11.6.1) - Latest version recommended
- Playwright (latest version)

### Initiation
For First time installing (Setting up project), do this command

```bash
npm init playwright@latest
```

However, for existing project later on, we only need to do this command each
```bash
npm install
```

This project uses ENV, which that means requires to have LoginUsername and LoginPassword.
```
LoginUsername=# Login Username for demoblazer
LoginPassword=# Login Password for demoblazer
```

## AI tools utilized and how

For basic setup I use documentation from Playwright

For coding the projects, I utilize Github Copilot for suggestion code and inputs. (Code completion, Agent chat).

## Challenges encountered

### 1. Website Testing is unstable

Solution : Slow down the testing code using page.waitForTimeout() and await expect(elementLocator).toBeVisible()

### 2. Needs login to do Purchase flow

Solution : Create Login function and use Login function in beforeEach

### 3. Element Locator is not DOM readable or brittle

Solution : 
- Use Relative CSS / Xpath locator (CSS is recommended)
- Stack the element with existing locator (e.g. this.placeOrderName = this.placeOrderModal.locator('input#name');)