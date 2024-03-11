import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request) {

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  const D1 = getRequestContext().env.d1

  console.log(D1.info)
  return new Response('d1')

  const value = await KV.get('count')

  await KV.put('count', Number(value?? 0) + 1)

  const count = await KV.get('count')

  return new Response(count)
}
