declare module 'remark-sectionize' {
  import { Node, Root } from 'unist';

  type Transformer = (tree: Root) => void | Promise<void> | Root;

  type Plugin = () => Transformer;

  interface SectionNode extends Node {
    type: 'section';
    children: Node[];
    depth?: number;
    data?: { hName: string };
  }

  const remarkSectionize: Plugin;

  export default remarkSectionize;

}
