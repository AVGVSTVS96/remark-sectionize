import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  const dev = !!options.watch;
  return {
    entry: ['index.ts'],
    format: ['esm'],
    target: 'es2022',
    dts: true,
    sourcemap: true,
    clean: true,
    minify: !dev,
  };
});
