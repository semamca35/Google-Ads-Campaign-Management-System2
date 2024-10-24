import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import AdminDashboard from './pages/admin/Dashboard';
import BrandDashboard from './pages/brand/Dashboard';
import DealerDashboard from './pages/dealer/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import DealerSetup from './pages/dealer/Setup';
import { useAuthStore } from './stores/auth';

const queryClient = new QueryClient();

function App() {
  const { user } = useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Brand Routes */}
            <Route
              path="/brand/*"
              element={
                <ProtectedRoute role="brand">
                  <BrandDashboard />
                </ProtectedRoute>
              }
            />

            {/* Dealer Routes */}
            <Route
              path="/dealer/setup"
              element={
                <ProtectedRoute role="dealer">
                  <DealerSetup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dealer/*"
              element={
                <ProtectedRoute role="dealer">
                  <DealerDashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;