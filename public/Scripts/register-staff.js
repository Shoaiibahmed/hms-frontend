    document.getElementById('staffRegisterForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorBox = document.getElementById('registerError');

  try {
    const res = await fetch('http://localhost:3100/api/auth/register/staff', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      errorBox.textContent = data.error || 'Registration failed';
      return;
    }

    alert('Staff account created successfully!');
    window.location.href = 'index.html';
  } catch (err) {
    errorBox.textContent = 'Server error. Try again later.';
  }
});
