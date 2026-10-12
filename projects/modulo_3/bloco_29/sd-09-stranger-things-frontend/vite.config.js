import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// Served from a subpath on the previews deployment.
export default defineConfig(({ mode }) => {
  // The component reads process.env.REACT_APP_*, which CRA inlined at build time from .env and Vite
  // does not provide. Defining each one here inlines them the same way, so the component is untouched.
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');

  return {
    base: '/stranger-things/',
    // classic runtime: the automatic one imports react/jsx-runtime, which only exists from
    // React 16.14 - and this pins 16.13. Every file here does `import React from 'react'`
    // anyway, so classic is what the code was written against.
    plugins: [react({ jsxRuntime: 'classic' })],
    define: Object.fromEntries(
      Object.entries(env).map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)]),
    ),
    // CRA allowed JSX inside .js files; esbuild's default .js loader does not, and it parses
    // before Rollup - so plugin-react's `include` is applied too late. Widening the loader here
    // keeps every source file untouched.
    esbuild: { loader: 'jsx', include: /src\/.*\.jsx?$/, exclude: [] },
    optimizeDeps: { esbuildOptions: { loader: { '.js': 'jsx' } } },
  };
});
