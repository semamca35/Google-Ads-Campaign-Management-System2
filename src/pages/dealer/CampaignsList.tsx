import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Campaign } from '../../types';
import { Calendar, DollarSign, Tag } from 'lucide-react';

function CampaignsList() {
  const { data: campaigns, isLoading } = useQuery<Campaign[]>({
    queryKey: ['available-campaigns'],
    queryFn: async () => {
      // Implement API call
      return [];
    },
  });

  if (isLoading) {
    return (
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Kurulabilir Kampanyalar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns?.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg overflow-hidden">
              <img
                src={campaign.imageUrl}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{campaign.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{campaign.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>Önerilen Günlük Bütçe: ₺{campaign.suggestedDailyBudget}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Tag className="h-4 w-4 mr-2" />
                    <div className="flex flex-wrap gap-1">
                      {campaign.categories.map((category, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Kampanyayı Kur
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CampaignsList;