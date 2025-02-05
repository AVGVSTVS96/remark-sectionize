import { findAfter } from 'unist-util-find-after';
import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Node, Parent } from 'unist';

const MAX_HEADING_DEPTH = 6;

interface HeadingNode extends Node {
  type: 'heading';
  depth: 1 | 2 | 3 | 4 | 5 | 6;
}

interface SectionNode extends Parent {
  type: 'section';
  depth: number;
  data: {
    hName: 'section'
  };
}

const plugin: Plugin = () => transform;

function transform(tree: Node): Node {
  for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
    visit(
      tree,
      { type: 'heading', depth } as Partial<HeadingNode>,
      (node, index, parent) => {
        if (parent) {
          sectionize(node as HeadingNode, index, parent);
        }
      }
    );
  }
  return tree;
}

function sectionize(node: HeadingNode, index: number, parent: Parent): void {
  const depth = node.depth;
  const isEnd = (n: Node): boolean =>
    (n.type === 'heading' && (n as HeadingNode).depth <= depth) ||
    n.type === 'export';

  const end = findAfter(parent, node, isEnd);
  const endIndex = end ? parent.children.indexOf(end) : parent.children.length;
  const between = parent.children.slice(index, endIndex > 0 ? endIndex : undefined);

  const section: SectionNode = {
    type: 'section',
    depth,
    children: between,
    data: { hName: 'section' }
  };

  parent.children.splice(index, between.length, section);
}

export default plugin;

