import { findAfter } from 'unist-util-find-after'
import { visit } from 'unist-util-visit';
import type { Node, Parent } from 'unist';
import type { Transformer } from 'unified'


const MAX_HEADING_DEPTH = 6

function plugin(): Transformer<GenericNode, GenericNode> {
  return transform
}

interface GenericNode extends Node {
  type: string;
  depth?: number;
  children?: GenericNode[];
  data?: {
    hName?: string;
    [key: string]: unknown;
  };
}

interface HeadingNode extends GenericNode {
  type: 'heading';
  depth: number;
}

type FindAfterParent = Parent & {
  children: GenericNode[];
  data?: { [key: string]: unknown };
}

type Test = (node: GenericNode) => boolean

function transform(tree: GenericNode): void {
  for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
    visit(
      tree,
      (node: GenericNode): node is HeadingNode => 
        node.type === 'heading' && typeof node.depth === 'number' && node.depth === depth,
      (node, index, parent) => sectionize(node, index, parent as FindAfterParent)
    )
  }
}

// biome-ignore lint/suspicious/noConfusingVoidType: <I'm just happy I have no errors>
function sectionize(node: HeadingNode, index: number, parent: FindAfterParent): void | boolean {
  const start = node
  const startIndex = index
  const depth = start.depth

  const isEnd: Test = (node: GenericNode): boolean => 
    (node.type === 'heading' && typeof node.depth === 'number' && node.depth <= depth) || node.type === 'export'

  const end = findAfter(parent, start, isEnd) as GenericNode | null
  const endIndex = end ? parent.children.indexOf(end) : parent.children.length
  const between = parent.children.slice(
    startIndex,
    endIndex > 0 ? endIndex : undefined
  )

  const section: GenericNode = {
    type: 'section',
    depth: depth,
    children: between as GenericNode[],
    data: {
      hName: 'section'
    }
  }

  parent.children.splice(startIndex, section?.children?.length ?? 0, section)
}

export default plugin
