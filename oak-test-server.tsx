import { Application } from "https://deno.land/x/oak/mod.ts";
import { gql } from "https://deno.land/x/oak_graphql/mod.ts";


const app = new Application();

app.use(async (ctx) => {
    //console.log('ctx.request: ',ctx.request);
  const result = ctx.request.body();
  //result is now a promise that will contain the body when fulfilled
  const value = await result.value;
  console.log(value);
  const ast = gql(value.query);
  console.log(ast);
  ast.definitions.forEach((element:any)=>{
    console.log("hello from the loop, currently working with element: ");
    console.log(element);
  //   console.log("selectionSet.selections[0].selectionSet.selections: ");
  //   console.log(element.selectionSet.selections[0].selectionSet.selections);
  });
  //console.log("value.query: ",value.query)
});

await app.listen({ port: 8000 });
