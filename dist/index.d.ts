import { Plugin } from 'unified';
import { Root } from 'mdast';

// The plugin does not take options, so the first generic parameter is set to void[]
// The plugin operates on a Root node from the mdast, aligning with the structure of a Markdown AST
interface RemarkSectionizePlugin extends Plugin<void[], Root> {
  // The plugin function takes a Root node as its parameter and modifies it in place, hence returning void
  (tree: Root): void;
}

declare const remarkSectionize: RemarkSectionizePlugin;

export { remarkSectionize as default };
