Feature("fff");

Scenario("test something", ({ I }) => {
  I.amOnPage("/watch?v=i23iz8ZL9VI&list=PLrqYce371ayDCVx9i-SQXNgnebxP1uIk3");
  I.waitForElement("#movie_player");
  I.click(".ytp-play-button");
  I.wait(200);
});
