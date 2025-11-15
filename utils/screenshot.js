export async function attachScreenshot(page, stepName, testInfo) {
  const buffer = await page.screenshot({ fullPage: true });
  await testInfo.attach(stepName, {
    body: buffer,
    contentType: "image/png",
  });
}
