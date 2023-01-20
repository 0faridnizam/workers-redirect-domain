import domain from '../domain';

/**
 * Worker entry point.
 */
addEventListener('fetch', (event) => {
  event.passThroughOnException();
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond worker
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.hostname in domain) {
    url.hostname = domain[url.hostname];
    return new Response(null, {
      status: 302,
      headers: {
        Location: url.href,
        'X-Content-Type-Options': 'nosniff',
        'X-Redirect-Powered-By': 'Nanyaterus Workers',
      },
    });
  } else {
    return new Response('Domain Not Configured!', {
      status: 404,
      headers: {
        'content-type': 'text/plain',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  }
}
