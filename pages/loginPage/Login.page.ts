import { Page } from '@playwright/test';
import { Button } from '../../components/Button';
import { InputPassword } from '../../components/InputPassword';
import { InputText } from '../../components/InputText';
import { webHelper } from "@helper/webHelper";
import ENV from '@utils/env/env';

export class LoginPage extends webHelper {
    readonly userName: InputText;
    readonly password: InputPassword;
    readonly login: Button;
    readonly loginButton: any
    public BASE_URL = ENV.BASE_URL;

    constructor(page: Page) {
        //We need the page, and a friendly name for the page to be used in reports
        super(page, 'Login');
        const noByRole = false;
        this.loginButton= "//button[text()='Login']"
        this.userName = new InputText(this.page, this.annotationHelper, `(//label[text()='Id']/following::input)[1]`, noByRole);
        this.password = new InputPassword(this.page, this.annotationHelper, `input[type='password']`, noByRole);
        this.login = new Button(this.page, this.annotationHelper, 'Login');
        
    }

        // Locators for various elements on the page. Using a single object for organization.
        public loginPageElements = {        
            frame: `iframe`, // Locator for an iframe on the page.
            yourLocator: `#yourLocator`, // Specific locator for a key element within the iframe.
            userNameInputField: `#user-name`, // Username input field.
            passwordInputField: `#password`, // Password input field.
            loginBtn: `//button[text()='Login']`, // Login button.
            deleteBtn: `//button[text()='Delete']`
        };
    

    /**
     * Login with the user name and password
     * @param userName User Name
     * @param password Password
     * We suggest don't store passwords in the code
     */
    public async loginWithUser(userName: string, password: string) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        // await this.login.click();        
        this.clickHelperForString(this.loginButton)   
           
    }

}

