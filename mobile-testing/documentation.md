# Documentation regarding on what I set up

## Prerequisite and Initiate

### Prerequisite
- Node.js (v24.11.0) and NPM (11.6.1) - Latest version recommended
- Java (25.0.2) - Latest version recommended
- appium
- appium-doctor
- UIAutomator2 (Plugin inside Appium, needed to be installed manually)
- Android Studio (For Android Emulator)
- Appium Inspector (To inspect Element)

### Initiation
For First time installing (Setting up project), do this command

```bash
npm init wdio .
```

However, for existing project later on, we only need to do this command each
```bash
npm install
```

## Element locator strategy used

For grabbing element locator, I use Appium Inspector to inspect the elements

For Element Locator, I use one of these element locator based on the priority :
- accessibility id
- -android uiautomator
- xpath

Accessibility ID is always the best choice since it is not brittle element. However, if the element does not have Accessibility ID, we can always use android uiautomator or xpath.

## AI tools utilized and how

For basic setup and getting the ideas, I use ChatGPT and official WebdriverIO documentation for Prerequisite, Initiation

For coding the projects, I utilize Github Copilot (Code completion, Agent chat).