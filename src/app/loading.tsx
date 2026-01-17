'use client';

import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <span className="text-lg font-semibold tracking-wide text-primary">
        CK CineMAX
      </span>
    </div>
  );
}
