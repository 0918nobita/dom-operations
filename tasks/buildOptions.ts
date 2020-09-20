import { BuildOptions } from 'esbuild';

export const buildOptions: BuildOptions = {
    color: true,
    entryPoints: ['./src/index.ts'],
    outfile: './dist/index.js',
    bundle: true,
    sourcemap: true,
    tsconfig: './tsconfig.json',
    platform: 'browser',
    logLevel: 'error',
};
