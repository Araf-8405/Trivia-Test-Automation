import { Page, TestInfo } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { AnnotationHelper } from '../utils/annotations/AnnotationHelper';
import { ExcelHelper } from '../utils/ExcelHelper';

export class ButtonExcel extends BaseComponent {

    fileName = '';

    /**
     * Constructor
     * @param page Playwright page 
     * @param annotationHelper Annotation that stores steps and custom annotations
     * @param name Name for the button
     */
    constructor(protected page: Page, private testInfo: TestInfo, annotationHelper: AnnotationHelper, private name: string) {
        super(page, annotationHelper);
        this.text = this.name;
        this.locator = this.page.getByRole('button', { name: name });
        this.label = name;
    }

    /**
     * Click in the button to download the excel
     */
    async click(fileName: string) {
        this.fileName = fileName;
        const stepDescription = 'Click: "' + await this.getText() + '"';
        await this.addStepWithAnnotation(stepDescription, async () => {
            // Start waiting for download before clicking. Note no await.
            const downloadPromise = this.page.waitForEvent('download');
            await this.locator.click();
            const download = await downloadPromise;
            // Wait for the download process to complete and save the downloaded file somewhere.
            await download.saveAs(fileName);
            //Attach the excel file to the reporter
            await this.testInfo.attach(fileName, {path: fileName} );
        });
    }

    /** Gets the Excel rows */
    async getExcelRows() {
        const excelHelper = new ExcelHelper();
        const excelRows = await excelHelper.readExcel(this.fileName, 'Servers');
        return excelRows;
    }

}