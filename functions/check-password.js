export async function onRequestPost({ request, env }) {
  const formData = await request.formData();
  const code = formData.get('code');
  const dest = formData.get('dest') || '/';
  const isAjax = request.headers.get('X-Requested-With') === 'fetch';

  if (code.toLowerCase() === env.CFP_PASSWORD.toLowerCase()) {
    const cookieHeader = `cfp_auth=1; Path=/; Secure; SameSite=Strict`;
    if (isAjax) {
      return new Response(JSON.stringify({ success: true, dest }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Set-Cookie': cookieHeader }
      });
    }
    const headers = new Headers();
    headers.set('Location', dest);
    headers.append('Set-Cookie', cookieHeader);
    return new Response(null, { status: 302, headers });
  }

  if (isAjax) {
    return new Response(JSON.stringify({ success: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Wrong code — back to password page with error (non-AJAX fallback)
  const url = new URL(request.url);
  return Response.redirect(
    `${url.origin}/password.html?dest=${encodeURIComponent(dest)}&error=1`,
    302
  );
}
