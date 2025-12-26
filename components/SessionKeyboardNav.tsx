'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface SessionKeyboardNavProps {
  currentSession: number;
  prevSession: number | null;
  nextSession: number | null;
}

export default function SessionKeyboardNav({ 
  currentSession, 
  prevSession, 
  nextSession 
}: SessionKeyboardNavProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowLeft' && prevSession) {
        router.push(`/sessions/${prevSession}`);
      } else if (e.key === 'ArrowRight' && nextSession) {
        router.push(`/sessions/${nextSession}`);
      } else if (e.key === 'Escape' || (e.key === 'h' && !e.metaKey && !e.ctrlKey)) {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSession, prevSession, nextSession, router]);

  return null;
}
