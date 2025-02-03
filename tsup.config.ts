import { defineConfig, Options } from 'tsup'
import { umdWrapper } from 'esbuild-plugin-umd-wrapper'

const baseConfig: Options = {
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  // @ts-ignore
  format: ['cjs', 'esm', 'umd'],
  outDir: 'dist',
  outExtension({ format, options }) {
    const ext = format === 'esm' ? 'mjs' : 'js'
    const outputExtension = options.minify ? `${format}.min.${ext}` : `${format}.${ext}`

    return {
      js: `.${outputExtension}`,
    }
  },
  bundle: true,
  esbuildPlugins: [umdWrapper()],
  esbuildOptions(options, context) {
    // @ts-ignore
    if (context.format == 'umd') {
      options.plugins = [umdWrapper()]
    }
  },
}

export default defineConfig([
  // CommonJS, ESM & UMD
  baseConfig,

  // Minified CommonJS & UMD
  {
    ...baseConfig,
    // @ts-ignore
    format: ['cjs', 'umd'],
    minify: true,
  },

  // DTS
  {
    entry: baseConfig.entry,
    dts: true,
  },
])
