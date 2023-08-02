const parse = (frontMatterEnabledMarkdown) => {
  const frontMatterPattern = /^---\ntitle: *(.*?)\n---\n(.+)$/;
  if (!frontMatterPattern.test(frontMatterEnabledMarkdown)) {
    return {
      title: 'title missing',
      markdown: frontMatterEnabledMarkdown,
    }
  }
  const [, rawTitle, markdown] = frontMatterEnabledMarkdown.match(frontMatterPattern);
  const singleQuotesPattern = /^'(.*)'$/;
  const doubleQuotesPattern = /^"(.*)"$/;
  let title = rawTitle;
  if (singleQuotesPattern.test(rawTitle)) {
    title = rawTitle.match(singleQuotesPattern)[1].replace(/\\'/g, "'");
  } else if (doubleQuotesPattern.test(rawTitle)) {
    title = rawTitle.match(doubleQuotesPattern)[1].replace(/\\"/g, '"');
  }
  return {
    title,
    markdown,
  }
};

module.exports = {
  parse,
};
