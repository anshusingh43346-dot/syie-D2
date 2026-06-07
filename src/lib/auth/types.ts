import type { AppRole } from "@/lib/auth/dev-mode";

export type CurrentUser = {
  id: string;
  email: string | null;
  role: AppRole | null;
  isDevUser: boolean;
};
