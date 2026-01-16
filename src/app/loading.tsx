'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <span className="text-lg font-semibold tracking-wide text-primary">
        CK CineMAX
      </span>
    </div>
  );
}
