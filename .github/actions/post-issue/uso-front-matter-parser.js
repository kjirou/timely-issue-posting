const parse = (frontMatterEnabledMarkdown) => {
  const frontMatterPattern = /^---\ntitle: *([^\n]*?)\n---\n/;
  if (!frontMatterPattern.test(frontMatterEnabledMarkdown)) {
    return {
      title: '',
      markdown: frontMatterEnabledMarkdown,
    }
  }
  const [, rawTitle] = frontMatterEnabledMarkdown.match(frontMatterPattern);
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
    markdown: frontMatterEnabledMarkdown.replace(frontMatterPattern, ''),
  }
};

module.exports = {
  parse,
};
