"use client";

import { useEffect } from 'react';

export default function TestFetch() {
  useEffect(() => {
    fetch('https://dummyjson.com/test')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return <div>Check the console for the fetch response!</div>;
}
