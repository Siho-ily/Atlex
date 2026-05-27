import { noContent, requireAuth } from "@/lib/api/mock-response";

export async function DELETE(req) {
  const authError = requireAuth(req);
  if (authError) return authError;

  return noContent();
}
