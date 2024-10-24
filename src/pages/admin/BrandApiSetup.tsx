import React from 'react';
import { useForm } from 'react-hook-form';
import { Shield, CheckCircle } from 'lucide-react';

interface ApiSetupForm {
  developerToken: string;
  clientId: string;
  clientSecret: string;
}

function BrandApiSetup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ApiSetupForm>({
    defaultValues: {
      developerToken: '3bWx7YmRq1VbIQhhhyZPLQ'
    }
  });

  const onSubmit = async (data: ApiSetupForm) => {
    try {
      // API call to save Google Ads API configuration
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      console.log('API configuration saved:', data);
    } catch (error) {
      console.error('API setup failed:', error);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">
          Google Ads API Yapılandırması
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <label className="block">
              <span className="text-gray-700">Developer Token</span>
              <div className="relative">
                <input
                  type="text"
                  {...register('developerToken', { required: 'Developer token gereklidir' })}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  readOnly
                />
                <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
              </div>
            </label>
            {errors.developerToken && (
              <p className="mt-1 text-sm text-red-600">{errors.developerToken.message}</p>
            )}
          </div>

          <label className="block">
            <span className="text-gray-700">OAuth2 Client ID</span>
            <input
              type="text"
              {...register('clientId', { required: 'Client ID gereklidir' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
              placeholder="OAuth2 Client ID"
            />
            {errors.clientId && (
              <p className="mt-1 text-sm text-red-600">{errors.clientId.message}</p>
            )}
          </label>

          <label className="block">
            <span className="text-gray-700">OAuth2 Client Secret</span>
            <input
              type="password"
              {...register('clientSecret', { required: 'Client Secret gereklidir' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
              placeholder="OAuth2 Client Secret"
            />
            {errors.clientSecret && (
              <p className="mt-1 text-sm text-red-600">{errors.clientSecret.message}</p>
            )}
          </label>
        </div>

        <div className="bg-blue-50 rounded-md p-4">
          <p className="text-sm text-blue-700">
            OAuth2 bilgilerini Google Cloud Console'dan edinebilirsiniz. Developer Token otomatik olarak yapılandırılmıştır.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Kaydediliyor...' : 'API Yapılandırmasını Kaydet'}
        </button>
      </form>
    </div>
  );
}

export default BrandApiSetup;