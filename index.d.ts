declare module 'remark-sectionize' {
  import { Root, Node } from 'mdast';

  type Transformer = (tree: Root) => void | Promise<void> | Root;

  type RemarkPlugin = () => Transformer;

  interface SectionNode extends Node {
    type: 'section';
    children: Node[];
    depth?: number;
    data?: { hName: string };
  }

  declare const remarkSectionize: RemarkPlugin<any[]>;

  export default remarkSectionize;

}
