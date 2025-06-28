import test, { expect } from "@fixtures/basePages";
import { webHelper } from "@helper/webHelper";
import { gamePlayPage } from "@pages/gamePlay.page";
import { triviaPage } from "pages/trivaPage/trivia.page";
import * as data from "@testData/data.json";
const clipboard = require("clipboardy");
import ENV from "@utils/env/env";
import testData from "@testData/testData";
import { type } from "os";
import { time } from "console";

const randomNumber = Math.floor(Math.random() * 100000000000);
// Define a variable to keep track of the test number
let testNumber = 1;
// Define a function to generate the test name with the current test number
function generateTestID() {
        return `Trivia-${testNumber++}`;
}



test(generateTestID()+` | Main Menu | Update Mobile Settings via Main Menu according to Trivia`, {tag: ["@Regression, @Smoke"]},  async ({ triviaPage, loginPage, page, context }) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');

    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
    
    // 01 | Given: User navigates to the login page
    // Navigates to the login page and waits for the network to be idle before proceeding.
    await test.step(`${stepsID()} | Given: User navigates to the login page`, async () => {
        await page.goto(ENV.BASE_URL, { waitUntil: "networkidle" });
    });
    
    // 02 | When: User inputs admin login credentials
    // Enters the admin username and password to log in.
    await test.step(`${stepsID()} | When: User inputs admin login credentials`, async () => {
        await loginPage.loginWithUser(ENV.USERNAME, ENV.PASSWORD);
        await page.waitForSelector(triviaPage.triviaPageElements.mainMenuUserBtn);
    });
    
    // 03 | Given: User navigates to the Mobile Design route
    // Navigates to the Mobile Design page and waits for the desktop mockup expand button to appear.
    await test.step(`${stepsID()} | Given: User navigates to the Mobile Design route`, async () => {
        await page.goto(ENV.BASE_URL + ENV.MOBILE_DESIGN_ROUTE, { waitUntil: 'load', timeout: 10000 });
        await page.waitForSelector(triviaPage.triviaPageElements.desktopMockupExpandBtn);
    });
    
    // 04 | And: User expands the desktop mockup
    // Expands the desktop mockup section to access additional options.
    await test.step(`${stepsID()} | And: User expands the desktop mockup`, async () => {
        await triviaPage.expandDesktopMockup();
    });
    
    // 05 | When: User opens the device frameset listbox
    // Opens the dropdown to select a specific device frameset.
    await test.step(`${stepsID()} | When: User opens the device frameset listbox`, async () => {
        await triviaPage.openDeviceFramesetListBox();
    });
    
    // 06 | Then: User selects the iPhone X device
    // Selects the iPhone X device from the list of available frames.
    await test.step(`${stepsID()} | Then: User selects the iPhone X device`, async () => {
        await triviaPage.selectIphoneX();
    });
    
    // 07 | When: User clicks on the language section
    // Clicks on the language section to display language settings and options.
    await test.step(`${stepsID()} | When: User clicks on the language section`, async () => {
        await triviaPage.clickingOnLanguageSection();
    });
    
    // 08 | Then: User enables language controls
    // Enables controls for language configuration.
    await test.step(`${stepsID()} | Then: User enables language controls`, async () => {
        await triviaPage.languageControlsEnable();
    });
    
    // 09 | Given: User checks if the force language option is enabled
    // Checks if the force language feature is enabled before making any changes.
    await test.step(`${stepsID()} | Given: User checks if the force language option is enabled`, async () => {
        await triviaPage.checkForceLanguage();
    });
    
    // 10 | When: User opens the force language listbox
    // Opens the dropdown list for selecting a force language option.
    await test.step(`${stepsID()} | When: User opens the force language listbox`, async () => {
        await triviaPage.openForceLanguageListbox();
    });
    
    // 11 | Then: User selects English language
    // Selects "English" as the preferred language from the list.
    await test.step(`${stepsID()} | Then: User selects English language`, async () => {
        await triviaPage.selectEnglishLanguage();
    });
    
    // 12 | And: User clicks on the mobile menu section
    // Clicks on the mobile menu section to display additional options.
    await test.step(`${stepsID()} | And: User clicks on the mobile menu section`, async () => {
        await triviaPage.clickMobileMenuSection();
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(1000);
        await helper.clickIfVisible(triviaPage.mobileMenuPresetDeleteBtn.nth(0));
        await helper.clickIfVisible(triviaPage.deleteConfirmBtn.nth(0));
        await helper.clickIfVisible(triviaPage.dismissBtn.nth(0));
    });
    
    // Repeat the above pattern for all subsequent test steps.
    
// 13 | And: User clicks the add new preset button
await test.step(`${stepsID()} | And: User clicks the add new preset button`, async () => {
    await helper.clickHelper(triviaPage.addNewPresetPlusBtn);
});

// 14 | And: User inputs a preset name
await test.step(`${stepsID()} | And: User inputs a preset name`, async () => {
    await helper.inputHelper(triviaPage.triviaPageElements.presetInputField, randomNumber.toString());
    await page.waitForTimeout(2000);

});

// 15 | And: User clicks the save button
await test.step(`${stepsID()} | And: User clicks the save button`, async () => {
    await helper.clickHelper(triviaPage.saveBtnForMenu);
    await page.waitForTimeout(2000);
});

// 16 | And: User clicks the alignment bottom button
await test.step(`${stepsID()} | And: User clicks the alignment bottom and desable name checkbox`, async () => {
    await helper.clickHelper(triviaPage.alignmentBottomBtn);
    await helper.waitForTimeout(1000);
    await helper.handleCheckbox(triviaPage.checkBoxWithoutIframe.nth(2), true);
    await helper.waitForTimeout(1000);
});

// 17 | When: User clicks on the Sign-Up section
await test.step(`${stepsID()} | When: User clicks on the Sign-Up section`, async () => {
    await helper.clickHelper(triviaPage.signUpSection);
    await helper.clickIfVisible(triviaPage.mobileMenuPresetDeleteBtn.nth(0));
    await helper.clickIfVisible(triviaPage.deleteConfirmBtn.nth(0));
    await helper.clickIfVisible(triviaPage.dismissBtn.nth(0));
});

// 18 | And: User clicks the add new preset button
await test.step(`${stepsID()} | And: User clicks the add new preset button`, async () => {
    await helper.clickHelper(triviaPage.addNewPresetPlusBtn);
});

// 19 | And: User inputs a preset name
await test.step(`${stepsID()} | And: User inputs a preset name`, async () => {
    await helper.inputHelper(triviaPage.triviaPageElements.presetInputField, randomNumber.toString());
});

// 20 | Then: User clicks the save button
await test.step(`${stepsID()} | Then: User clicks the save button`, async () => {
    await helper.clickHelper(triviaPage.saveBtnForMenu);
    await page.waitForTimeout(1000);
});

// 21 | When: User clicks on the Global Prizing section
await test.step(`${stepsID()} | When: User clicks on the Global Prizing section`, async () => {
    await helper.clickHelper(triviaPage.globalPrizingSection);
    await helper.clickIfVisible(triviaPage.deletePrizeBtn.nth(0));
    await helper.clickIfVisible(triviaPage.mainbaordOkBtn.nth(0));
});

// 22 | And: User clicks the category listbox
await test.step(`${stepsID()} | And: User clicks the category listbox`, async () => {
    await helper.clickHelper(triviaPage.catagoryListBox);
});

// 23 | And: User selects "None" from the category options
await test.step(`${stepsID()} | And: User selects "None" from the category options`, async () => {
    await helper.clickHelper(triviaPage.noneSelectBtn);
});

// 24 | And: User clicks the add new prizing button
await test.step(`${stepsID()} | And: User clicks the add new prizing button`, async () => {
    await helper.clickHelper(triviaPage.addNewPrizingBtn);
});

// 25 | And: User inputs the prize name
await test.step(`${stepsID()} | And: User inputs the prize name`, async () => {
    await helper.inputTextHelper(triviaPage.inputPrizeName, randomNumber.toString());
});

// 31 | And: User clicks on the description input field
await test.step(`${stepsID()} | And: User clicks on the description input field`, async () => {
    await helper.clickHelper(triviaPage.discriptionInputFieldForPrize);
});

// 32 | And: User inputs the prize description
await test.step(`${stepsID()} | And: User inputs the prize description`, async () => {
    await helper.inputTextHelper(triviaPage.discriptionInputFieldForPrize, data.description[0]);
    await helper.waitForTimeout(3000)
});


// 26 | And: User clicks the simple image upload button
await test.step(`${stepsID()} | And: User clicks the simple image upload button`, async () => {
    await helper.clickHelper(triviaPage.simpleImageUploadBtn);
});

// 27 | And: User uploads a file using the file chooser
await test.step(`${stepsID()} | And: User uploads a file using the file chooser`, async () => {
    await helper.uploadFileUsingFileChooser(data.filePath[0]);
});

// 28 | And: User clicks the image choose button
await test.step(`${stepsID()} | And: User clicks the image choose button`, async () => {
    await helper.clickHelper(triviaPage.imageChoseBtn);
});

// 29 | And: User clicks the image editor save button
await test.step(`${stepsID()} | And: User clicks the image editor save button`, async () => {
    await helper.clickHelper(triviaPage.imageEditorSaveBtn);
    await page.waitForTimeout(7000);
    await helper.clickHelper(triviaPage.prizingText)
    await page.waitForTimeout(2000);

});

// 33 | Then: User clicks the save button
await test.step(`${stepsID()} | Then: User clicks the save button`, async () => {
    await page.waitForSelector("//button[@aria-label='dxp-prizing-editor-save-button']");  
    await helper.clickHelper(triviaPage.saveBtnInMainMenuPrize);
    await helper.waitForTimeout(3000);
});

// 33 | Then: User clicks the save button
await test.step(`${stepsID()} | Then: Verif that the prize is successfully added`, async () => {   
    await helper.assertTextHelper(triviaPage.prizeList.nth(0), randomNumber.toString());
    await helper.waitForTimeout(1000);
});

// 34 | When: User clicks on the Marketing Banner section
await test.step(`${stepsID()} | When: User clicks on the Marketing Banner section`, async () => {
    await helper.clickHelper(triviaPage.marketingBannerSectioon);
});

// 35 | Then: User deletes all uploaded marketing banners
await test.step(`${stepsID()} | Then: User deletes all uploaded marketing banners`, async () => {
    await helper.deleteAllMarketingBanner(triviaPage.triviaPageElements.uploadedImage);
});


await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForTimeout(10000)   
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
    await page.waitForTimeout(1000);
});

await test.step(`${stepsID()} | And: User clicks the add new instance plus button`, async () => {
    await helper.clickHelper(triviaPage.addNewInstancePlusBtn);
});

await test.step(`${stepsID()} | And: User inputs the instance name`, async () => {
    await helper.inputTextHelper(triviaPage.instanceNameInputField, randomNumber.toString());
});

await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
    await helper.clickHelper(triviaPage.saveBtnInIframe);
    await page.waitForTimeout(1000);
});

await test.step(`${stepsID()} | Then: User verifies the title of the added instance`, async () => {
    await helper.assertTextHelper(triviaPage.addedInstanceTitleText.last(), randomNumber.toString());
});

await test.step(`${stepsID()} | And: User clicks on the last instance control section`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

await test.step(`${stepsID()} | When: User clicks the 3D rotation button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.instanceThreeDrotBtn.last());
});

await test.step(`${stepsID()} | And: User clicks the settings button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.instanceSettingBtn.last());
});

await test.step(`${stepsID()} | And: User clicks the Sign-Up preset listbox`, async () => {
    await helper.clickHelper(triviaPage.signUpPresetListBox);
});

await test.step(`${stepsID()} | And: User selects the last item in the Sign-Up preset list`, async () => {
    await helper.clickHelper(triviaPage.presetSelectIteam.last());
});

await test.step(`${stepsID()} | And: User clicks the Menu preset listbox`, async () => {
    await helper.clickHelper(triviaPage.menuPresetLisBox);
});

await test.step(`${stepsID()} | And: User selects the last item in the Menu preset list`, async () => {
    await helper.clickHelper(triviaPage.presetSelectIteam.last());
});

await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
    await helper.clickHelper(triviaPage.saveBtnInIframe);
    await page.waitForTimeout(1000);
});

await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

await test.step(`${stepsID()} | And: User clicks the "Add Round" button`, async () => {
    await helper.clickHelper(triviaPage.addRoundBtn);
});

await test.step(`${stepsID()} | And: User enters a name for the new round`, async () => {
    await helper.inputTextHelper(triviaPage.roundNameInputField, randomNumber.toString());
});

await test.step(`${stepsID()} | And: User clicks the add button to confirm the new round`, async () => {
    await helper.clickHelper(triviaPage.addBtn);
});

// 01 | When: User uploads the JSON file for questions
await test.step(`${stepsID()} | When: User uploads the JSON file for questions`, async () => {
    await helper.uploadJSOnHelper(data.getQuestions[0]);
});

// 02 | And: User clicks the Import Questions button
await test.step(`${stepsID()} | And: User clicks the Import Questions button`, async () => {
    await helper.clickHelper(triviaPage.imporQuestionsBtn);
});

// 03 | And: User confirms the import by clicking OK in the iframe
await test.step(`${stepsID()} | And: User confirms the import by clicking OK in the iframe`, async () => {
    await helper.clickHelper(triviaPage.okBtnInIframe);
});


await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
    await helper.waitForTimeout(1000);
    await triviaPage.ifVidoeServiceModalOpen();
});

await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

await test.step(`${stepsID()} | Then: User verifies successful navigation to the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});






})

test(generateTestID()+` | Page URL Verification | Validate Trivia URL`, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {
    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');    
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

// 01 | Given: Navigates to the Trivia page
// Description: This step navigates to the base URL of the Trivia route and waits until network activities are idle, ensuring the page has fully loaded.
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE, { waitUntil: "networkidle" });
});

// 02 | When: User closes the home popup
// Clicks the remove button to close the home popup.
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
     
    await helper.clickHelper(triviaPage.controlSection.nth(0));
});

// 03 | Then: User verifies that the URL is as expected
// Asserts that the current page URL matches the expected URL, with a custom failure message.
await test.step(`${stepsID()} | Then: User verifies that the URL is as expected`, async () => {
    await loginPage.AssertEqual(
        ENV.BASE_URL + ENV.EXPECTED_URL, // expected URL
        page.url(), // actual URL
        'Check URL Page is equal to: "' + ENV.BASE_URL + ENV.EXPECTED_URL + '"' // message if assertion fails
    );


    });



})

test(generateTestID()+` | Instance | Validate Minimum Character Requirement for Instance "Create" Input Field`, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context}) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    await test.step(`${stepsID()} | Given: User navigates to the TRIVIA page`, async () => {
        await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    });
    
    await test.step(`${stepsID()} | When: User closes the home popup`, async () => {     
        await helper.clickHelper(triviaPage.controlSection.nth(0));
    });
    
    await test.step(`${stepsID()} | And: User clicks the add new instance plus button`, async () => {
        await helper.clickHelper(triviaPage.addNewInstancePlusBtn);
    });
    
    await test.step(`${stepsID()} | And: User inputs the instance name`, async () => {
        await helper.inputTextHelper(triviaPage.instanceNameInputField, data.instancesNameValidation[0]);
    });
    
    await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
        await helper.clickHelper(triviaPage.saveBtnInIframe);
    });
    
    await test.step(`${stepsID()} | Then: User verifies the minimum character error message in add instance modal`, async () => {
        await helper.assertTextHelper(triviaPage.mimimumCharacterErrorMassage, data.instancesNameFieldErrorMassage[0]);
    });
    
    await test.step(`${stepsID()} | And: User clicks the cancel button`, async () => {
        await helper.clickHelper(triviaPage.instanceRenameCancelBtn);
    });
    


})
test(generateTestID()+` | Instance | Validate Minimum Character Requirement for Instance "Rename" Input Field`, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');

// 01 | Given: Navigates to the Trivia page
// Description: This step navigates to the base URL of the Trivia route and waits until network activities are idle, ensuring the page has fully loaded.
await test.step('01 | Given: User navigates to the Trivia page', async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | When: User closes the home popup
// Clicks the remove button to close the home popup.
await test.step('02 | When: User closes the home popup', async () => {
     
    await helper.clickHelper(triviaPage.controlSection.nth(0));
    await page.waitForTimeout(1000)
});

// 08 | When: User clicks the 3D rotation button for the instance
// Clicks the 3D rotation button for the specified instance to access more options.
await test.step('03 | When: User clicks the 3D rotation button for the instance', async () => {
    await helper.clickHelper(triviaPage.instanceThreeDrotBtn.nth(0));
});

// 08 | And: User clicks the more options button for instances
// Clicks the more options button to reveal additional actions for the instance.
await test.step('04 | And: User clicks the more options button for instances', async () => {
    await helper.clickHelper(triviaPage.moreOptionBtnForInstances.nth(0));
});

// 09 | And: User inputs a new name in the rename input field
// Enters the new instance name in the rename input field for validation.
await test.step('05 | And: User inputs a new name in the rename input field', async () => {
    await helper.inputTextHelper(triviaPage.instancesRenameInputField, data.instancesNameValidation[0]);
});

// 10 | And: User clicks the save button in the iframe
// Clicks the save button to attempt saving the renamed instance.
await test.step('06 | And: User clicks the save button in the iframe', async () => {
    await helper.clickHelper(triviaPage.saveBtnInIframe);
});

// 11 | Then: User verifies the minimum character error message
// Asserts that the error message for the rename input field matches the expected error message.
await test.step('07 | Then: User verifies the minimum character error message "Instance Setting" modal', async () => {
    await helper.assertTextHelper(triviaPage.mimimumCharacterErrorMassage, data.instancesNameFieldErrorMassage[0]);
});

// 07 | And: User clicks the cancel button
// Clicks the cancel button to discard the renaming of the instance.
await test.step('08 | And: User clicks the cancel button', async () => {
    await helper.clickHelper(triviaPage.instanceRenameCancelBtn);
});


})

test(generateTestID()+` | Instance | Validate Space Input for "Create" Input Field`, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
    await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
        await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
        await page.waitForLoadState("networkidle");
    });
    
    await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
        await helper.clickHelper(triviaPage.controlSection.nth(0));
        await page.waitForTimeout(1000);
    });
    
    await test.step(`${stepsID()} | And: User clicks the add new instance plus button`, async () => {
        await helper.clickHelper(triviaPage.addNewInstancePlusBtn);
    });
    
    await test.step(`${stepsID()} | And: User inputs the instance name`, async () => {
        await helper.inputTextHelper(triviaPage.instanceNameInputField, data.instancesNameValidation[1]);
    });
    
    await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
        await helper.clickHelper(triviaPage.saveBtnInIframe);
    });
    
    await test.step(`${stepsID()} | Then: User verifies the minimum character error message in add instance modal`, async () => {
        await helper.assertTextHelper(triviaPage.mimimumCharacterErrorMassage, data.instancesNameFieldErrorMassage[1]);
    });
    
    await test.step(`${stepsID()} | And: User clicks the cancel button`, async () => {
        await helper.clickHelper(triviaPage.instanceRenameCancelBtn);
    });
    








})
test(generateTestID()+` | Instance | Validate Space Input for Rename Input Field`, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');

    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
    await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
        await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
        await page.waitForLoadState("networkidle");
    });
    
    await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
        await helper.clickHelper(triviaPage.controlSection.nth(0));
        await page.waitForTimeout(1000);
    });
    
    await test.step(`${stepsID()} | When: User clicks the 3D rotation button for the instance`, async () => {
        await helper.clickHelper(triviaPage.instanceThreeDrotBtn.nth(0));
    });
    
    await test.step(`${stepsID()} | And: User clicks the more options button for instances`, async () => {
        await helper.clickHelper(triviaPage.moreOptionBtnForInstances.nth(0));
    });
    
    await test.step(`${stepsID()} | And: User inputs a new name in the rename input field`, async () => {
        await helper.inputTextHelper(triviaPage.instancesRenameInputField, data.instancesNameValidation[1]);
    });
    
    await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
        await helper.clickHelper(triviaPage.saveBtnInIframe);
    });
    
    await test.step(`${stepsID()} | Then: User verifies the minimum character error message in the "Instance Rename" modal`, async () => {
        await helper.assertTextHelper(triviaPage.mimimumCharacterErrorMassage, data.instancesNameFieldErrorMassage[1]);
    });
    
    await test.step(`${stepsID()} | And: User clicks the cancel button`, async () => {
        await helper.clickHelper(triviaPage.instanceRenameCancelBtn);
    });
    










})

test(generateTestID()+` | Instance | Validate Instance Delete Functionality `, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');

    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await helper.clickHelper(triviaPage.designSection.nth(0));
    await page.waitForTimeout(1000);
});

// 03 | And: User stops all running games
await test.step(`${stepsID()} | And: User stops all running games`, async () => {
    await helper.stopAllGames();
});

// 04 | And: User deletes all instances
await test.step(`${stepsID()} | And: User deletes all instances`, async () => {
    await helper.deleteAllInstances();
});


    




})
test(generateTestID()+` | Instance | Validate Instance Creation with Valid Data`, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});
    
    await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
        await helper.clickHelper(triviaPage.controlSection.nth(0));
    });
    
    await test.step(`${stepsID()} | And: User clicks the add new instance plus button`, async () => {
        await helper.clickHelper(triviaPage.addNewInstancePlusBtn);
    });
    
    await test.step(`${stepsID()} | And: User inputs the instance name`, async () => {
        await helper.inputTextHelper(triviaPage.instanceNameInputField, randomNumber.toString());
    });
    
    await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
        await helper.clickHelper(triviaPage.saveBtnInIframe);
        await page.waitForTimeout(1000);
    });
    
    await test.step(`${stepsID()} | Then: User verifies the title of the added instance`, async () => {
        await helper.assertTextHelper(triviaPage.addedInstanceTitleText.last(), randomNumber.toString());
    });

    
await test.step(`${stepsID()} | And: User clicks on the last instance control section`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

await test.step(`${stepsID()} | When: User clicks the 3D rotation button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.instanceThreeDrotBtn.last());
});

await test.step(`${stepsID()} | And: User clicks the settings button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.instanceSettingBtn.last());
});

await test.step(`${stepsID()} | And: User clicks the Sign-Up preset listbox`, async () => {
    await helper.clickHelper(triviaPage.signUpPresetListBox);
});

await test.step(`${stepsID()} | And: User selects the last item in the Sign-Up preset list`, async () => {
    await helper.clickHelper(triviaPage.presetSelectIteam.last());
});

await test.step(`${stepsID()} | And: User clicks the Menu preset listbox`, async () => {
    await helper.clickHelper(triviaPage.menuPresetLisBox);
});

await test.step(`${stepsID()} | And: User selects the last item in the Menu preset list`, async () => {
    await helper.clickHelper(triviaPage.presetSelectIteam.last());
});

await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
    await helper.clickHelper(triviaPage.saveBtnInIframe);
    await page.waitForTimeout(1000);
});

await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

await test.step(`${stepsID()} | And: User clicks the "Add Round" button`, async () => {
    await helper.clickHelper(triviaPage.addRoundBtn);
});

await test.step(`${stepsID()} | And: User enters a name for the new round`, async () => {
    await helper.inputTextHelper(triviaPage.roundNameInputField, randomNumber.toString());
});

await test.step(`${stepsID()} | And: User clicks the add button to confirm the new round`, async () => {
    await helper.clickHelper(triviaPage.addBtn);
});

// 01 | When: User uploads the JSON file for questions
await test.step(`${stepsID()} | When: User uploads the JSON file for questions`, async () => {
    await helper.uploadJSOnHelper(data.getQuestions[0]);
});

// 02 | And: User clicks the Import Questions button
await test.step(`${stepsID()} | And: User clicks the Import Questions button`, async () => {
    await helper.clickHelper(triviaPage.imporQuestionsBtn);
});

// 03 | And: User confirms the import by clicking OK in the iframe
await test.step(`${stepsID()} | And: User confirms the import by clicking OK in the iframe`, async () => {
    await helper.clickHelper(triviaPage.okBtnInIframe);
});


await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
    await helper.waitForTimeout(1000);
    await triviaPage.ifVidoeServiceModalOpen();
});

await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

await test.step(`${stepsID()} | Then: User verifies successful navigation to the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});
    



})

test(generateTestID()+` | Instance | Validate Instance Settings Functionality`, {tag: ["@Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
        await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
        await page.waitForLoadState("networkidle");
    });
    
    await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
        await helper.clickHelper(triviaPage.controlSection.nth(0));
    });
    
    await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {  
        await helper.clickHelper(triviaPage.designSection.last());
        await triviaPage.stopAllGames();
    });
    
    await test.step(`${stepsID()} | When: User clicks the 3D rotation button for the last instance`, async () => {
        await helper.clickHelper(triviaPage.instanceThreeDrotBtn.last());
    });
    
    await test.step(`${stepsID()} | And: User clicks the settings button for the last instance`, async () => {
        await helper.clickHelper(triviaPage.instanceSettingBtn.last());
    });
    
    await test.step(`${stepsID()} | And: User clicks the Sign-Up preset listbox`, async () => {
        await helper.clickHelper(triviaPage.signUpPresetListBox);
    });
    
    await test.step(`${stepsID()} | And: User selects the last item in the Sign-Up preset list`, async () => {
        await helper.clickHelper(triviaPage.presetSelectIteam.last());
    });
    
    await test.step(`${stepsID()} | And: User clicks the Menu preset listbox`, async () => {
        await helper.clickHelper(triviaPage.menuPresetLisBox);
    });
    
    await test.step(`${stepsID()} | And: User selects the last item in the Menu preset list`, async () => {
        await helper.clickHelper(triviaPage.presetSelectIteam.last());
    });
    
    await test.step(`${stepsID()} | And: User clicks the save button in the iframe`, async () => {
        await helper.clickHelper(triviaPage.saveBtnInIframe);
        await page.waitForTimeout(1000);
    });
    
    await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
        await helper.clickHelper(triviaPage.qrCodeBtn.last());
    });
    
    await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
        await helper.clickHelper(triviaPage.copyURLBtn);
    });
    
    let URL = '';
    await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
        URL = clipboard.readSync();
        await helper.goTo(URL);
    });
    
    await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
        await helper.clickHelper(triviaPage.gamplayPlusBtn);
    });
    






})


//Azman
test(generateTestID()+` | Design | Design Settings | Validate "First Place Only" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: User toggles the Leaderboard setting`, async () => {
    await helper.clickHelper(triviaPage.leaderBoardSettingToggel.nth(0));
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "First Place Only" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the leaderboard to display one user`, async () => {
    await helper.waitForLocator(triviaPage.leaderboardOneUser, "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the leaderboard design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.leaderboardOneUser.nth(0), "1");    
    
});





})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "First Place Only" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the leaderboard design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.mainbaordOneUser.nth(0), "1");    
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Top Three" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: User toggles the Leaderboard setting`, async () => {
    await helper.clickHelper(triviaPage.leaderBoardSettingToggel.nth(1));
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "Top Three" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the leaderboard to display one user`, async () => {
    await helper.waitForLocator(triviaPage.leaderboardOneUser, "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the leaderboard design `, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.gamePlayTopThree.last(), "3"); 
    
});





})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "Top Three" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: verify mainabord`, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.mainboardTopThree.last(), "3");     
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Top Five" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: User toggles the Leaderboard setting`, async () => {
    await helper.clickHelper(triviaPage.leaderBoardSettingToggel.nth(2));
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "Top Five" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the leaderboard to display one user`, async () => {
    await helper.waitForLocator(triviaPage.leaderboardOneUser, "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the leaderboard design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.gamePlayTopFive.nth(0), "5");
});





})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "Top Five" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User verif mainabord`, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.mainboardTopFive.last(), "5");    
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Top Five" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: User toggles the Leaderboard setting`, async () => {
    await helper.clickHelper(triviaPage.leaderBoardSettingToggel.nth(3));
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "Top Ten" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the leaderboard to display one user`, async () => {
    await helper.waitForLocator(triviaPage.leaderboardOneUser, "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the leaderboard design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.gamePlayTopTen.nth(0), "10");
});





})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "Top Ten" users shown on Leaderboard`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the leaderboard design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.assertTextHelper(triviaPage.mainboardTopTen.last(), "10");    
});





})

test(generateTestID()+` | Design | Design Settings | Validate "Rectangle" Answer Shape`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: select rectangle button`, async () => {
    await helper.clickHelper(triviaPage.rectangleBtn);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "Rectangle" Answer Shape`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);    
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the answer shape to display one user`, async () => {
    await helper.waitForLocator(triviaPage.rectangleAnswerShapeGameplay.nth(0), "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the Answer Shape design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.expectToBeVisible(triviaPage.rectangleAnswerShapeGameplay.nth(0));   
});

})
test(generateTestID()+` Bug:22598 | Design | Design Settings | Mainboard | Validate "Rectangle" Answer Shape`, {tag: ["@Bug @Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the Answer Shape design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareElementScreenshot(triviaPage.mainbaordAnswerShape, data.imageNameForDesign[1], 0.1);   
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Circle" Answer Shape`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: select circle button`, async () => {
    await helper.clickHelper(triviaPage.circleBtn);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "Circle" Answer Shape`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);    
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the answer shape to display one user`, async () => {
    await helper.waitForLocator(triviaPage.circleAnswerShapeGameplay.nth(0), "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the Answer Shape design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.expectToBeVisible(triviaPage.circleAnswerShapeGameplay.nth(0));   
});

})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "Circle" Answer Shape`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the Answer Shape design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareElementScreenshot(triviaPage.mainbaordAnswerShape, data.imageNameForDesign[0], 0.1);   
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Answer Shadow" successfully enable`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable answer shadow`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(0), true);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "Answer Shadow" successfully reflected on answer text`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);    
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the answer shadow to display one user`, async () => {
    await helper.waitForLocator(triviaPage.answerShadowGameplay.nth(0), "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the Answer Shape design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.expectToBeVisible(triviaPage.answerShadowGameplay.nth(0)); 
    
});

})
test(generateTestID()+` | Bug:22384 | Design | Design Settings | Mainboard | Validate "Answer Shadow" successfully reflected on answer text`, {tag: ["@Bug @Design @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the Answer shadow design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareElementScreenshot(triviaPage.mainboardAnswerShadow.nth(0), data.imageNameForDesign[2], 0.1);   
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Stage Fade Transition" successfully enable`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable Stage Fade Transition`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(1), true);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "Stage Fade Transition" successfully reflected on answer text`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User inputs question second`, async () => {
    await helper.dblclickHelper(triviaPage.questionSecondInputField);
    await triviaPage.questionSecondInputField.press('Backspace');
    // await helper.inputTextHelper(triviaPage.questionSecondInputField, "0");
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home screen`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.last(), "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the Stage Fade Transition design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareElementScreenshot(triviaPage.gamePlayHomeScreen.last(), data.imageNameForDesign[3], 0.1);
    
});

})


test(generateTestID()+` | Design | Design Settings | Validate "XPression mode" successfully enable`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable XPression mode`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(2), true);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Gameplay | Validate "XPression mode" successfully reflected`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User inputs question second`, async () => {
    await helper.dblclickHelper(triviaPage.questionSecondInputField);
    await triviaPage.questionSecondInputField.press('Backspace');
    // await helper.inputTextHelper(triviaPage.questionSecondInputField, "0");
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home screen`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.last(), "visible");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the XPression mode design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareElementScreenshot(triviaPage.gamePlayHomeScreen.last(), data.imageNameForDesign[4], 0.1);
    
});

})

test(generateTestID()+` | Design | Design Settings | Validate "QR code" successfully enable`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "QR code" successfully reflected`, {tag: ["@Design @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User start the game`, async () => {
    await triviaPage.startGame();
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: verify the qr code logo in mainabord`, async () => {
    await helper.waitForTimeout(1000);
    await helper.expectToBeVisible(triviaPage.mainboardQRCodeLogo);   
});





})

test(generateTestID()+` | Design | Design Settings | Validate "Countdown type liner" successfully enable`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: user clicks on countdown type liner`, async () => {
    await helper.clickHelper(triviaPage.countdownTypeLiner);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "Countdown type liner" successfully reflected`, {tag: ["@Design @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User start the game`, async () => {
    await triviaPage.startGame();
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: verify the countdown type liner`, async () => {
    await helper.waitForTimeout(1000);
    await helper.expectToBeVisible(triviaPage.mainboardCountdownTypeLiner);   
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Countdown type circuler" successfully enable`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: user clicks on countdown type circuler`, async () => {
    await helper.clickHelper(triviaPage.countdownTypeCirculer);
});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Design | Design Settings | Mainboard | Validate "Countdown type circuler" successfully reflected`, {tag: ["@Design @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User start the game`, async () => {
    await triviaPage.startGame();
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: verify the countdown type circuler`, async () => {
    await helper.waitForTimeout(1000);
    await helper.expectToBeVisible(triviaPage.mainbaordTimeProgressbar);   
});





})


test(generateTestID()+` | Design | Design Settings | Validate "QR Code Width/Height" successfully inputs`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: user updates the number for qr code size`, async () => {
    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(0), "10");
    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(1), "10");

});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Bug:22458 | Design | Design Settings | Mainboard | Validate that the 'QR Code Width/Height' is successfully reflected.`, {tag: ["@Bug @Design @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User start the game`, async () => {
    await triviaPage.startGame();
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: Validate that the 'QR Code Width/Height'`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareElementScreenshot(triviaPage.mainboardQRCodeLogo, data.imageNameForDesign[5], 0.1);  
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Mainboard Alignment Top" successfully`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: select mainboard alignment top`, async () => {
    await helper.clickHelper(triviaPage.mainboardAlignmentTop);

});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Bug:22599 | Design | Design Settings | Mainboard | Validate "Mainboard Alignment Top" successfully reflected.`, {tag: ["@Bug @Design @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => { 

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | Then: User iputs countdown text`, async () => {
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "0");
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User start the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage one time`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: Validate that the 'mainbaord top alignment'`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareFullPageScreenshot(page, data.imageNameForDesign[6], 0.1);
});





})

test(generateTestID()+` | Design | Design Settings | Validate "Mainboard Alignment Bottom" successfully`, {tag: ["@Bug @Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: select mainboard alignment bottom`, async () => {
    await helper.clickHelper(triviaPage.mainboardAlignmentBottom);

});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Bug:22599 | Mainboard | Validate "Mainboard Alignment Bottom" successfully reflected.`, {tag: ["@Bug @Design @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => { 

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | Then: User iputs countdown text`, async () => {
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "0");
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User start the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage one time`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: Validate that the 'mainbaord Bottom alignment'`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareFullPageScreenshot(page, data.imageNameForDesign[7], 0.1);
});





})


test(generateTestID()+` | Design | Design Settings | Validate "Feed JSON" Option Selection under Design Settings`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: Enable QR Code Logo
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 07 | And: User selects the Feed JSON option
await test.step(`${stepsID()} | And: User selects the Feed JSON option`, async () => {
    await helper.clickHelper(triviaPage.feedJSONBtn);
});

// 08 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 09 | And: User clicks the 3D rotation button for the last instance
await test.step(`${stepsID()} | And: User clicks the 3D rotation button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.instanceThreeDrotBtn.last());
});

// 10 | Then: User verifies the opened page contains JSON in the URL
await test.step(`${stepsID()} | Then: User verifies the opened page contains JSON in the URL`, async () => {
    const newPage = await helper.handleNewPageAfterClick(context, page, triviaPage.threeDotXMLBtn.nth(-2));
    await helper.verifyTextInURL(newPage, "json");
});








})
test(generateTestID()+` | Design | Design Settings | Validate "Feed XML" Option Selection under Design Settings`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: Enable QR Code Logo
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 07 | And: User selects the Feed JSON option
await test.step(`${stepsID()} | And: User selects the Feed XML option`, async () => {
    await helper.clickHelper(triviaPage.feedXMLBtn);
});

// 08 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 09 | And: User clicks the 3D rotation button for the last instance
await test.step(`${stepsID()} | And: User clicks the 3D rotation button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.instanceThreeDrotBtn.last());
});

// 10 | Then: User verifies the opened page contains JSON in the URL
await test.step(`${stepsID()} | Then: User verifies the opened page contains JSON in the URL`, async () => {
    const newPage = await helper.handleNewPageAfterClick(context, page, triviaPage.threeDotXMLBtn.nth(-2));
    await helper.verifyTextInURL(newPage, "xml");
});








})

test(generateTestID()+` | Design | Design Settings | Validate "Mainbaord Margin" inputs option under Design Settings`, {tag: ["@Design @Settings, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: inputs mainabord margin`, async () => {
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(2));
    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(2), "10");
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(3));

    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(3), "10");
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(4));

    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(4), "10");
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(5));

    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(5), "10");


});

// 07 | And: User re-expands the design settings
await test.step(`${stepsID()} | And: User re-expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})
test(generateTestID()+` | Mainboard | Validate "Mainbaord Margin" successfully reflected.`, {tag: ["@Design @Settings  @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => { 

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | Then: User iputs countdown text`, async () => {
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "0");
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User start the game`, async () => {
    await triviaPage.stopeGameIfStarted();
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: Validate that the 'mainbaord margin'`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareFullPageScreenshot(page, data.imageNameForDesign[8], 0.1);
});

// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Disable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), false);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: inputs mainabord margin`, async () => {
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(2));
    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(2), "0");
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(3));

    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(3), "0");
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(4));

    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(4), "0");
    await helper.dblclickHelper(triviaPage.designSettingNumberInputField.nth(5));

    await helper.inputTextHelper(triviaPage.designSettingNumberInputField.nth(5), "0");


});



})



test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Mobile Background" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the background color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(0));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Mobile Background" Colors are Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the mobile background design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.compareElementScreenshot(triviaPage.gamePlayHomeScreen.last(), data.imageNameForDesign[9]);
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Mobile Background" Colors are Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the background color design screenshot`, async () => {
    await helper.waitForTimeout(1000);
    await helper.expectToBeVisible(triviaPage.mainboardBackgroundColor);   
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Question Background Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(1));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Question Background Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the countdown background design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.questionBackgroundColor.last(), data.imageNameForDesign[10]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Question Background Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the question background color design screenshot`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareElementScreenshot(triviaPage.mainboardCountdownBackgroundColor, data.imageNameForDesign[11]); 
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Answer Background Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(2));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Answeer Background Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the answer background design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gameplayWrongAnswerText.nth(0), data.imageNameForDesign[12]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Answer Background Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the answer background color design screenshot`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordAnswerWrongText.nth(0), data.imageNameForDesign[13]); 
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Button Fill Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(3));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Button Fill Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks on ondemand button`, async () => {
    await helper.clickHelper(triviaPage.gameModeOnDemandBtn);
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the gameplay start design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayStartBtn.nth(0), data.imageNameForDesign[14]);
    
    
});


// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User stops the game if it is running again`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User click on the manual game mode btn`, async () => {
    await helper.clickHelper(triviaPage.gameModeManualBtn);
});

})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Timer Animation Fill Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});


// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), true);
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(4));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});


// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Mainboard | Verify "Timer Animation Fill Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
    await triviaPage.stopeGameIfStarted();
});

await test.step(`${stepsID()} | And: User inputs countdown number`, async () => {
    await helper.clickHelper(triviaPage.numberInputField.nth(0));
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "60");
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {    
    await triviaPage.startGame();
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User verify color reflaction`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.expectToBeVisible(triviaPage.mainboardCountdownProgressbar.nth(0)); 
});





})

test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Tile Background Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

await test.step(`${stepsID()} | And: User inputs countdown number`, async () => {
    await helper.clickHelper(triviaPage.numberInputField.nth(0));
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "0");
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(5));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});


// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Tile Background Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the answer background design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gameplayCountdownNumber0.nth(0), data.imageNameForDesign[16]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Tile Background Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
    await triviaPage.stopeGameIfStarted();
});

await test.step(`${stepsID()} | And: User inputs countdown number`, async () => {
    await helper.clickHelper(triviaPage.numberInputField.nth(0));
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "0");
});

// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {    
    await triviaPage.startGame();
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User verify color reflaction`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordTimeProgressbar.nth(0), data.imageNameForDesign[15]); 
});


// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});


// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});

// 06 | And: User toggles the Leaderboard setting
await test.step(`${stepsID()} | And: Enable QR Code Logo`, async () => {
    await helper.handleCheckbox(triviaPage.checkBox.nth(3), false);
});

// 05 | When: User expands the design settings
await test.step(`${stepsID()} | When: User expands the design settings`, async () => {
    await helper.clickHelper(triviaPage.designSettingsExpandBtn);
});




})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Leaderboard Background Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

await test.step(`${stepsID()} | And: User inputs countdown number`, async () => {
    await helper.clickHelper(triviaPage.numberInputField.nth(0));
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "0");
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(6));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});


// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Leaderboard Background Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);


});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the answer background design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.leaderboardOneUser.nth(0), data.imageNameForDesign[17]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Leaderboard Background Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User verify color reflaction`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordOneUser.nth(0), data.imageNameForDesign[18]); 
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Point-Bubble Fill Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

await test.step(`${stepsID()} | And: User inputs countdown number`, async () => {
    await helper.clickHelper(triviaPage.numberInputField.nth(0));
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "0");
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(7));
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});


// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test.skip(generateTestID()+` | Design | Gameplay | Verify "Point-Bubble Fill Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);


});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the answer background design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.leaderboardOneUser.nth(0), data.imageNameForDesign[17]);
    
    
});

})
test.skip(generateTestID()+` | Design | Mainboard | Verify "Point-Bubble Fill Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User verify color reflaction`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordOneUser.nth(0), data.imageNameForDesign[18]); 
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Question Frame Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(8));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Question Frame Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayHomeScreen.nth(0), data.imageNameForDesign[19]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Question Frame Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareFullPageScreenshot(page, data.imageNameForDesign[20]); 
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Answer Frame Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(9));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Answer Frame Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage two times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayHomeScreen.nth(0), data.imageNameForDesign[21]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Answer Frame Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareFullPageScreenshot(page, data.imageNameForDesign[22]); 
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Tile Frame Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(10));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Tile Frame Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayHomeScreen.nth(0), data.imageNameForDesign[23]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Tile Frame Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareFullPageScreenshot(page, data.imageNameForDesign[24]); 
});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Leaderboard Frame Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(11));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Leaderboard Frame Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});


// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);


});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.waitForLocator(triviaPage.gamePlayLeaderboardFrame.nth(0), "visible");
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Leaderboard Frame Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.waitForLocator(triviaPage.mainbaordOneUser.nth(0), "visible");

});





})

test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Point-Bubble Frame Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(12));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Point-Bubble Frame Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});


// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);


});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    // await helper.waitForTimeout(1000);   
    // await helper.waitForLocator(triviaPage.gamePlayLeaderboardFrame.nth(0), "visible");
    
    
});

})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Selected Answer Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(13));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Selected Answer Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {    
    await helper.inputTextHelper(triviaPage.numberInputField.nth(5), "60");
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage two times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.clickHelper(triviaPage.gamePlayQuestionsList.nth(0));
    await helper.waitForTimeout(1000);  
    await helper.compareElementScreenshot(triviaPage.gamePlayQuestionsList.nth(0), data.imageNameForDesign[25]);
    
    
});

})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Correct Answer Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(14));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Correct Answer Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "60");
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage two times`, async () => {
    
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);    
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});




let url = await clipboard.readSync();
let newPage : gamePlayPage;
await test.step('12 | When: User opens a new browser and navigates to the copied URL', async () => {
    const newContext = await context.newPage();
    newPage = new gamePlayPage(newContext);
    await newPage.goTo(url);
    await helper.waitForButtonToBeEnabled(newPage.gamplayPlusBtn);
    await helper.clickHelper(newPage.gamplayPlusBtn);
    await helper.clickHelper(newPage.gamplayPlusBtn);
    await page.waitForTimeout(4000);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(newPage.gamplayPlusBtn);
    await helper.clickHelper(newPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(newPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.clickHelper(newPage.gamePlayQuestionsList.nth(0));
    
    
    
});

await test.step(`${stepsID()} | And: User moves to the next stage two times`, async () => {
    await helper.clickHelper(triviaPage.qrCodeModalCloseBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);  
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {   
    await helper.waitForTimeout(1000);  
    await helper.compareElementScreenshot(newPage.gamePlayQuestionsList.nth(0), data.imageNameForDesign[26]);
    
    
});

})
test(generateTestID()+` | Design | Mainboard | Verify "Correct Answer Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(4000);
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(1000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordCorreectAnswer.nth(0), data.imageNameForDesign[27]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Incorrect Answer Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(15));
});

// 08 | And: User selects the solid color type
// Opens the color type list box and selects the solid color option.
await test.step(`${stepsID()} | And: User selects the solid color type`, async () => {
    await helper.clickHelper(triviaPage.colorTypeListBox);
    await helper.clickHelper(triviaPage.solidColorType);
});

// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Incorrect Answer Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.inputTextHelper(triviaPage.numberInputField.nth(0), "60");
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage two times`, async () => {
    
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);    
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});




let url = await clipboard.readSync();
let newPage : gamePlayPage;
await test.step('12 | When: User opens a new browser and navigates to the copied URL', async () => {
    const newContext = await context.newPage();
    newPage = new gamePlayPage(newContext);
    await newPage.goTo(url);
    await helper.waitForButtonToBeEnabled(newPage.gamplayPlusBtn);    
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(newPage.gamplayPlusBtn);
    await helper.clickHelper(newPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(newPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.clickHelper(newPage.gamePlayQuestionsList.nth(1));
    
    
    
});

await test.step(`${stepsID()} | And: User moves to the next stage two times`, async () => {
    await helper.clickHelper(triviaPage.qrCodeModalCloseBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);  
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {   
    await helper.waitForTimeout(3000);  
    await helper.compareElementScreenshot(newPage.gamePlayQuestionsList.nth(1), data.imageNameForDesign[28]);
    
    
});

})
test(generateTestID()+` Bug: | Design | Mainboard | Verify "Incorrect Answer Color" Accurately Reflected`, {tag: ["@Bug @Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordWrongAnswer.nth(0), data.imageNameForDesign[29]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "General/Button Text Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(16));
});


// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "General/Button Text Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});


// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayGeneralText.nth(0), data.imageNameForDesign[30]);
    
    
});



})
test(generateTestID()+` Bug: | Design | Mainboard | Verify "General/Button Text Color" Accurately Reflected`, {tag: ["@Bug @Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordGenaralText.nth(0), data.imageNameForDesign[31]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Question Text Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(17));
});


// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Question Text Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage one time`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayQuestionText.nth(0), data.imageNameForDesign[32]);
    
    
});



})
test(generateTestID()+` | Design | Mainboard | Verify "Question Text Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordQuestionText.nth(0), data.imageNameForDesign[33]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Answer Text Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(18));
});


// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Answer Text Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage one time`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayAnswerText.nth(0), data.imageNameForDesign[34]);
    
    
});



})
test(generateTestID()+` | Design | Mainboard | Verify "Answer Text Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordCorreectAnswer.nth(0), data.imageNameForDesign[35]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Leaderboard Text Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(19));
});


// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Leaderboard Text Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

    

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.leaderboardText.nth(0), data.imageNameForDesign[36]);
    
    
});



})
test(generateTestID()+` | Design | Mainboard | Verify "Leaderboard Text Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordOneUser.nth(0), data.imageNameForDesign[37]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Point-Bubble Text Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(20));
});


// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test.skip(generateTestID()+` | Design | Gameplay | Verify "Point-Bubble Text Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

    

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.leaderboardText.nth(0), data.imageNameForDesign[36]);
    
    
});



})
test.skip(generateTestID()+` | Design | Mainboard | Verify "Point-Bubble Text Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordOneUser.nth(0), data.imageNameForDesign[37]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "Leaderboard Accent Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(21));
});


// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "Leaderboard Accent Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

    

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.gamePlayLeaderboardAccent.nth(0), data.imageNameForDesign[38]);
    
    
});



})
test(generateTestID()+` | Design | Mainboard | Verify "Leaderboard Accent Color" Accurately Reflected`, {tag: ["@Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordLeaderboardAccent.nth(0), data.imageNameForDesign[39]);

});





})


test(generateTestID()+` | Design | Colors | Validate Input Functionality for "User's Top 10 Rank Color" in Design Colors`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }
// 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await page.goto(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await page.waitForLoadState("networkidle");
});

// 02 | And: User stops the game if it is running
await test.step(`${stepsID()} | And: User stops the game if it is running`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 03 | When: User closes the home popup
await test.step(`${stepsID()} | When: User closes the home popup`, async () => {
    await triviaPage.stopeGameIfStarted();
});

// 04 | And: User stops the game if it is running again
await test.step(`${stepsID()} | And: User stops the game if it is running again`, async () => {
    await helper.clickHelper(triviaPage.designSection.last());
});

// 05 | And: User expands the Colors Section
// Expands the Colors section within the design settings.
await test.step(`${stepsID()} | And: User expands the Colors Section`, async () => {
    await helper.clickHelper(triviaPage.colorsExpandBtn);
    await helper.clickHelper(triviaPage.clearAllColors);
});

// 06 | And: User opens the background color picker
// Clicks the background color picker to select or configure a color.
await test.step(`${stepsID()} | And: User opens the color picker`, async () => {
    await helper.clickHelper(triviaPage.colorFields.nth(22));
});


// 07 | And: User adds a new color switch and deletes the first color
// Adds a new color switch option, deletes the first color switch, and then adds another color switch.
await test.step(`${stepsID()} | And: User adds a new color switch and deletes the first color`, async () => {
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
    await helper.clickHelper(triviaPage.colorSwitchDeleteBtn.nth(0));
    await helper.clickHelper(triviaPage.colorSwitchPlusBtn);
});



// 09 | And: User inputs RGB and hex values for background color
// Sets the RGB and hex values for the background color.
await test.step(`${stepsID()} | And: User inputs RGB and hex values for background color`, async () => {
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(0), data.backgroundColor[0]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(1), data.backgroundColor[1]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(2), data.backgroundColor[2]);
    await helper.inputTextHelper(triviaPage.rgbColorInputField.nth(3), data.backgroundColor[3]);
    await helper.waitForTimeout(500);
    await helper.inputTextHelper(triviaPage.colorCodeInputField.nth(0), data.backgroundColor[4]);
    await helper.clickHelper(triviaPage.colorPickerText);
});

// 10 | And: User saves the selected color
// Clicks the save button to apply the selected background color.
await test.step(`${stepsID()} | And: User saves the selected color`, async () => {
    await helper.clickHelper(triviaPage.colorPickerSaveBtn);
    await helper.waitForTimeout(1000);
});




})
test(generateTestID()+` | Design | Gameplay | Verify "User's Top 10 Rank Color" Accurately Reflected`, {tag: ["@Design @Colors, @Regression, @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});

// 02 | When: User closes the home popup and stops any running games
await test.step(`${stepsID()} | When: User closes the home popup and stops any running games`, async () => {
    await triviaPage.stopeGameIfStarted();    
});

// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});


// 04 | And: User starts the game
await test.step(`${stepsID()} | And: User starts the game`, async () => {
    await triviaPage.startGame();
});

// 05 | And: User moves to the next stage three times
await test.step(`${stepsID()} | And: User moves to the next stage three times`, async () => {
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);
    await helper.clickHelper(triviaPage.moveRoNextStageBtn);

    

});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.qrCodeBtn.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
});

// 09 | Then: User verifies that they successfully land on the gameplay home screen
await test.step(`${stepsID()} | Then: User verifies that they successfully land on the gameplay home screen`, async () => {
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
    await helper.clickHelper(triviaPage.gamplayPlusBtn);
});

// 10 | And: User waits for the leaderboard to display one user
await test.step(`${stepsID()} | And: User waits for the gameplay home to display`, async () => {
    await helper.waitForLocator(triviaPage.gamePlayHomeScreen.nth(0), "attached");
});

// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the design screenshot`, async () => {
    await helper.waitForTimeout(1000);   
    await helper.compareElementScreenshot(triviaPage.leaderboardOneUser.nth(0), data.imageNameForDesign[40]);
    
    
});



})
test(generateTestID()+` Bug: | Design | Mainboard | Verify "User's Top 10 Rank Color" Accurately Reflected`, {tag: ["@Bug @Colors @Settings @Regression @Smoke"]}, async ({ triviaPage, loginPage, page, context }, testInfo) => {

    if (context.pages().length > 0) {
        await context.pages()[0].close();
    }
    const helper = new webHelper(page, 'keyPageValue');
    let testNumber = 1;
    // Define a function to generate the test name with the current test number
    function stepsID() {
        return `Trivia-${testNumber++}`;
    }

    // 01 | Given: User navigates to the Trivia page
await test.step(`${stepsID()} | Given: User navigates to the Trivia page`, async () => {
    await helper.goTo(ENV.BASE_URL + ENV.TRIVIA_ROUTE);
    await helper.waitForButtonToBeEnabled(triviaPage.gameStartBtn.nth(0));
});


// 03 | And: User clicks the control section for the last instance
await test.step(`${stepsID()} | And: User clicks the control section for the last instance`, async () => {
    await helper.clickHelper(triviaPage.controlSection.last());
});

// 06 | Then: User clicks the QR code button for the last instance
await test.step(`${stepsID()} | Then: User clicks the QR code button for the last instance`, async () => {
    await helper.clickHelper(triviaPage.mainbordUrlIcon.last());
});

// 07 | When: User clicks the Copy URL button
await test.step(`${stepsID()} | When: User clicks the Copy URL button`, async () => {
    await helper.clickHelper(triviaPage.copyURLBtn);
});

let URL = '';
// 08 | And: User copies the URL from the system clipboard and navigates to it
await test.step(`${stepsID()} | And: User copies the URL from the system clipboard and navigates to it`, async () => {
    URL = clipboard.readSync();
    await helper.goTo(URL);
    await helper.waitForTimeout(1000);
});
await page.reload();
// 11 | And: User compares the leaderboard design screenshot
await test.step(`${stepsID()} | And: User compares the color design screenshot`, async () => {
    await helper.waitForTimeout(3000);    
    await helper.compareElementScreenshot(triviaPage.mainbaordOneUser.nth(0), data.imageNameForDesign[41]);

});





})