import { findAfter } from "unist-util-find-after";
import { visit, type BuildVisitor } from "unist-util-visit";
import type { Node, Parent } from "unist";
import type { Transformer } from "unified";

const MAX_HEADING_DEPTH = 6;

interface HeadingNode extends Node {
  type: "heading";
  depth: 1 | 2 | 3 | 4 | 5 | 6;
}

interface SectionNode extends Parent {
  type: "section";
  depth: number;
  data: {
    hName: "section";
  };
}

type GenericNode = Node | HeadingNode | SectionNode;

function plugin(): Transformer<GenericNode, GenericNode> {
  return transform;
}
type Test = (node: GenericNode) => boolean;

function transform(tree: GenericNode): GenericNode {
  for (let depth = MAX_HEADING_DEPTH; depth > 0; depth--) {
    visit(
      tree,
      (node): node is HeadingNode =>
        node.type === "heading" &&
        "depth" in node &&
        typeof node.depth === "number" &&
        node.depth === depth,
      sectionize as unknown as BuildVisitor<GenericNode, Test>
    );
  }
  return tree;
}

function sectionize(node: HeadingNode, index: number, parent: Parent): void {
  const start = node;
  const startIndex = index;
  const depth = start.depth;

  const isEnd = (node: GenericNode): boolean =>
    (node.type === "heading" && "depth" in node && node.depth <= depth) ||
    node.type === "export";
  const end = findAfter(parent, start, isEnd);
  const endIndex = end ? parent.children.indexOf(end) : parent.children.length;

  const between = parent.children.slice(
    startIndex,
    endIndex > 0 ? endIndex : undefined
  );

  const section: SectionNode = {
    type: "section",
    depth: depth,
    children: between,
    data: {
      hName: "section",
    },
  };

  parent.children.splice(startIndex, section.children.length, section);
}

export default plugin;
