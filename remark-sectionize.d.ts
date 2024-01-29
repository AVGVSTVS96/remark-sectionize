declare module "remark-sectionize" {
  import { Node } from "unist";

  interface Plugin {
    (): Transformer;
  }

  type Transformer = (tree: Node) => void;

  const remarkSectionize: Plugin;

  export default remarkSectionize;
}
