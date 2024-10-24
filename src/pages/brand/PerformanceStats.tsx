import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BarChart as BarChartIcon, TrendingUp, Users, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CampaignStats } from '../../types';

function PerformanceStats() {
  const { data: stats, isLoading } = useQuery<CampaignStats[]>({
    queryKey: ['campaign-stats'],
    queryFn: async () => {
      // Implement API call
      return [];
    },
  });

  const totalStats = stats?.reduce(
    (acc, curr) => ({
      impressions: acc.impressions + curr.impressions,
      clicks: acc.clicks + curr.clicks,
      cost: acc.cost + curr.cost,
      ctr: (acc.clicks + curr.clicks) / (acc.impressions + curr.impressions) * 100,
    }),
    { impressions: 0, clicks: 0, cost: 0, ctr: 0 }
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BarChartIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Gösterimler</p>
              <p className="text-2xl font-semibold text-gray-900">
                {totalStats?.impressions.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Tıklamalar</p>
              <p className="text-2xl font-semibold text-gray-900">
                {totalStats?.clicks.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">CTR</p>
              <p className="text-2xl font-semibold text-gray-900">
                {totalStats?.ctr.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Toplam Maliyet</p>
              <p className="text-2xl font-semibold text-gray-900">
                ₺{totalStats?.cost.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performans Grafiği</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="impressions" fill="#3B82F6" name="Gösterimler" />
              <Bar dataKey="clicks" fill="#10B981" name="Tıklamalar" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default PerformanceStats;