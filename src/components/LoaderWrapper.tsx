'use client';

import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function LoaderWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <Loader />;
} 