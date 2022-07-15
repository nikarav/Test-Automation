Feature: Scenario 2

  Scenario Outline: Alsense search results are available
  When Scenario2: The user navigates to: <url>
  And The user uses a search input field search for a keyword: <keyword>
  Then The page with results should contain: a link containing words: <words>
  And The page with results should contain: at least one link pointing to a <type> file
  Examples:
    | url | keyword | words | type |
    | "https://www.danfoss.com/en/" | "Alsense" | "Alsense IoT cloud and monitoring" | "pdf" |