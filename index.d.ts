declare module 'remark-sectionize' {
  import { Root, Node } from 'mdast';
  import { VFile } from 'vfile';

  type Transformer = (tree: Root, file?: VFile) => void | Promise<void> | Root;

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
