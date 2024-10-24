import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import BrandApiSetup from './BrandApiSetup';
import BrandDealers from './BrandDealers';
import BrandCampaigns from './BrandCampaigns';

function BrandDetails() {
  const { brandId } = useParams();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Marka Detayları
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrandApiSetup />
          
          <div className="space-y-6">
            <BrandDealers brandId={brandId!} />
            <BrandCampaigns brandId={brandId!} />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/dealers" element={<BrandDealers brandId={brandId!} />} />
        <Route path="/campaigns" element={<BrandCampaigns brandId={brandId!} />} />
      </Routes>
    </div>
  );
}

export default BrandDetails;