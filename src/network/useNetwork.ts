// src/network/useNetwork.ts

import { useContext } from 'react';
import { NetworkContext } from './NetworkProvider';

export const useNetwork = () => {
  const context = useContext(NetworkContext);

  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }

  return context;
};