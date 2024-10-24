import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Play, Pause, Settings, AlertTriangle } from 'lucide-react';

interface Activity {
  id: string;
  type: 'start' | 'pause' | 'update' | 'error';
  campaignId: string;
  campaignTitle: string;
  timestamp: string;
  description: string;
}

function ActivityLog() {
  const { data: activities, isLoading } = useQuery<Activity[]>({
    queryKey: ['activities'],
    queryFn: async () => {
      // Implement API call
      return [];
    },
  });

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'start':
        return <Play className="h-5 w-5 text-green-500" />;
      case 'pause':
        return <Pause className="h-5 w-5 text-yellow-500" />;
      case 'update':
        return <Settings className="h-5 w-5 text-blue-500" />;
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Aktivite Geçmişi</h2>

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
          <div className="flow-root">
            <ul className="-mb-8">
              {activities?.map((activity, index) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {index !== activities.length - 1 && (
                      <span
                        className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex items-start space-x-3">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center ring-8 ring-white">
                          {getActivityIcon(activity.type)}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">
                              {activity.campaignTitle}
                            </span>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {activity.description}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          <time dateTime={activity.timestamp}>
                            {new Date(activity.timestamp).toLocaleString()}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityLog;