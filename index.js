/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  app.on("pull_request.reopened", async (context) => {
    console.log("123")
    const now = new Date();
    console.log("123")
    const pullReview = context.pullRequest({
      body: "Thanks for opening this pull request! Github Apps Server Time is " + now.toISOString() + " UTC.",
      event: "APPROVE"
    });

    return context.octokit.pulls.createReview(pullReview);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
