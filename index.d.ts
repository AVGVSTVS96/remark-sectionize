declare module 'remark-sectionize' {
  import { Root } from 'mdast';
  import { Node } from 'unist';

  type Transformer = (tree: Root) => void | Promise<void> | Root;

  type Plugin<T> = () => Transformer;

  interface SectionNode extends Node {
    type: 'section';
    children: Node[];
    depth?: number;
    data?: { hName: string };
  }

  const remarkSectionize: Plugin<[]>;

  export default remarkSectionize;

}
