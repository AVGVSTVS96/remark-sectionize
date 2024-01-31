import { remark } from 'remark';
import remarkSectionize from './index';

// Valid usage: Using remarkSectionize with remark
remark().use(remarkSectionize);

// @ts-expect-error
remark().use(remarkSectionize, {});
