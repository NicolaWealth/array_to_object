import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'ArrayToObject',
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        declaration: false,
        declarationMap: false,
        composite: false,
        module: 'ESNext',
        sourceMap: true,
      },
    }),
    terser(),
  ],
};
