async function gotoWorkspace(page) {
  // signin to grafana from okta signin
  await page.goto(process.env.GRAFANA_WORKSPACE_URL)
  // Manually type in password
  await page.click('#index_google_sign_in_with_google')
  await page.waitForNavigation({ waitUntil: 'load' })
  await page.waitForSelector('#okta-signin-username')
  await page.type('#okta-signin-username', process.env.GRAFANA_EMAIL)
  await page.type('#okta-signin-password', process.env.GRAFANA_PASSWORD)
  // TODO: figure out name of sign in button, for now click manually
  await page.click('#okta-signin-submit')
  // google authenticator page will load, type in 6 digit code then click sign in
  await page.waitForNavigation({ waitUntil: 'load' })
  // click "Sign-in with Google"
  await page.waitForNavigation({ waitUntil: 'load' })
  // wait for some page i'm not sure of to load before it can access channels
  await page.waitForNavigation({ waitUntil: 'load' })
  await page.waitForNavigation({ waitUntil: 'load' })
  await page.waitForNavigation({ waitUntil: 'load' })
  console.log("pgload3)")
  await page.waitForNavigation({ waitUntil: 'load' })
  console.log("pgload4)")
  await page.waitForNavigation({ waitUntil: 'load' })
  console.log("pgload5)")
}

exports.gotoWorkspace = gotoWorkspace
