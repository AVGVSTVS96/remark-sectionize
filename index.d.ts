declare module 'remark-sectionize' {
  import { Root } from 'unist';

  type Transformer = (tree: Root) => void | Promise<void> | Root;

  type Plugin = () => Transformer;

  const remarkSectionize: Plugin;

  export default remarkSectionize;

}
