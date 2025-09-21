import { test } from '@playwright/test';
import { UploadResume } from '../../pages/upload-resume'
import path from 'path';

test('User can upload a resume to the QA role', async ({ page }) => {
  const upload = new UploadResume(page)

  await upload.goToRevealPage()
  await upload.applyForJob()

  // Create absolute path to the test resume file in the repo
  const filePath = path.resolve(__dirname, '../fixtures/PDF_TestPage.pdf');
  await upload.selectResume(filePath)
});