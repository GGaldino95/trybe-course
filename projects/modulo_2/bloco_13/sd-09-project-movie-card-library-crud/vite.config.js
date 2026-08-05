import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Served from a subpath on the previews deployment.
export default defineConfig({
  base: '/movie-card-library-crud/',
  // classic runtime: the automatic one imports react/jsx-runtime, which only exists from
  // React 16.14 - and some of these pin 16.13. Every file here does `import React from 'react'`
  // anyway, so classic is what the code was written against.
  plugins: [react({ jsxRuntime: 'classic' })],
  // CRA allowed JSX inside .js files; esbuild's default .js loader does not, and it parses
  // before Rollup - so plugin-react's `include` is applied too late. Widening the loader here
  // keeps every source file untouched.
  esbuild: { loader: 'jsx', include: /src\/.*\.jsx?$/, exclude: [] },
  optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
});
