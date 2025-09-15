document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const loginError = document.getElementById('loginError');

  try {
    const res = await fetch('http://localhost:3100/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      loginError.textContent = data.error || 'Login failed';
      return;
    }

    // Save token and redirect
    localStorage.setItem('token', data.token);
    localStorage.setItem('userRole', data.role); // if returned
    window.location.href = 'index.html';
  } catch (err) {
    loginError.textContent = 'Server error. Try again later.';
  }
});
