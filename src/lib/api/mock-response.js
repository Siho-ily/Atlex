const nowDt = () => new Date().toISOString().slice(0, 19);

export const ok = (data, message = "OK") =>
  Response.json({ code: "SUCCESS", message, data, errors: null });

export const created = (data, message) =>
  Response.json({ code: "SUCCESS", message, data, errors: null }, { status: 201 });

export const noContent = () => new Response(null, { status: 204 });

export const fail = (code, message, status, errors = null) =>
  Response.json({ code, message, data: null, errors }, { status });

export const requireAuth = (req) => {
  const auth = req.headers.get("Authorization") ?? "";
  if (!auth.startsWith("Bearer ")) {
    return fail("UNAUTHORIZED", "인증이 필요합니다.", 401);
  }
  return null;
};

export { nowDt };
