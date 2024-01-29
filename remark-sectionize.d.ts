// remark-sectionize.d.ts

declare module 'remark-sectionize' {

    import { Node } from 'unist';
  
    interface SectionNode extends Node {
      type: 'section';
      depth: number;
      children: Node[];
      data?: {
        hName: string; 
      }
    }
  
    interface Plugin {
      (): Transformer;
    }
  
    type Transformer = (tree: Node) => void;
  
    interface Config {
      maxDepth?: number;
    }
  
    const remarkSectionize: Plugin;
  
    export default remarkSectionize;
  
  }