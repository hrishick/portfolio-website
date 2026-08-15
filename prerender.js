import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const { html } = render()

const finalHtml = template.replace(`<!--app-html-->`, html)

fs.writeFileSync(toAbsolute('dist/static/index.html'), finalHtml)

console.log('Prerendering completed successfully.')
