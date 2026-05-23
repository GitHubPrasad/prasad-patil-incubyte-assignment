const XLSX = require("xlsx");
const path = require("path");

// Create test cases data
const testCases = [
  {
    "Test Case ID": "TC_001",
    "Test Case Name": "User Registration - Valid Details",
    Feature: "Sign Up",
    Description: "Test creating a new account with valid registration details",
    Preconditions: "User is on ParaBank login page",
    Steps:
      "1. Click Register link\n2. Fill in all required fields with valid data\n3. Click Register button",
    "Expected Result":
      "Account created successfully, user is logged in automatically",
    Priority: "High",
    Status: "Ready to Execute",
  },
  {
    "Test Case ID": "TC_002",
    "Test Case Name": "View Account Balance After Registration",
    Feature: "Account Viewing",
    Description: "Test viewing account balance after successful registration",
    Preconditions: "User has successfully registered and is logged in",
    Steps:
      "1. Click on Accounts menu\n2. Verify account balance is displayed\n3. Log the balance amount",
    "Expected Result":
      "Account balance is displayed on the page and logged to console",
    Priority: "High",
    Status: "Ready to Execute",
  },
  {
    "Test Case ID": "TC_003",
    "Test Case Name": "User Login with Registered Credentials",
    Feature: "Sign In",
    Description: "Test signing in with newly created account credentials",
    Preconditions: "Account created in TC_001, user is logged out",
    Steps:
      '1. Navigate to login page\n2. Enter username "johndoe"\n3. Enter password "Test@1234"\n4. Click Login button',
    "Expected Result": "User is successfully logged in",
    Priority: "High",
    Status: "Ready to Execute",
  },
  {
    "Test Case ID": "TC_004",
    "Test Case Name": "View Account Balance After Login",
    Feature: "Account Viewing",
    Description: "Test viewing account balance after signing in",
    Preconditions: "User has logged in successfully",
    Steps:
      "1. Navigate to Accounts page\n2. Verify account balance is displayed\n3. Log the balance amount",
    "Expected Result": "Account balance is displayed and logged",
    Priority: "High",
    Status: "Ready to Execute",
  },
  {
    "Test Case ID": "TC_005",
    "Test Case Name": "Multiple Accounts Balance Display",
    Feature: "Account Viewing",
    Description:
      "Test viewing balances for multiple accounts if user has more than one",
    Preconditions: "User is logged in and has at least one account",
    Steps:
      "1. Navigate to Accounts page\n2. Check if multiple accounts exist\n3. Log all account balances",
    "Expected Result":
      "All account balances are displayed and logged correctly",
    Priority: "Medium",
    Status: "Ready to Execute",
  },
];

// Create worksheet
const ws = XLSX.utils.json_to_sheet(testCases);

// Set column widths
ws["!cols"] = [
  { wch: 12 }, // Test Case ID
  { wch: 35 }, // Test Case Name
  { wch: 15 }, // Feature
  { wch: 35 }, // Description
  { wch: 35 }, // Preconditions
  { wch: 40 }, // Steps
  { wch: 40 }, // Expected Result
  { wch: 12 }, // Priority
  { wch: 18 }, // Status
];

// Create workbook
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Test Cases");

// Write file
const filePath = path.join(__dirname, "TestCases.xlsx");
XLSX.writeFile(wb, filePath);

console.log(`Test cases Excel file created successfully at: ${filePath}`);
