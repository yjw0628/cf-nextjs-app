export const runtime = 'edge'

export async function GET(request) {

  const location = {
    ip: request.headers.get('cf-connecting-ip'),
    region: request.cf?.region,
    city: request.cf?.city,
    ISP: request.cf?.asOrganization
  }
  return Response.json(location)

}