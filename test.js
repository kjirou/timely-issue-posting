const fs = require('fs');
const path = require('path');
const usoFrontMatterParser = require('./.github/actions/post-issue/uso-front-matter-parser');

const template = fs.readFileSync(path.join('.github/actions/post-issue/templates', `foo.md`))
    .toString();
const parsed = usoFrontMatterParser.parse(template);
console.log(parsed);
