import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/auth';
import { User } from '../types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: User['role'];
}

function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== role) {
    // Redirect to appropriate dashboard based on role
    switch (user.role) {
      case 'admin':
        return <Navigate to="/admin/brands" replace />;
      case 'brand':
        return <Navigate to="/brand/dealers" replace />;
      case 'dealer':
        return <Navigate to="/dealer/campaigns" replace />;
      default:
        return <Navigate to="/login" replace />;
    }
  }

  return <>{children}</>;
}

export default ProtectedRoute;