import { LoginPage } from "@pages/Login.page";
// import { test as baseTest } from "@playwright/test";
// import { test as baseTest } from "tests/base/base"
import { test as baseTest } from "tests/fixtures/global-Setup"
import { webHelper } from "@helper/webHelper";
import testData from "@testData/testData"
import { triviaPage } from "pages/trivaPage/trivia.page";
import { gamePlayPage } from "@pages/gamePlay.page";

const test = baseTest.extend<{
    loginPage: LoginPage;
    WebHelper: webHelper;
    testData: testData;
    triviaPage: triviaPage;
    gamePlayPage: gamePlayPage;
    webHelper: webHelper;


}>({
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    triviaPage: async ({ page }, use) => {
        await use(new triviaPage(page));
    },

    gamePlayPage: async ({ page }, use) => {
        await use(new gamePlayPage((page)))
    },




})
export default test;
export const expect = test.expect;

