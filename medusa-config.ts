import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  // admin: {
  //   // disable: process.env.ADMIN_DISABLED === "true",
  //   // backendUrl: process.env.ADMIN_CORS,
  // }
  admin: {
    vite: () => {
      return {
        server: {
          // allowedHosts: [".e0c0-2001-558-1401-10-00-2baf.ngrok-free.app"],
          allowedHosts: [".medcuh252g5iop060oe8p20.nomodo.app"],
        },
      };
    },
  },
})
