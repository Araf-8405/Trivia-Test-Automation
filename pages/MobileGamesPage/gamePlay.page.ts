// Import required classes and types from Playwright
import { webHelper } from "@helper/webHelper";
import { Page, FrameLocator, expect } from "@playwright/test";
import { InputText } from "components/InputText";


// Define a class 'fanSeePage' to encapsulate operations related to a specific page.
export class gamePlayPage extends webHelper {
   

    // Constructor to initialize the page object with a Playwright Page.
    // The WebHelper is also instantiated with this page.
    constructor(page: Page) {
        //We need the page, and a friendly name for the page to be used in reports
        super(page, 'GamePlay Page');
        const noByRole = false;
        
        this.gamplayPlusBtn = this.page.frameLocator("iframe").locator(`[data-testid="AddIcon"]`);
        
        
        


        
    }

    private formatExpectedTime(initialTime: string, elapsedTime: number): string {
        // Implement the logic to format the expected time based on your timer format
        // This is a placeholder implementation
        const initialSeconds = parseInt(initialTime, 10);
        const expectedSeconds = initialSeconds - elapsedTime;
        return expectedSeconds.toString();
    }
    
    readonly qrCodeBtn: any;
    readonly gamplayPlusBtn = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`[data-testid="AddIcon"]`);
    readonly mobileLiveIcon = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`[fill="none"]`);
    readonly gamePlayFullScreen = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`(//div[@class='screen']//div)[1]`);
    readonly redirectWebsite = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`.login_logo`);
    readonly redirectVideoPlayBtn = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`[title="Play"]`);
    readonly redirectOkBtn = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//*[text()='Ok']`);
    readonly userNameModal = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`.MuiTypography-body1`);
    readonly cameraFlipBtn = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//div[@class='MuiBox-root css-1fde1zm']`);
    readonly countdownText = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//h4[text()='Waiting...']/following-sibling::div`);
    readonly backgroundColor = this.page.locator(`//div[@id='app']/div[1]/div[1]/div[1]`);
    readonly bannedUserAccessDeniedOkBtn = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//button[@aria-label='confirmation-modal-btn-confirm']`);
    readonly bannedUserAccessDeniedText = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//p[contains(@class,'MuiTypography-root MuiTypography-body1')]`);
    

    // Azmans Locators
    readonly leaderboardOneUser = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`(//td[contains(@class,'MuiTableCell-root MuiTableCell-body')])[1]`);
    readonly gamePlayQuestionsList = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[answershape="circle"]`);
    readonly gamePlayHomeScreen = this.page.frameLocator("iframe").frameLocator("iframe").locator(`#app`);


    //Mamuns Locators
    readonly buttonName = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//p[contains(@class,'MuiTypography-root MuiTypography-body1')]`);
    readonly countdownTimeSection = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`.css-5bp0gr`);
    readonly timerSelector = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//div[@class='MuiBox-root css-1nqpq9l']`).innerText();
   




    public async verifyTimerTextTime() {
        let initialTime = this.timerSelector
        try {
            console.log('Initial time:', initialTime);

            // Define the interval to check the timer (e.g., every second)
            const intervalInSeconds = 1;
                        
            // Loop for a few seconds to verify the timer decreases correctly
            for (let i = 0; i < 5; i++) {
            const expectedTime = this.formatExpectedTime(await initialTime, intervalInSeconds * (i + 1)); // Implement this function based on your timer format
            await this.page.waitForTimeout(intervalInSeconds * 1000);

            // Capture the new timer value
            const newTime = this.timerSelector;
            console.log(`Time after ${i + 1} second(s):`, newTime);

            // Assert the timer has decreased as expected
            expect(newTime).toBe(expectedTime);
    }

        } catch (error) {
            // console.log('Error:', error);
        }



    }




































}
