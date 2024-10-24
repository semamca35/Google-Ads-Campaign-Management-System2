import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Campaign } from '../../types';
import { BarChart2, Calendar } from 'lucide-react';

function PastCampaigns() {
  const { data: campaigns, isLoading } = useQuery<Campaign[]>({
    queryKey: ['past-campaigns'],
    queryFn: async () => {
      // Implement API call
      return [];
    },
  });

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Geçmiş Kampanyalar</h2>

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
              <div key={campaign.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{campaign.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{campaign.description}</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700">
                    Sona Erdi
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <button
                  className="mt-4 w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <BarChart2 className="h-4 w-4" />
                  <span>Performans Raporu</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PastCampaigns;