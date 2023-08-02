const core = require("@actions/core");

const content = core.getInput("content") || "";

(async () => {
  const parsed = {
    frontmatter: {
      title: "FRONTMATTER TITLE",
    },
    frontmatterAsText: "title: FRONTMATTER TITLE",
    markdown: "## MK\n\nMarkdown!",
  };
  core.setOutput('parsed', parsed);
  core.setOutput('title', parsed.title);
  // try {
  // } catch (error) {
  //   core.setFailed(error.message);
  // }
})();
