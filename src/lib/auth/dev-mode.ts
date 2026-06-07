export const DEV_MODE_COOKIE = "syie_dev_role";

export const APP_ROLES = ["learner", "creator", "admin"] as const;

export type AppRole = (typeof APP_ROLES)[number];

export const isDevModeEnabled = process.env.NEXT_PUBLIC_DEV_MODE === "true";

export function isAppRole(value: unknown): value is AppRole {
  return typeof value === "string" && APP_ROLES.includes(value as AppRole);
}

export function getMockUserForRole(role: AppRole) {
  return {
    id: `dev-${role}-user`,
    email: `${role}@dev.syie.local`,
    role,
    isDevUser: true,
  } as const;
}
