import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Building2, Users } from 'lucide-react';
import BrandsList from './BrandsList';
import BrandDetails from './BrandDetails';

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <nav className="bg-white shadow-sm rounded-lg p-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/admin/brands"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Building2 className="h-5 w-5" />
              <span>Markalar</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/dealers"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Users className="h-5 w-5" />
              <span>Bayiler</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/brands" element={<BrandsList />} />
        <Route path="/brands/:brandId/*" element={<BrandDetails />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;