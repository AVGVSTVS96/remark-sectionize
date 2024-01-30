declare module 'remark-sectionize' {
  import { Node } from 'unist';

  type Transformer = (tree: Node) => void;

  interface Plugin<T = void> {
    (): Transformer;
  }

  const remarkSectionize: Plugin<void>;

  export default remarkSectionize;
}
