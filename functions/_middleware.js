/**
 * Cloudflare Pages — Password Protection Middleware
 * Protects specific case study pages with a shared password.
 *
 * To add/remove protected pages: edit PROTECTED_PATHS below.
 * Password is set via the SITE_PASSWORD environment variable
 * in the Cloudflare Pages dashboard (Settings → Environment variables).
 * Fallback default: RooneyFlow
 */

const PROTECTED_PATHS = [
  '/medidataedcredesign',
  '/contech-qflow',
];

const COOKIE_NAME = 'lr_portfolio_auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';

  // Check if this path needs protection
  const isProtected = PROTECTED_PATHS.some(p =>
    path === p || path.startsWith(p + '/')
  );

  if (!isProtected) {
    return next();
  }

  const password = env.SITE_PASSWORD || 'RooneyFlow';
  const tokenValue = btoa(password + ':portfolio');

  // Check existing auth cookie
  const cookies = request.headers.get('Cookie') || '';
  const authCookie = cookies.split(';').map(c => c.trim()).find(c => c.startsWith(COOKIE_NAME + '='));
  if (authCookie) {
    const value = authCookie.split('=').slice(1).join('=').trim();
    if (value === tokenValue) {
      return next();
    }
  }

  // Handle form submission (POST)
  if (request.method === 'POST') {
    let submitted = '';
    try {
      const formData = await request.formData();
      submitted = formData.get('password') || '';
    } catch {
      return showPasswordForm(path, true);
    }

    if (submitted === password) {
      // Correct — set cookie and redirect back to the page
      const redirectResponse = new Response(null, {
        status: 302,
        headers: {
          'Location': request.url,
          'Set-Cookie': `${COOKIE_NAME}=${tokenValue}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${COOKIE_MAX_AGE}`,
        },
      });
      return redirectResponse;
    }

    // Wrong password
    return showPasswordForm(path, true);
  }

  // Not authenticated — show password gate
  return showPasswordForm(path, false);
}

function showPasswordForm(path, error) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Protected Case Study — Lesley Rooney</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      background: #FDFDFC;
      color: #0A0A0A;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
      -webkit-font-smoothing: antialiased;
    }

    .card {
      background: #fff;
      border: 1px solid #e2e0d8;
      border-radius: 20px;
      padding: 52px 44px;
      max-width: 400px;
      width: 100%;
      text-align: center;
      box-shadow: 0 2px 24px rgba(0,0,0,0.06);
    }

    .lock-wrap {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: #efede7;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      font-size: 1.4rem;
    }

    h1 {
      font-size: 1.15rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      margin-bottom: 8px;
    }

    p {
      font-size: 0.85rem;
      color: #717171;
      line-height: 1.6;
      margin-bottom: 32px;
    }

    input[type="password"] {
      width: 100%;
      padding: 13px 16px;
      border: 1px solid #e2e0d8;
      border-radius: 10px;
      font-size: 0.9rem;
      font-family: inherit;
      background: #FDFDFC;
      color: #0A0A0A;
      outline: none;
      transition: border-color 0.15s;
    }

    input[type="password"]:focus {
      border-color: #0A0A0A;
    }

    input[type="password"]${error ? '.input-error' : ''} {
      border-color: ${error ? '#c0392b' : '#e2e0d8'};
    }

    .error-msg {
      color: #c0392b;
      font-size: 0.78rem;
      margin-top: 8px;
      text-align: left;
    }

    button {
      width: 100%;
      margin-top: 14px;
      padding: 13px;
      background: #0A0A0A;
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 0.875rem;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      letter-spacing: 0.01em;
      transition: background 0.15s;
    }

    button:hover { background: #2a2a2a; }

    .back {
      margin-top: 28px;
      font-size: 0.78rem;
    }

    .back a {
      color: #717171;
      text-decoration: none;
      transition: color 0.15s;
    }

    .back a:hover { color: #0A0A0A; }

    .wordmark {
      margin-top: 48px;
      font-size: 0.75rem;
      color: #bbb;
      letter-spacing: 0.04em;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="lock-wrap">🔒</div>
    <h1>Password Protected</h1>
    <p>This case study is available under NDA.<br>Enter the password to view, or reach out to Lesley directly.</p>
    <form method="POST" action="${path}">
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        autofocus
        autocomplete="current-password"
        class="${error ? 'input-error' : ''}"
      >
      ${error ? '<div class="error-msg">Incorrect password — please try again.</div>' : ''}
      <button type="submit">View Case Study →</button>
    </form>
    <div class="back"><a href="/">← Back to portfolio</a></div>
  </div>
  <div class="wordmark">Lesley Rooney — Portfolio</div>
</body>
</html>`;

  return new Response(html, {
    status: error ? 401 : 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
