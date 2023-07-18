async function gotoWorkspace(page) {
  await page.goto(process.env.SLACK_WORKSPACE_URL)
  await page.waitForSelector('#email')
  await page.type('#email', process.env.SLACK_EMAIL)
  await page.type('#password', process.env.SLACK_PASSWORD)
  await page.click('#signin_btn')
  await page.waitForNavigation({ waitUntil: 'load' })
  await page.waitForNavigation({ waitUntil: 'load' })
  await page.waitForNavigation({ waitUntil: 'load' })
}

exports.gotoWorkspace = gotoWorkspace
