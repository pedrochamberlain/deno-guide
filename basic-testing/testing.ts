// DENO STANDARD LIBRARIES
import { dayOfYear } from 'https://deno.land/std@0.87.0/datetime/mod.ts'

const greeting:string = "Looks like Deno is running."
console.log(greeting)

console.log("This is the ", dayOfYear(new Date()), "th day of the year.")

// USING FILES IN DENO
const encoder = new TextEncoder()
const greetText = encoder.encode('Hey! Is this thing working?\nMy name is Pedro.')

await Deno.writeFile('greet.txt', greetText) // To use this function, you need to run "deno run --allow-write index.ts"
let file = await Deno.open('greet.txt') // To use this function, you need to run "deno run --allow-read index.ts"
await Deno.copy(file, Deno.stdout)
file.close()

// CREATING A SERVER WITH DENO
import { serve } from "https://deno.land/std@0.87.0/http/server.ts"
const server = serve( { port : 8080 } ) // To use this function, you need to run "deno run --allow-net index.ts"

for await (const req of server) {
    req.respond( { body: "This should be working.\n" } )
}

