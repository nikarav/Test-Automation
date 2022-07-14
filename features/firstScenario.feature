Feature: Scenario 1

  Scenario Outline: Visible button with a text
  When The user navigates to: <url>
  Then A link containing text: <text> is visible

  Examples:
    | url | text |
    | "https://www.danfoss.com/en/" | "Explore Danfoss Product Store" |