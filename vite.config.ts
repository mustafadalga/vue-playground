//@ts-nocheck
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

interface Options {
  extensions: string[],
  attributes: string[],
  ignoreFolders?: string[]
  ignoreFiles?: string[]
}

import type { Plugin } from "vite"

const defaultIgnorePaths: string[] = [
    // Node.js
    'node_modules',

    // Git
    '.git',

    // IDE configurations
    '.idea', // JetBrains IDEs (e.g., WebStorm)
    '.vscode', // Visual Studio Code

    // OS generated files
    '.DS_Store', // macOS
    'Thumbs.db', // Windows

    // Build output
    'dist',
    'build',

    // Configuration files
    '.env', // Environment variables
    'config', // General config folder

    // Logs
    'logs',
    '*.log',

    // Vue.js
    '.nuxt', // Nuxt.js generates this folder

    // React.js
    '.next', // Next.js generates this folder

    // Remix.js
    '.remix', // Remix.js cache

    // Angular
    'e2e', // End-to-end tests in Angular
    'angular.json', // Angular CLI configuration
    'browserslist', // Browser compatibility list for Angular

    // Svelte
    'public/build', // Default output directory for Svelte

    // Lit
    'lit.config.js', // Lit configuration file

    // Other
    'coverage', // Code coverage reports
    '.cache', // Cache files for various tools
    'public' // Folder commonly used for static assets
];

export function getOptions(options: Options): Options {
    return {
        extensions: Array.isArray(options.extensions) ? options.extensions : [],
        ignoreFolders: Array.isArray(options.ignoreFolders) ? options.ignoreFolders : [],
        ignoreFiles: Array.isArray(options.ignoreFiles) ? options.ignoreFiles : [],
        attributes: Array.isArray(options.attributes) ? options.attributes : [],
    }
}

export function getIgnoredPaths(options: Options): string[] {
    const inValidPaths: string[] = [ ".", "./", "/", "/." ];
    const ignoredFolders: string[] = cleanIgnoredPaths(options.ignoreFolders, inValidPaths).filter(path => isFolder(path))
    const ignoredFiles: string[] = cleanIgnoredPaths(options.ignoreFiles, inValidPaths).filter(path => isFile(path))
    const ignoredPaths: string[] = ignoredFolders.concat(ignoredFiles)

    return ignoredPaths;
};

export function isString(path: string): boolean {
    if (!path || typeof path != "string") {
        return false;
    }

    return true;
}

export function cleanString(path: string): string {
    let cleanedPath: string = path.trim();
    cleanedPath = cleanedPath.startsWith("./") ? path.substring(2) : cleanedPath;

    return cleanedPath
}


export function hasIgnorePath(id: string, paths?: string[]): boolean {
    const ignoredPaths: string[] = paths || defaultIgnorePaths
    return ignoredPaths.some((path: string) => id.includes(path));
}

export function cleanIgnoredPaths(paths: string[], inValidPaths: string[]): string[] {
    return [
        ...new Set(
            paths.filter((path: string) => !inValidPaths.includes(path) && isString(path) && cleanString(path).length).map(path => cleanString(path))
        )
    ]
}

export function isFile(path: string): boolean {
    if (!path.length || path.length < 3) {
        return false;
    }

    const parts: string[] = path.split('/');

    const fileName: string = parts[parts.length - 1];
    const fileExtension: string[] = fileName.split('.').filter(c => c);

    if (fileExtension.length < 2 || fileName.length < 3 || fileName.includes('/')) {
        return false;
    }

    return true;
}

export function isFolder(path: string): boolean {
    if (isFile(path)) return false;

    // Check for valid characters - alphanumeric, underscore, dash, dot and slash are allowed
    const validCharacters: RegExp = /^[a-zA-Z0-9_.-/]*$/;
    return validCharacters.test(path);
}

export function hasExtension(id: string, options: Options): boolean {
    const extensionsRegex: RegExp = new RegExp(`\\.(${options.extensions.join('|')})$`, 'i');
    return extensionsRegex.test(id)
}

export function removeAttributes(input: string, attributes: string[]): string {
    let output: string = input;

    attributes.forEach((attribute) => {
        const regex: RegExp = new RegExp(
            `(\\s(:|v-bind:)?${attribute}\\s*=\\s*(['"\`])((?:(?!\\3).)*)(\\3))|(\\s(:|v-bind:)?${attribute}(?=[\\s>]))`,
            "gi"
        );
        output = output.replace(regex, '');
    });
    return output;
}

function removeAttributesPlugin(options: Options): Plugin {
  const optionList: Options = getOptions(options);
  const ignoredPaths: string[] = getIgnoredPaths(optionList)

  return {
      name: 'remove-attributes',
      enforce: 'pre',
      transform(code: string, id: string): string {
          if (hasIgnorePath(id)) {
              return code;
          }
          if (hasIgnorePath(id, ignoredPaths)) {
              return code;
          }
          if (!hasExtension(id, optionList)) {
              return code;
          }

          // console.log("id",id)

         
          const cleanCode=removeAttributes(code, optionList.attributes)
          const hs=code.replaceAll(`id="ayhan"`,`id="ayhan" class="melike"`)
          console.log("code",hs)

          return hs
      },
  };
}



// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => {

  const config = {
    plugins: [
      {
        name: 'add-class-ayhan',
        enforce: 'pre',
        transform(code: string, id: string): string {
            const hs=code.replaceAll(`id="ayhan"`,`id="ayhan" class="melike"`)
            return hs
        },
      },
      vue(),
  

    ],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
          assetFileNames: '[name][extname]'
        }
      }
    }
  }

  return config
  })
