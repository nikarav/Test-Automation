Feature: Scenario 3

  Scenario Outline: Quick Links not visible in mobile view
  When Scenario3: The user navigates to: <url>
  And The user is in the mobile viewport
  Then <link> should NOT be visible on a mobile device

  Examples:
    | url | link |
    | "https://www.danfoss.com/en/" | "Quick Links" |