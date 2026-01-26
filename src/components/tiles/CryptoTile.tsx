// src/components/tiles/CryptoTile.tsx
import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

export const CryptoTile = () => {
  const [price, setPrice] = useState<string>("Loading...");

  useEffect(() => {
    // Fetch directly from browser
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=brl')
      .then(res => res.json())
      .then(data => setPrice(`R$ ${data.ethereum.brl}`))
      .catch(() => setPrice("Unavailable"));
  }, []);

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
        <TrendingUp size={20} />
        <span className="text-sm">ETH Price</span>
      </div>
      <span className="text-4xl font-bold font-mono text-neutral-800 dark:text-neutral-100">{price}</span>
    </div>
  );
};
