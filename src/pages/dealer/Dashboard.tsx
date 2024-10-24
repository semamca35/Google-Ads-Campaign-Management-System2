import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, History, Activity } from 'lucide-react';
import CampaignsList from './CampaignsList';
import ActiveCampaigns from './ActiveCampaigns';
import PastCampaigns from './PastCampaigns';
import ActivityLog from './ActivityLog';

function DealerDashboard() {
  return (
    <div className="space-y-6">
      <nav className="bg-white shadow-sm rounded-lg p-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/dealer/campaigns"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Kurulacak Kampanyalar</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dealer/active"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Aktif Kampanyalar</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dealer/history"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <History className="h-5 w-5" />
              <span>Geçmiş Kampanyalar</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dealer/activity"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Activity className="h-5 w-5" />
              <span>Aktivite</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/campaigns" element={<CampaignsList />} />
        <Route path="/active" element={<ActiveCampaigns />} />
        <Route path="/history" element={<PastCampaigns />} />
        <Route path="/activity" element={<ActivityLog />} />
      </Routes>
    </div>
  );
}

export default DealerDashboard;