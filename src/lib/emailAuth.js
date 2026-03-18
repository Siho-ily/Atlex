export async function sendTestEmailCode(email) {
  const res = await fetch("/api/v1/email/send-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return await res.json();
}

export async function verifyTestEmailCode(email, code) {
  const res = await fetch("/api/v1/email/verify-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  return await res.json();
}