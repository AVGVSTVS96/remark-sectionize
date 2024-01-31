import { Root } from 'mdast';

type Transformer = (tree: Root) => void | Promise<void> | Root;

type Plugin = () => Transformer;

declare const remarkSectionize: Plugin;

export default remarkSectionize;
