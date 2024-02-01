const remark = require('remark');
const remarkSectionize = require('./index');
import { Root } from 'mdast';
const assert = require('assert');

// Create a dummy Root node
const rootNode: Root = {
  type: 'root',
  children: [],
};

// Use the plugin with remark
const result = remark().use(remarkSectionize).processSync(rootNode);

// Check the result
assert.strictEqual(result.contents, rootNode);