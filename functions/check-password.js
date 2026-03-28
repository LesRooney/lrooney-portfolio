export async function onRequestPost({ request, env }) {
  const formData = await request.formData();
  const code = formData.get('code');
  const dest = formData.get('dest') || '/';

  if (code === env.CFP_PASSWORD) {
    const headers = new Headers();
    headers.set('Location', dest);
    // Session cookie — expires when browser closes, no banner needed (strictly necessary)
    headers.append('Set-Cookie', `cfp_auth=1; Path=/; HttpOnly; Secure; SameSite=Strict`);
    return new Response(null, { status: 302, headers });
  }

  // Wrong code — back to password page with error
  const url = new URL(request.url);
  return Response.redirect(
    `${url.origin}/password.html?dest=${encodeURIComponent(dest)}&error=1`,
    302
  );
}
