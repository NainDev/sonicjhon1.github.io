/**
 * An object with different URLs to fetch
 * @param {Object} ORIGINS
 */
 const ORIGINS = {
  'starwarsapi.yourdomain.com': 'swapi.dev',
  'google.yourdomain.com': 'www.google.com',
};

function handleRequest(request) {
  const url = new URL(request.url);
  // Check if incoming hostname is a key in the ORIGINS object
  if (true) {
    const target = "i.instagram.com"
    const ptarget = "api/v1/users/web_profile_info/?username=sonic_jhon"
    url.hostname = target;
    url.pathname = ptarget;
    // If it is, proxy request to that third party origin
    return fetch(url.toString(), request);
  }

  // Otherwise, process request as normal
  return fetch(request);
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});