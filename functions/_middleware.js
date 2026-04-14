export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);
  const protectedPaths = [
    '/medidataedcredesign.html',
    '/clinical-risk-based-monitoring.html',
    '/qualisflow-02.html'
  ];

  const isProtected = protectedPaths.some(p => url.pathname === p);
  if (!isProtected) return next();

  // Check auth cookie
  const cookie = request.headers.get('Cookie') || '';
  const isAuthed = cookie.includes('cfp_auth=1');
  if (isAuthed) return next();

  // Not authed — redirect to homepage with dest param to trigger modal
  const dest = encodeURIComponent(url.pathname);
  return Response.redirect(`${url.origin}/?dest=${dest}`, 302);
}
