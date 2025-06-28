// Import required classes and types from Playwright
import { webHelper } from "@helper/webHelper";
import { Page, FrameLocator } from "@playwright/test";
import { InputText } from "components/InputText";


// Define a class 'triviaPage' to encapsulate operations related to a specific page.
export class triviaPage extends webHelper {


    // Constructor to initialize the page object with a Playwright Page.
    // The WebHelper is also instantiated with this page.
    constructor(page: Page) {
        //We need the page, and a friendly name for the page to be used in reports
        super(page, 'Trivia Page');
        const noByRole = false;
        this.addNewPresetPlusBtn = this.page.locator(this.triviaPageElements.addNewPresetBtn);
        this.presetInputField = this.page.locator(this.triviaPageElements.presetInputField);
        this.saveBtn = this.page.locator(this.triviaPageElements.saveBtn);
        this.alignmentBottomBtn = this.page.locator(this.triviaPageElements.alignmentBottomBtn);
        this.signUpSection = this.page.locator(this.triviaPageElements.signUpSection);
        this.globalPrizingSection = this.page.locator(this.triviaPageElements.globalPrizingSection);
        this.catagoryListBox = this.page.locator(this.triviaPageElements.catagoryListBox);
        this.noneSelectBtn = this.page.locator(this.triviaPageElements.noneSelectBtn);
        this.addNewPrizingBtn = this.page.locator(this.triviaPageElements.addNewPrizingBtn);
        this.inputPrizeName = this.page.locator(this.triviaPageElements.inputPrizeName);
        this.simpleImageUploadBtn = this.page.locator(this.triviaPageElements.simpleImageUploadBtn);
        this.imageChoseBtn = this.page.locator(this.triviaPageElements.imageChoseBtn);
        this.imageEditorSaveBtn = this.page.locator(this.triviaPageElements.imageEditorSaveBtn);
        this.sessionOffPopupMassage = this.page.frameLocator("iframe").locator(this.triviaPageElements.sessionOffPopupMassage);
        this.addNewInstancePlusBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.addNewInstancePlusBtn);
        this.saveBtnInIframe = this.page.frameLocator("iframe").locator("//*[text()='Save']");
        this.marketingBannerSectioon = this.page.locator(this.triviaPageElements.marketingBannerSectioon);
        this.instanceNameInputField = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceNameInputField);
        this.homePopupRemoveBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.instancesTitleText);
        this.mimimumCharacterErrorMassage = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceNameFieldMiminumCharacterErrorMassage);
        this.instanceThreeDrotBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceThreeDrotBtn);
        this.moreOptionBtnForInstances = this.page.frameLocator("iframe").locator(this.triviaPageElements.moreOptionBtnForInstances);
        this.instancesRenameInputField = this.page.frameLocator("iframe").locator(this.triviaPageElements.instancesRenameInputField);
        this.instanceCloneCreateBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceCloneCreateBtn);
        this.instanceRenameCancelBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceRenameCancelBtn);
        this.addedInstanceTitleText = this.page.frameLocator("iframe").locator(this.triviaPageElements.addedInstanceTitleText);
        this.signUpPresetListBox = this.page.frameLocator("iframe").locator(this.triviaPageElements.signUpPresetListBox);
        this.menuPresetLisBox = this.page.frameLocator("iframe").locator(this.triviaPageElements.menuPresetLisBox);
        this.presetSelectIteam = this.page.frameLocator("iframe").locator(this.triviaPageElements.presetSelectIteam);
        this.instanceDeleteBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceDeleteBtn);
        this.instanceCloneBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceCloneBtn);
        this.instanceSettingBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.instanceSettingBtn);
        this.mobileLinkOpenBtn = this.page.frameLocator("iframe").locator("//button[@aria-label='live-wall-button-group-mobile-qr-code-link-popup-btn-open-link']//span[1]");
        this.gamplayPlusBtn = this.page.frameLocator("iframe").locator(`[data-testid="AddIcon"]`);
        this.qrCodeBtn = this.page.frameLocator("iframe").locator(this.triviaPageElements.qrCodeBtn);
        this.copyURLBtn = this.page.frameLocator("iframe").locator(`[data-testid="ContentCopyIcon"]`);
        this.controlSection = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Control']`);
        this.designSection = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Design']`);
        this.favoraitSection = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Favorite']`);
        this.queueSection = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Queue']`);
        this.prizingSection = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Prizing']`);
        this.mainboardMobile = this.page.locator(`.css-kknodv`);
        
        





    }

    readonly menuHideBtn = this.page.locator(`//h5[normalize-space(text())='Hide']`);
    readonly saveBtnForMenu = this.page.locator("//button[normalize-space(text())='Save']")

    readonly madeOutput = this.page.frameLocator("iframe").locator(`//li[@data-value='output']`);
    readonly endEvnet = this.page.frameLocator("iframe").locator(`//li[@data-value='event-end']`);
    readonly redirectOnListBox = this.page.frameLocator("iframe").locator(`[aria-label="live-wall-design-controls-redirect-select-select"]`);
    readonly redirectUrlInputField = this.page.frameLocator("iframe").locator(`//input[@type='url']`);
    readonly external = this.page.frameLocator("iframe").locator(`[value="external"]`)
    readonly webFrame = this.page.frameLocator("iframe").locator(`[value="webframe"]`)
    readonly checkBoxWithoutIframe = this.page.locator(`//input[@type='checkbox']`);
    readonly checkBox = this.page.frameLocator("iframe").locator(`//input[@type='checkbox']`);
    readonly bannedUserExpandBtn = this.page.frameLocator("iframe").locator(`//p[text()='Banned Users']/following-sibling::div`);
    readonly marketingBannersExpandBtn = this.page.frameLocator("iframe").locator(`//p[text()='Marketing Banners']/following-sibling::div`);
    readonly dialogsExpandBtn = this.page.frameLocator("iframe").locator(`//p[text()='Dialogs']/following-sibling::div`);
    readonly uploadsExpandBtn = this.page.frameLocator("iframe").locator(`//p[text()='Uploads']/following-sibling::div`);
    readonly fontsExpandBtn = this.page.frameLocator("iframe").locator(`//p[text()='Fonts']/following-sibling::div`);
    readonly colorsExpandBtn = this.page.frameLocator("iframe").locator(`//p[text()='Colors']/following-sibling::div`);
    readonly designSettingsExpandBtn = this.page.frameLocator("iframe").locator(`//p[text()='Design Settings']/following-sibling::div`);
    readonly gameStopBtn = this.page.frameLocator("iframe").locator(`//button[contains(text(), "Live")]`);
    readonly gameStartBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label="trivia-configurations-configuration-start-stop-button"]`);
    readonly clearMianboardBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='live-wall-admin-clear-mainboard-button']`);
    readonly vipUserCount = this.page.frameLocator("iframe").locator(`(//div[@class='css-18ur74b']//p)[1]`);
    readonly gameUrlVIP = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='VIP']`);
    readonly liveBtn = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Live']`);
    readonly controlSectionCheckbox = this.page.frameLocator("iframe").locator(`//input[@type='checkbox']`);
    readonly uploadFileThreeDotBtn = this.page.frameLocator("iframe").locator(`//div[@class='MuiBox-root css-8eu9qp']//button`);
    readonly imageUploadChooseBtn = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Choose File']`);
    readonly imageRadioBtn = this.page.frameLocator("iframe").locator(`//input[@value='image']`);
    readonly mainboardMobile: any;
    readonly mainboardMobileWithMobileFallback = this.page.locator(`.css-vxgu0c`);
    readonly mainboardMobileWith_1_1_Fallback = this.page.locator(`.css-d2gd2u`);
    readonly mainboardBannerImage = this.page.locator(`.css-ayyttn`);
    readonly mainbaordOkBtn = this.page.locator(`//button[normalize-space(text())='Ok']`);
    readonly gameStartOffBtn = this.page.frameLocator("iframe").locator(`[aria-label="live-wall-start-stop-button"]`);
    readonly uploaderLocator = this.page.frameLocator("iframe").locator(`//div[@class='MuiBox-root css-l8gl3u']`);
    readonly videoRadioBtn = this.page.frameLocator("iframe").locator(`//input[@value='video']`);
    readonly expandImageUloadSection = this.page.frameLocator("iframe").locator(`//p[text()='Image Upload']/following-sibling::div`);
    readonly mainboardUrlCopyIcon = this.page.frameLocator("iframe").locator(`[data-testid="ContentCopyIcon"]`);
    readonly mainbordUrlIcon = this.page.frameLocator("iframe").locator(`[data-testid="IconMainboardIcon"]`);
    readonly controlHeaderToggelBtn = this.page.frameLocator("iframe").locator(`//div[@aria-label='#{ariaId}-inner']//button`);
    readonly prizingSection: any;
    readonly queueSection: any;
    readonly favoraitSection: any;
    readonly designSection: any;
    readonly controlSection = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Control']`);
    readonly copyURLBtn: any;
    readonly qrCodeBtn: any;
    readonly gamplayPlusBtn = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`[data-testid="AddIcon"]`);
    readonly mobileLinkOpenBtn: any;
    readonly addNewPresetPlusBtn: any;
    readonly presetInputField: any;
    readonly saveBtn: any;
    readonly alignmentBottomBtn: any;
    readonly signUpSection: any;
    readonly globalPrizingSection: any;
    readonly catagoryListBox: any;
    readonly noneSelectBtn: any;
    readonly addNewPrizingBtn: any;
    readonly inputPrizeName: any;
    readonly simpleImageUploadBtn: any;
    readonly imageChoseBtn: any;
    readonly imageEditorSaveBtn: any;
    readonly sessionOffPopupMassage: any;
    readonly addNewInstancePlusBtn: any;
    readonly saveBtnInIframe: any;
    readonly marketingBannerSectioon: any;
    readonly instanceNameInputField: any;
    readonly homePopupRemoveBtn: any;
    readonly mimimumCharacterErrorMassage: any;
    readonly instanceThreeDrotBtn: any;
    readonly moreOptionBtnForInstances: any;
    readonly instancesRenameInputField: any;
    readonly instanceCloneCreateBtn: any;
    readonly instanceRenameCancelBtn: any;
    readonly addedInstanceTitleText: any;
    readonly signUpPresetListBox: any;
    readonly menuPresetLisBox: any;
    readonly presetSelectIteam: any;
    readonly instanceDeleteBtn: any;
    readonly instanceCloneBtn: any;
    readonly instanceSettingBtn: any;
    readonly liveCounterBtn = this.page.frameLocator("iframe").locator(`.css-sgbvaa`);
    readonly liveCountResetBtn = this.page.frameLocator("iframe").locator(`[aria-label="live-wall-design-controls-reset-button"]`);
    readonly mainboardMarginInputField = this.page.frameLocator("iframe").locator(`[type="number"]`);
    readonly mainboardMarginConnectedMarginBtn = this.page.frameLocator("iframe").locator(`[aria-label="live-wall-design-controls-connected-inputs-locked-button"]`);
    readonly mianboardTransitionList = this.page.frameLocator("iframe").locator(`[aria-label="component-select-select-item"]`);
    readonly mainboardTransitionListBox = this.page.frameLocator("iframe").locator(`[aria-label="component-select-select"]`);
    readonly countdownTimeInputField = this.page.frameLocator("iframe").locator(`[type="text"]`);
    readonly backgroundColorPicker = this.page.frameLocator("iframe").locator(`//button[@aria-label='live-wall-design-colors-background-color-picker-action']`);
    readonly colorSwitchPlusBtn = this.page.frameLocator("iframe").locator(`//p[text()='Swatches']/following-sibling::button`);
    readonly rgbColorInputField = this.page.frameLocator("iframe").locator(`//input[@inputmode='numeric']`);
    readonly colorTypeListBox = this.page.frameLocator("iframe").locator(`//div[contains(@class,'MuiSelect-select MuiSelect-standard')]`);
    readonly solidColorType = this.page.frameLocator("iframe").locator(`//li[@data-value='solid']`);
    readonly colorPickerSaveBtn = this.page.frameLocator("iframe").locator(`(//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button)[2]`);
    readonly colorSwitchDeleteBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='delete']`);
    readonly colorCodeInputField = this.page.frameLocator("iframe").locator(`[maxlength="8"]`);
    readonly gamePlayCountDownProgressBar = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//span[@role='progressbar']`);
    readonly countdownText = this.page.frameLocator("//iframe").frameLocator("//iframe").locator(`//h4[text()='Waiting...']/following-sibling::div`);
    readonly fontsColorPicker = this.page.frameLocator("iframe").locator(`//button[@aria-label='live-wall-design-colors-font-color-picker-action']`);
    readonly countDownColorPicker = this.page.frameLocator("iframe").locator(`//button[@aria-label='live-wall-design-colors-countdown-color-picker-action']`);
    readonly fontUploadBtn = this.page.frameLocator("iframe").locator(`(//div[@class='MuiBox-root css-1db3cja']//div)[1]`);
    readonly uploadedFontTitle = this.page.frameLocator("iframe").locator(`//p[text()='Aa']/following-sibling::p`);
    readonly gamePlayBackgroundVideo = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-zaw9t7`);
    readonly gamePlayBackgroundImage = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-1e2ehdk`);
    readonly gamePlayHomeScreen = this.page.frameLocator("iframe").frameLocator("iframe").locator(`#app`);
    readonly gamePlayQuestionsList = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[answershape="circle"]`);
    readonly gamePlayMobileHome = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[frameborder="0"]`);
    readonly gamePlayFooterSection = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-km1i04`);
    readonly gamePlayHeaderSection = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-fx4crn`);
    readonly gamePlayHomeScreenWithoutMenuOptions = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-1fjudn1`);
    readonly gamePlayLiveHomeScreenWithoutMenuOptions = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-n36bil`);
    readonly discriptionInputFieldForPrize = this.page.locator(`[placeholder="Give some description here..."]`);
    readonly userFavoraitIcon = this.page.frameLocator("iframe").locator(`.css-1cp8z6e`);
    readonly controlSectionMobile = this.page.frameLocator("iframe").locator(`.css-16kt37f`);
    readonly redirectAndControlsSection = this.page.frameLocator("iframe").locator(`.css-1wqieph`);
    readonly cloneBtn = this.page.frameLocator("iframe").locator(`//span[contains(text(), "Clone")]`);
    readonly signalStrength = this.page.frameLocator("iframe").locator(`//div[@aria-label='live-wall-admin-signal-strength-select']//div[1]`);
    readonly userQueueAndBannedBtn = this.page.frameLocator("iframe").locator(`[aria-label="live-wall-stream-button"]`);
    readonly bannedUserDeleteBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='live-wall-design-banned-users-user-card-stream-button']`);
    readonly bannedUserAccessDeniedOkBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='confirmation-modal-btn-confirm']`);
    readonly bannedUserAccessDeniedText = this.page.frameLocator("iframe").locator(`//p[contains(@class,'MuiTypography-root MuiTypography-body1')]`);
    readonly mobileMenuPresetDeleteBtn = this.page.locator(`//button[@aria-label='Delete Current Preset']`);
    readonly deleteConfirmBtn = this.page.locator(`//button[normalize-space(text())='Delete']`);
    readonly dismissBtn = this.page.locator(`//button[normalize-space(text())='Dismiss']`);
    readonly deletePrizeBtn = this.page.locator(`//button[@aria-label='Delete Prize']`);
    readonly prizingText = this.page.locator(`//label[contains(.,'Name *')]`)
    readonly prizeList = this.page.locator(`//td[contains(@class,'MuiTableCell-root MuiTableCell-body')]`)
    readonly saveBtnInMainMenuPrize = this.page.locator(`//button[@aria-label='dxp-prizing-editor-save-button']`)
    readonly okBtnInIframe = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Ok']`);

    //Azmans Loctors
    readonly addRoundBtn = this.page.frameLocator("iframe").locator(`[aria-label="trivia-add-round-button"]`);
    readonly roundNameInputField = this.page.frameLocator("iframe").locator(`[name="roundName"]`);
    readonly addBtn = this.page.frameLocator("iframe").locator(`[aria-label="trivia-add-round-add-button"]`);
    readonly triviaGameBtn = this.page.locator(`//span[normalize-space(text())='Trivia Mania']`)
    readonly imporQuestionsBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-import-export-round-import-button']`); 
    readonly leaderBoardSettingToggel = this.page.frameLocator("iframe").locator(`//button[contains(@class,'MuiButtonBase-root MuiToggleButton-root')]`);
    readonly leaderboardOneUser = this.page.frameLocator("iframe").frameLocator("iframe").getByRole('cell', { name: '1', exact: true })
    readonly leaderboardText = this.page.frameLocator("iframe").frameLocator("iframe").getByText('Your Rank')
    readonly gamePlayGeneralText = this.page.frameLocator("iframe").frameLocator("iframe").getByText('Time Remaining')
    readonly gamePlayQuestionText = this.page.frameLocator("iframe").frameLocator("iframe").getByText('What is the primary goal of the Production department?')
    readonly gamePlayAnswerText = this.page.frameLocator("iframe").frameLocator("iframe").getByText('Correct Answer')
    readonly gamePlayLeaderboardAccent = this.page.frameLocator("iframe").frameLocator("iframe").getByText('Rank')
    readonly gamePlayLeaderboardText = this.page.frameLocator("iframe").frameLocator("iframe").getByText('Your Rank')
    readonly mainbaordQuestionText = this.page.getByText(`What is the primary goal of the Production department?`);
    readonly mainbaordOneUser = this.page.getByText(`1`);
    readonly mainbaordLeaderboardAccent = this.page.getByText(`Rank`);
    readonly mainbaordCorreectAnswer = this.page.getByText(`Correct Answer`);
    readonly mainbaordWrongAnswer = this.page.getByText(`Wrong Answer`);
    readonly mainbaordGenaralText = this.page.getByText(`Time Remaining`);
    readonly gamePlayTopThree = this.page.frameLocator("iframe").frameLocator("iframe").getByRole('cell', { name: '3', exact: true })
    readonly mainboardTopThree = this.page.getByText(`3`);
    readonly gamePlayTopFive = this.page.frameLocator("iframe").frameLocator("iframe").getByRole('cell', { name: '5', exact: true })
    readonly mainboardTopFive = this.page.getByText(`5`);
    readonly gamePlayTopTen = this.page.frameLocator("iframe").frameLocator("iframe").getByRole('cell', { name: '10', exact: true })
    readonly mainboardTopTen = this.page.getByText(`10`);
    readonly circleAnswerShapeGameplay = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[answershape="circle"]`);
    readonly mainbaordAnswerShape = this.page.locator(`[columns="2"]`);
    readonly rectangleAnswerShapeGameplay = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[answershape="rectangle"]`);
    readonly rectangleBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-answer-shape-toggle-group-btn-1']`);
    readonly circleBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-answer-shape-toggle-group-btn-0']`);
    readonly answerShadowGameplay = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[answershadow="true"]`);
    readonly gamePlayBackground = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-oc8anz`);
    readonly answerBackground = this.page.frameLocator("iframe").frameLocator("iframe").locator(`.css-f2nlkt`);
    readonly questionBackgroundColor = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[isnotonly="true"]`);
    readonly gamePlayStartBtn = this.page.frameLocator("iframe").frameLocator("iframe").locator(`//button[@type='button']`);
    readonly gamePlayLeaderboardFrame = this.page.frameLocator("iframe").frameLocator("iframe").locator(`[bordercolor="rgb(45, 168, 217)"]`);
    readonly mainboardAnswerShadow = this.page.getByText(`Correct Answer`);
    readonly gameplayWrongAnswerText = this.page.frameLocator("iframe").frameLocator("iframe").getByText(`Wrong Answer`);
    readonly gameplayCountdownNumber0 = this.page.frameLocator("iframe").frameLocator("iframe").getByText(`0`);
    readonly questionSecondInputField = this.page.frameLocator("iframe").locator(`[aria-label="trivia-points-settings-question-variables-seconds-text-field"]`);
    readonly countdownTypeLiner = this.page.frameLocator("iframe").locator(`//button[@value='linear']`);
    readonly countdownTypeCirculer = this.page.frameLocator("iframe").locator(`(//button[@value='circle'])[2]`);
    readonly designSettingNumberInputField = this.page.frameLocator("iframe").locator(`//input[@type='number']`);
    readonly numberInputField = this.page.frameLocator("iframe").locator(`[type='number']`);
    readonly mainboardAlignmentBottom = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-mainboard-alignment-bottom-button']`);
    readonly mainboardAlignmentTop = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-mainboard-alignment-top-button']`);
    readonly feedXMLBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-feed-toggle-group-btn-0']`);
    readonly feedJSONBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-feed-toggle-group-btn-1']`);
    readonly mainbaordTimeProgressbar = this.page.locator(`[role="progressbar"]`);
    readonly mainboardCountdownProgressbar = this.page.locator(`[color-border="#2da8d9ff"]`);
    readonly mainboardQRCodeLogo = this.page.locator(`#react-qrcode-logo`);
    readonly mainboardBackground = this.page.locator(`#app`);
    readonly mainboardBackgroundColor = this.page.locator(`[background="rgb(45, 168, 217)"]`);
    readonly mainboardCountdownBackgroundColor = this.page.locator(`[ismedia="true"]`);
    readonly mainbaordAnswerWrongText = this.page.getByText(`Wrong Answer`);
    readonly mainboardCountdownTypeLiner = this.page.getByText(`00`);
    readonly mainboardLeaderboardFrame = this.page.locator(`[linear-gradient(rgb(45, 168, 217)]`);
    readonly threeDotXMLBtn = this.page.frameLocator("iframe").locator(`[role="menuitem"]`);
    readonly colorFields = this.page.frameLocator("iframe").locator(`[aria-label="dialog-color-action"]`);
    readonly colorPickerText = this.page.frameLocator("iframe").locator(`//h2[contains(@class,'MuiTypography-root MuiTypography-h6')]//p[1]`);
    readonly clearAllColors = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-colors-clear-all-button']`);
    readonly gameModeOnDemandBtn = this.page.frameLocator("iframe").locator(`//button[@value='on_demand']`);
    readonly gameModeManualBtn = this.page.frameLocator("iframe").locator(`//button[@value='manual']`);
    readonly qrCodeModalCloseBtn = this.page.frameLocator("iframe").locator(`[aria-label="trivia-configurations-configuration-qr-code-popup-btn-close"]`);

    
    
    
    
    
















    //Mamuns Locators
    readonly buttonName = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Ok']`);
    readonly addQuestionBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-add-question-button']`);
    readonly multipleChoiceBtn = this.page.frameLocator("iframe").locator(`//input[@type="radio" and @value="question_multi"]`);
    readonly questionInputField = this.page.frameLocator("iframe").locator(`//div[@aria-label='trivia-add-edit-question-rich-text-field-action-editor']`);
    readonly addAnswerBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-multiple-choice-add-button']`);
    readonly answerInputField = this.page.frameLocator("iframe").locator(`(//div[@data-contents='true'])[2]`);
    readonly correctAnswerCheckBox = this.page.frameLocator("iframe").locator(`(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[3]`);
    readonly uploadImageBtn = this.page.frameLocator("iframe").locator(`(//div[@class='MuiBox-root css-l8gl3u'])[3]`);
    readonly imageChoseBtnForAll = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Choose File']`);
    readonly saveBtnForUploadSection = this.page.frameLocator("iframe").locator(`//button[normalize-space(text())='Save']`);
    readonly imageSelectBtnForMobileMedia = this.page.frameLocator("iframe").locator(`(//input[@value='image'])[1]`);
    readonly videoSelectBtnForMobileMedia = this.page.frameLocator("iframe").locator(`(//input[@value='video'])[1]`);
    readonly imageSelectBtnForMainboardMedia = this.page.frameLocator("iframe").locator(`(//input[@value='image'])[1]`);
    readonly videoSelectBtnForMainboardMedia = this.page.frameLocator("iframe").locator(`(//input[@value='video'])[1]`);
    readonly uploadBtnForMobileMedia = this.page.frameLocator("iframe").locator(`(//div[@class='MuiBox-root css-l8gl3u'])[1]`);
    readonly uploadBtnForMainboardMedia = this.page.frameLocator("iframe").locator(`(//div[@class='MuiBox-root css-l8gl3u'])[1]`);
    readonly saveBtnForAnswer = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-add-edit-answer-save-button']`);
    readonly saveBtnForQuestion = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-add-edit-question-save-button']`);
    readonly triviaStartConfirmationPopupYesBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-configurations-configuration-start-confirmation-popup-btn-confirm']`);
    readonly triviaStopConfirmationPopupYesBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-configurations-configuration-stop-confirmation-popup-btn-confirm']`);
    readonly moveRoNextStageBtn = this.page.frameLocator("iframe").locator(`//button[@aria-label='trivia-next-button-move-next-stage-button']`);







    // Locators for various elements on the page. Using a single object for organization.
    public triviaPageElements = { 
            gameStopeBtn: `//button[contains(text(), "Live")]`, // Game stop button.
            yesBtn: `//button[contains(text(), "Yes")]`, // Game stop button.
            startBtn: `//button[contains(text(), "Start")]`, // Game stop button.


            qrCodeBtn: `[data-testid="QrCodeIcon"]`, // QR Code button.
            presetSelectIteam: `//li[@aria-label='component-select-select-item']`, // Preset select item.
            menuPresetLisBox: `(//div[@aria-label='component-select-select']//div)[2]`, // Menu preset list box.
            signUpPresetListBox: `(//div[@aria-label='component-select-select']//div)[1]`, // Signup preset input field.
            addedInstanceTitleText: `//h6[contains(@class,'MuiTypography-root MuiTypography-h6')]`, // Instances title text.
            instanceRenameCancelBtn: `//button[normalize-space(text())='Cancel']`, // Rename Cancel button for the instance.
            instanceCloneCreateBtn: `//button[normalize-space(text())='Create']`, // Clone and Create button for the instance.
            instancesRenameInputField: `//input[@type='string']`, // Instances title text.
            moreOptionBtnForInstances:   `//span[contains(@class,'MuiTypography-root MuiTypography-body1')]`,
            instanceSettingBtn:   `//span[normalize-space(text())='Instance Settings']`, // More option button for the instance.
            instanceCloneBtn:   `//span[normalize-space(text())='Clone']`, // More option button for the instance.
            instanceDeleteBtn:   `//span[normalize-space(text())='Delete']`, // More option button for the instance.

        // More option button for the instance.
        instanceThreeDrotBtn: `[data-testid="MoreVertIcon"]`, // Three dot button for the instance.
        instanceNameFieldMiminumCharacterErrorMassage: "//p[contains(@class,'MuiFormHelperText-root Mui-error')]",
        instanceNameInputField: `[type="string"]`, // Username input field.       
        frame: `iframe`, // Locator for an iframe on the page.
        yourLocator: `#yourLocator`, // Specific locator for a key element within the iframe.
        userNameInputField: `#user-name`, // Username input field.
        passwordInputField: `#password`, // Password input field.
        loginBtn: `#login-button`, // Login button.
        deleteBtn: `//button[text()='Delete']`,
        mainMenuUserBtn: `[aria-label="dxp-user-btn"]`,
        mainMenuBtn: `//p[normalize-space(text())='Main Menu']`,

        desktopMockupExpandBtn: `//p[text()='Desktop Mockup']/following-sibling::div`,
        deviceFrameSetBtn: `(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]`,
        selectIphoneXBtn: `//li[@data-value='iPhone X']`,
        forgroundImageThreeDotBtn: `(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]`,
        forgroundImageDeleteBtn: `//span[normalize-space(text())='Delete']`,
        forgroundImageDeleteConfirmBtn: `//button[normalize-space(text())='Delete']`,
        okBtn: `//button[normalize-space(text())='Ok']`,
        forgroundImageSizeFitBtn: `//p[normalize-space(text())='Fit']`,
        forgroundImagePositionBtn: `//p[normalize-space(text())='Center']`,

        languageSectionBtn: `//p[normalize-space(text())='Language']`,
        languageControlEnableBtn: `(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]`,
        forceLanguageRadioBtn: `//input[@value='forced']`,
        forceLanguageListBox: `//div[contains(@class,'MuiSelect-select MuiSelect-outlined')]`,
        forceLanguageEnglishOption: `//li[@data-value='en']`,

        mobileMenuSectionBtn: `//div[@aria-label='dxp-main-menu-item-menu']`,
        addNewPresetBtn: `//button[@aria-label='Add New Preset']`,
        presetInputField: `//input[@aria-describedby='P0-0-helper-text']`,
        saveBtn: `//button[normalize-space(text())='Save']`,
        alignmentBottomBtn: `//h5[normalize-space(text())='Bottom']`,


        signUpSection: `//p[normalize-space(text())='Sign Up']`,

        globalPrizingSection: `//p[normalize-space(text())='Global Prizing']`,
        catagoryListBox: `(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//div)[1]`,
        noneSelectBtn: `//li[@data-value='none']`,
        addNewPrizingBtn: `//button[@aria-label='dxp-prizing-add-new-prize-button']`,
        inputPrizeName: `//input[@placeholder='Enter prize name...']`,
        simpleImageUploadBtn: `//button[normalize-space(text())='Simple Image']`,
        imageChoseBtn: `//button[normalize-space(text())='Choose File']`,
        imageEditorSaveBtn: `//div[@class='MuiBox-root css-17wln82']//button[1]`,
        inputDescription: `(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]`,

        marketingBannerSectioon: `//p[normalize-space(text())='Marketing Banner']`,
        uploadedImage: `//div[@backgroundsize='contain']//div[1]`,
        uploadBannerThreeDotBtn: `//button[contains(@class,'MuiButtonBase-root MuiButton-root')]`,
        deleteFromThreeDotBtn: `//span[normalize-space(text())='Delete']`,

        sessionOffPopupMassage: `//span[text()="Instances"]`,
        instancesTitleText: `//div[contains(@class,'icon-wrapper MuiBox-root')]`,
        addNewInstancePlusBtn: `[data-testid="AddIcon"]`,
        designSection: `//button[normalize-space(text())='Design']`,
        controlSection: `//button[normalize-space(text())='Control']`,
        favoraitSection: `//button[normalize-space(text())='Favorite']`,
        queueSection: `//button[normalize-space(text())='Queue']`,
        prizingSection: `//button[normalize-space(text())='Prizing']`,
        saveBtnForPrizeSave: `//button[@aria-label='dxp-prizing-editor-save-button']`,

    };

    // Getter to access the iframe using Playwright's frame locator utility.
    get iframe(): FrameLocator {
        // Return a frame locator for the specified frame
        return this.page.frameLocator(this.triviaPageElements.frame);
    }




    // Method to perform an action within the iframe.
    async yourMethod() {
        // Locate an element within the iframe and perform a click action with specific options.
        const ele = await this.iframe.locator(this.triviaPageElements.deleteBtn).nth(0)
        try {
            // Click the element with a left mouse button and a delay of 100 milliseconds
            await ele.click({ button: "left", delay: 100 });
        } catch (error) {
            // Error handling with a custom error message providing context.
            throw new Error(`Test Failure in 'Your Module | Mobile Design | Color Section': Expected 'Background Color Input Field Button' is not visible. Locator used: "${ele}". Error occurred: "${error}"`);
        }

    }

    async stopeGameIfStarted() {
        

        
  const elements = await this.iframe.locator(this.triviaPageElements.gameStopeBtn).nth(0)  
  const deleteBtn = await this.iframe.locator(this.triviaPageElements.yesBtn).nth(0)
  
    

  while (true) {
    // const elements = page.locator(locatorString);
    const count = await elements.count();

    if (count === 0) {
        break; // Exit the loop if no elements are found
    }        
    for (let i = 0; i < count; i++) {
        const element = elements.nth(i);
        if (await element.isVisible()) {
          await element.click();
            await deleteBtn.click({ button: "left", delay: 100 })             
            await this.page.waitForTimeout(500); // Adjust the timeout as necessary    
            // Add a small delay to allow for page updates or use waitForResponse or waitForSelector if more appropriate
            await this.page.waitForTimeout(1000); // Adjust the timeout as necessary
            
        }
    }       
    }
}

    async startGame() {
        const ele = await this.iframe.locator(this.triviaPageElements.startBtn).last()
        const ele1 = await this.iframe.locator(this.triviaPageElements.yesBtn).nth(0)

        try {
            await ele.click({force: true});
            await ele1.click({force: true});
            await this.page.waitForTimeout(1000);
        } catch (error) {
            // Error handling with a custom error message providing context.
            throw new Error(`Trivia | Start Button' is not visible. Locator used: "${ele}". Error occurred: "${error}"`);
        }
            
            
    }
      

        
    

    async ifVidoeServiceModalOpen() {
        const ele = await this.iframe.locator(this.triviaPageElements.okBtn).nth(0)
        if (await this.okBtnInIframe.isVisible()) {
            await this.okBtnInIframe.click({ force: true });
            await this.page.waitForTimeout(1000);
            await this.homePopupRemoveBtn.click({ force: true });
            await this.page.waitForTimeout(1000);
            await this.controlSection.last().click({ force: true });
            await this.page.waitForTimeout(1000);

            await this.qrCodeBtn.last().click({ force: true });

        }
    }

    async ifVidoeServiceModalOpenForMainboard() {
        const ele = await this.iframe.locator(this.triviaPageElements.okBtn).nth(0)
        if (await this.okBtnInIframe.isVisible()) {
            await this.okBtnInIframe.click({ force: true });
            await this.page.waitForTimeout(3000);
            await this.homePopupRemoveBtn.click({ force: true });
            await this.page.waitForTimeout(1000);
            await this.controlSection.first().click({ force: true });
            await this.controlSection.last().click({ force: true });
            await this.page.waitForTimeout(1000);

            await this.mainbordUrlIcon.last().click({ force: true });
            await this.page.waitForTimeout(500);
        }
    }

    async clickOnDesignSection() {
        const ele = await this.iframe.locator(this.triviaPageElements.designSection).last()
        try {
            await ele.click({ force: true });
        } catch (error) {
            throw new Error(`Test Failure in Design | Trivia | Expected: should click on the Design Section button, Actual:is not visible or changed the locator ${this.triviaPageElements.designSection} Error occurred: "${error}"`);
        }
    }

    async clickOnControlSection() {
        const ele = this.iframe.locator(this.triviaPageElements.controlSection).last()
        try {
            await ele.click({ force: true });
            await this.page.waitForTimeout(1000);
        } catch (error) {
            throw new Error(`Test Failure in Design | Trivia | Expected: should click on the control Section button, Actual:is not visible or changed the locator ${this.triviaPageElements.designSection} Error occurred: "${error}"`);
        }
    }

    async clickOnFavoraitSection() {
        const ele = await this.iframe.locator(this.triviaPageElements.favoraitSection).last()
        try {
            await ele.click({ force: true });
        } catch (error) {
            throw new Error(`Test Failure in Design | Trivia | Expected: should click on the Favorait Section button, Actual:is not visible or changed the locator ${this.triviaPageElements.designSection} Error occurred: "${error}"`);
        }
    }

    async clickOnQueueSection() {
        const ele = await this.iframe.locator(this.triviaPageElements.favoraitSection).nth(1)
        try {
            await ele.click({ force: true });
        } catch (error) {
            throw new Error(`Test Failure in Design | Trivia | Expected: should click on the Favorait Section button, Actual:is not visible or changed the locator ${this.triviaPageElements.designSection} Error occurred: "${error}"`);
        }
    }

    async expandDesktopMockup() {
        try {
            this.clickHelperForString(this.triviaPageElements.desktopMockupExpandBtn)
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Expected: should click on the deskto mockup expand button, Actual:is not visible or changed Error occurred: "${error}"`);
        }
    }

    async openDeviceFramesetListBox() {
        try {
            this.clickHelperForString(this.triviaPageElements.deviceFrameSetBtn);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Device Frameset | Expected: should click on the device frameset list box. Actual: not visible or changed the changed  Error occurred: "${error}"`);
        }
    }

    async selectIphoneX() {
        try {
            this.clickHelperForString(this.triviaPageElements.selectIphoneXBtn);
            await this.page.waitForTimeout(1000);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Device Frameset | Expected: should select the iPhone X from the device frameset list. Actual: iPhone X button not visible or changed . Error occurred: "${error}"`);
        }
    }

    async clickingOnLanguageSection() {
        try {
            this.clickHelperForString(this.triviaPageElements.languageSectionBtn);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Language Section | Expected: should click on the language section button. Actual: button not visible or changed . Error occurred: "${error}"`);
        }
    }

    async languageControlsEnable() {
        const condition = await this.page.locator(this.triviaPageElements.forceLanguageRadioBtn).isDisabled()
        try {
            if (condition == true) {
                this.clickHelperForString(this.triviaPageElements.languageControlEnableBtn);
            }
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Language Controls | Expected: should click on the language control enable button if it is enabled. Actual: button not visible, disabled, or changed . Error occurred: "${error}"`);
        }
    }

    async checkForceLanguage() {
        try {
            // Wait for the button to be visible
            await this.page.waitForSelector(this.triviaPageElements.forceLanguageRadioBtn, { state: 'visible', timeout: 5000 });

            // Click the button using the clickHelper function
            await this.clickHelperForString(this.triviaPageElements.forceLanguageRadioBtn);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Language Section | Expected: should click on the language section button. Actual: button not visible or changed in "${this.triviaPageElements.forceLanguageRadioBtn}". Error occurred: "${error}"`);
        }
    }


    async openForceLanguageListbox() {
        try {
            this.clickHelperForString(this.triviaPageElements.forceLanguageListBox);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Language Section | Expected: should click on the force language list box. Actual: list box not visible or changed in ${this.triviaPageElements.forceLanguageListBox}. Error occurred: "${error}"`);
        }
    }

    async selectEnglishLanguage() {
        try {
            this.clickHelperForString(this.triviaPageElements.forceLanguageEnglishOption);
            await this.page.waitForTimeout(1000);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Language Section | Expected: should select English in the force language options. Actual: English option not visible or changed in ${this.triviaPageElements.forceLanguageEnglishOption}. Error occurred: "${error}"`);
        }
    }

    async clickMobileMenuSection() {
        try {
            this.clickHelperForString(this.triviaPageElements.mobileMenuSectionBtn);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Mobile Menu Section | Expected: should click on the mobile menu section button. Actual: button not visible or changed in ${this.triviaPageElements.mobileMenuSectionBtn}. Error occurred: "${error}"`);
        }
    }


    async clickAddNewPresetPlusBtn() {
        try {
            this.clickHelperForString(this.triviaPageElements.addNewPresetBtn);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Preset Section | Expected: should click on the 'Add New Preset' button. Actual: button not visible or changed in ${this.triviaPageElements.addNewPresetBtn}. Error occurred: "${error}"`);
        }
    }

    async inputPresetName(name: any) {
        try {
            this.inputHelper(this.triviaPageElements.presetInputField, name);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Preset Section | Expected: should input the preset name in the preset input field. Actual: input field not visible or changed in ${this.triviaPageElements.presetInputField}. Error occurred: "${error}"`);
        }
    }


    async clickSaveBtn() {
        try {
            this.clickHelperForString(this.triviaPageElements.saveBtn);
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Preset Section | Expected: should click on the 'Save' button. Actual: button not visible or changed in ${this.triviaPageElements.saveBtn}. Error occurred: "${error}"`);
        }
    }

    async inputDescription() {
        const ele = await this.iframe.locator(this.triviaPageElements.inputDescription).nth(0)
        try {
            await ele.fill('This is a test description');
        } catch (error) {
            throw new Error(`Test Failure in Design | Desktop Mockup | Preset Section | Expected: should click on the 'Save' button. Actual: button not visible or changed in ${this.triviaPageElements.saveBtn}. Error occurred: "${error}"`);
        }
    }











































}
