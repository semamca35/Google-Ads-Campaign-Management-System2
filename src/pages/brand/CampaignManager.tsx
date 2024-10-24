import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Campaign } from '../../types';

function CampaignManager() {
  const { data: campaigns, isLoading } = useQuery<Campaign[]>({
    queryKey: ['campaigns'],
    queryFn: async () => {
      // Implement API call
      return [];
    },
  });

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Kampanya Yönetimi</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Yeni Kampanya
        </button>
      </div>

      {isLoading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns?.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4">
              <img
                src={campaign.imageUrl}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{campaign.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Önerilen Bütçe: ₺{campaign.suggestedDailyBudget}/gün
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                  campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {campaign.status === 'active' ? 'Aktif' :
                   campaign.status === 'paused' ? 'Duraklatıldı' : 'Sona Erdi'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CampaignManager;