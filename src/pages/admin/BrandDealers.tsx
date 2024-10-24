import React from 'react';
import { Users } from 'lucide-react';

interface BrandDealersProps {
  brandId: string;
}

function BrandDealers({ brandId }: BrandDealersProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Users className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">
          Bayiler
        </h3>
      </div>
      
      {/* Dealer list implementation */}
      <div className="text-gray-500">Bayi listesi yükleniyor...</div>
    </div>
  );
}

export default BrandDealers;