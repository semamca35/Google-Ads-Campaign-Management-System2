import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface BrandCampaignsProps {
  brandId: string;
}

function BrandCampaigns({ brandId }: BrandCampaignsProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <ShoppingBag className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">
          Kampanyalar
        </h3>
      </div>
      
      {/* Campaign list implementation */}
      <div className="text-gray-500">Kampanya listesi yükleniyor...</div>
    </div>
  );
}

export default BrandCampaigns;