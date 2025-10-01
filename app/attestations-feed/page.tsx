'use client';

import React, { useState } from 'react';
import { useAttestations } from '../context/AttestationContext';
import AttestationFeedItem from '../components/AttestationFeedItem';

type FilterType = 'all' | 'social' | 'skills' | 'work';

export default function AttestationsFeedPage() {
  const { attestations } = useAttestations();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters = [
    { key: 'all' as FilterType, label: 'All Attestations' },
    { key: 'social' as FilterType, label: 'Social Profiles' },
    { key: 'skills' as FilterType, label: 'Skills & Credentials' },
    { key: 'work' as FilterType, label: 'Work History' },
  ];

  const filteredAttestations = attestations.filter(attestation => {
    switch (activeFilter) {
      case 'social':
        return attestation.claimType.toLowerCase().includes('social');
      case 'skills':
        return attestation.claimType.toLowerCase().includes('skill') || attestation.claimType.toLowerCase().includes('credential');
      case 'work':
        return attestation.claimType.toLowerCase().includes('work') || attestation.claimType.toLowerCase().includes('history');
      default:
        return true;
    }
  });

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Attestations Feed</h1>
          <p className="text-lg text-gray-600">View and manage your digital attestations and verifications</p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Attestations List */}
        <div className="space-y-6">
          {filteredAttestations.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No attestations found</h3>
              <p className="text-gray-500">
                {activeFilter === 'all'
                  ? 'You haven\'t received any attestations yet.'
                  : `No ${filters.find(f => f.key === activeFilter)?.label.toLowerCase()} found.`
                }
              </p>
            </div>
          ) : (
            filteredAttestations.map((attestation) => (
              <AttestationFeedItem
                key={attestation.id}
                id={attestation.id}
                txType={attestation.txType}
                issuerDid={attestation.issuerDid}
                holderDid={attestation.holderDid}
                claimType={attestation.claimType}
                commitmentPeriod={attestation.commitmentPeriod}
                schemaId={attestation.schemaId}
                timestamp={attestation.timestamp}
                blockNumber={attestation.blockNumber}
                soulPoints={attestation.soulPoints}
              />
            ))
          )}
        </div>

        {/* Load More Button - Only show if there are attestations */}
        {filteredAttestations.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                // TODO: Implement load more functionality
                alert('Load more functionality not implemented yet');
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Load More Attestations
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
