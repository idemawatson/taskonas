import Koa from 'koa'
import logger from './middleware/logger'
import log4js from 'log4js'
import errorHandler from './middleware/errorHandler'
import bodyParser from 'koa-bodyparser'

const { Nuxt, Builder } = require('nuxt')

const app: Koa = new Koa()
// Import and Set Nuxt.js options
const config: any = require('../nuxt.config.ts')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const { host = process.env.HOST || '127.0.0.1', port = process.env.PORT || 3000 } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(logger)
  app.use(errorHandler)
  app.use(bodyParser)
  app.use((ctx: Koa.Context) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    // ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  log4js.getLogger().info(`Server listening on http://${host}:${port}`)
}

start()
