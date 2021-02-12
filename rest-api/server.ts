import { Application } from "https://deno.land/x/oak@v6.5.0/mod.ts"
import router from './routes.ts'
const port:number = 8080

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Server running on port ${port}`)
await app.listen({ port })