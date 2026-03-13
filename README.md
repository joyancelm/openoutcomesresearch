# OpenOutcomesResearch

This application is configured to be deployed on **GitHub Pages** and uses **Google Sheets** as a serverless database to store waitlist and demo submissions.

## 1. Google Sheets Integration Setup

Since GitHub Pages only hosts static files, we use a Google Apps Script to securely send form submissions directly to a Google Sheet.

### Step 1: Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like "OpenOutcomesResearch Submissions".
3. Create two tabs in the same spreadsheet:
  - `Demo Requests`
  - `Waitlist`
4. Add the following headers in row 1 (A1 to G1) for both tabs:
  `Timestamp` | `Type` | `Email` | `Name` | `Company` | `Avg Searches/Month` | `Avg Results/Month`

### Step 2: Add the Apps Script
1. In your Google Sheet, click on **Extensions > Apps Script**.
2. Delete any code in the editor and paste the following:

```javascript
function getOrCreateSheet(ss, sheetName) {
  var sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Type",
      "Email",
      "Name",
      "Company",
      "Avg Searches/Month",
      "Avg Results/Month"
    ]);
  }

  return sheet;
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents || "{}");

    var type = data.type || 'waitlist';
    var targetSheet = data.targetSheet || (type === 'demo' ? 'Demo Requests' : 'Waitlist');
    var sheet = getOrCreateSheet(ss, targetSheet);
    var timestamp = new Date().toISOString();

    if (type === 'waitlist') {
      sheet.appendRow([timestamp, type, data.email, '', '', data.searchesPerMonth || '', data.resultsPerMonth || '']);
    } else if (type === 'demo') {
      sheet.appendRow([timestamp, type, data.email, data.name, data.company, '', '']);
    }

    return ContentService.createTextOutput(JSON.stringify({"success": true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"success": false, "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy the Script
1. Click the **Deploy** button at the top right, then select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the details:
   - **Description:** Form Submissions
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
4. Click **Deploy**. (You may need to authorize the script the first time).
5. Copy the **Web app URL** provided.

### Step 4: Add the URL to GitHub
1. Go to your GitHub repository.
2. Navigate to **Settings > Secrets and variables > Actions**.
3. Click **New repository secret**.
4. Name: `VITE_GOOGLE_SHEETS_URL`
5. Secret: Paste the Web app URL you copied in Step 3.
6. Click **Add secret**.

---

## 2. GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site to GitHub Pages whenever you push to the `main` branch.

### Step 1: Enable GitHub Pages
1. Go to your GitHub repository **Settings**.
2. On the left sidebar, click **Pages**.
3. Under "Build and deployment", change the **Source** to **GitHub Actions**.

### Step 2: Custom Domain (Optional)
If you have a custom domain (e.g., `www.openoutcomesresearch.com`):
1. In the **Pages** settings, scroll down to **Custom domain**.
2. Enter your domain and click **Save**.
3. Update your domain registrar's DNS settings (add a CNAME record pointing to `yourusername.github.io`).
4. Wait for DNS to propagate and ensure **Enforce HTTPS** is checked.

### Step 3: Trigger the First Deployment
1. Push your code to the `main` branch.
2. Go to the **Actions** tab in your GitHub repository to watch the build process.
3. Once complete, your site will be live!

---

*Note: The local Express backend (`server.ts`) is still included for local development testing but is not used in the GitHub Pages production deployment.*
