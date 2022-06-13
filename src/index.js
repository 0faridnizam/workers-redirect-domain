import domain from '../domain'

/**
 * Worker entry point.
 */
addEventListener('fetch', event => {
  event.passThroughOnException()
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url)

  if (url.hostname in domain) {
    url.hostname = domain[url.hostname]
    return new Response(null, {
      status: 302,
      headers: { Location: url.href },
    })
  } else {
    return new Response('Domain Not Configured!\nSee code on Github: ', {
      status: 404,
      headers: {
        'content-type': 'text/plain',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  }
}
