'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Attestation {
  id: string;
  txType: string;
  issuerDid: string;
  holderDid: string;
  claimType: string;
  commitmentPeriod: string;
  schemaId: string;
  timestamp: number;
  blockNumber: number;
  soulPoints: number;
}

interface AttestationContextType {
  attestations: Attestation[];
  addAttestation: (attestation: Attestation) => void;
}

const AttestationContext = createContext<AttestationContextType | undefined>(undefined);

export const AttestationProvider = ({ children }: { children: ReactNode }) => {
  const [attestations, setAttestations] = useState<Attestation[]>([]);

  const addAttestation = (attestation: Attestation) => {
    setAttestations((prev) => [attestation, ...prev]);
  };

  return (
    <AttestationContext.Provider value={{ attestations, addAttestation }}>
      {children}
    </AttestationContext.Provider>
  );
};

export const useAttestations = (): AttestationContextType => {
  const context = useContext(AttestationContext);
  if (!context) {
    throw new Error('useAttestations must be used within an AttestationProvider');
  }
  return context;
};
