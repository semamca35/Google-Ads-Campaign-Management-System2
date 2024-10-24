import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LogOut, Settings, Bell } from 'lucide-react';
import { useAuthStore } from '../stores/auth';

function Layout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">
                  Google Ads Manager
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="p-2 rounded-full text-gray-400 hover:text-gray-500"
              >
                <Bell className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="ml-3 p-2 rounded-full text-gray-400 hover:text-gray-500"
                onClick={() => navigate('/settings')}
              >
                <Settings className="h-6 w-6" />
              </button>
              <button
                type="button"
                className="ml-3 p-2 rounded-full text-gray-400 hover:text-gray-500"
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
              >
                <LogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;