"use client";

import { Button, Card } from "@/components/ui";
import { APP_ROLES, isDevModeEnabled, type AppRole } from "@/lib/auth/dev-mode";

import { useUser } from "./dev-user-provider";

const roleLabels: Record<AppRole, string> = {
  learner: "Learner",
  creator: "Creator",
  admin: "Admin",
};

export function DeveloperModeSwitcher() {
  const { role, setDevRole } = useUser();

  if (!isDevModeEnabled) {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 z-[100] w-56 border-gold/25 bg-charcoal/95 p-3 shadow-[0_0_35px_rgba(124,92,255,0.18)]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">
            Developer Mode
          </p>
          <p className="mt-1 text-xs text-ivory/55">Local role override</p>
        </div>
        <span className="rounded-full border border-purple/30 bg-purple/15 px-2 py-1 text-[0.65rem] font-semibold text-[#cabeff]">
          {role ? roleLabels[role] : "Off"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {APP_ROLES.map((appRole) => (
          <Button
            key={appRole}
            type="button"
            size="sm"
            variant={role === appRole ? "gold" : "ghost"}
            className="rounded-xl px-2 py-1.5 text-[0.68rem]"
            onClick={() => setDevRole(appRole)}
          >
            {roleLabels[appRole]}
          </Button>
        ))}
      </div>

      <Button
        type="button"
        size="sm"
        variant="secondary"
        className="mt-2 w-full rounded-xl px-3 py-1.5 text-xs"
        onClick={() => setDevRole(null)}
      >
        Clear
      </Button>
    </Card>
  );
}
