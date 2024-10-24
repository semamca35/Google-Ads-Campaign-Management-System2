import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Users, ShoppingBag, BarChart } from 'lucide-react';
import DealersList from './DealersList';
import CampaignManager from './CampaignManager';
import PerformanceStats from './PerformanceStats';

function BrandDashboard() {
  return (
    <div className="space-y-6">
      <nav className="bg-white shadow-sm rounded-lg p-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/brand/dealers"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Users className="h-5 w-5" />
              <span>Bayiler</span>
            </Link>
          </li>
          <li>
            <Link
              to="/brand/campaigns"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Kampanyalar</span>
            </Link>
          </li>
          <li>
            <Link
              to="/brand/performance"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <BarChart className="h-5 w-5" />
              <span>Performans</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/dealers" element={<DealersList />} />
        <Route path="/campaigns/*" element={<CampaignManager />} />
        <Route path="/performance" element={<PerformanceStats />} />
      </Routes>
    </div>
  );
}

export default BrandDashboard;