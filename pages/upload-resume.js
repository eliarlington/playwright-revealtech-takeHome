import { expect } from '@playwright/test'

export class UploadResume {
    constructor(page) {
        this.page = page
        this.uploadhiringButton = page.getByRole('menuitem', { name: 'WE\'RE HIRING' })
        this.qaRoleLink = page.getByRole('link', { name: /Quality Assurance Engineer/i });
        this.applyForJobButton = page.getByRole('link', { name: /Apply for this job/i })
        this.resumeInput = page.locator('input[name="resume"]');
        this.successLabel = page.locator('.resume-upload-label', { hasText: 'Success!' });
    }

    async goToRevealPage() {
        await this.page.goto('https://www.revealtech.ai/')
    }

    async applyForJob() {
        await this.uploadhiringButton.click()
        await this.qaRoleLink.click()
        await this.applyForJobButton.first().click()
    }

    async selectResume(filePath) {
        await this.resumeInput.setInputFiles(filePath)
        await expect(this.successLabel).toHaveText('Success!', { timeout: 20000 });
    }
}