import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface SetupForm {
  hasGoogleAdsAccount: boolean;
  googleAdsCustomerId?: string;
  representativeName: string;
  representativeSurname: string;
  phone: string;
  appointmentRequest?: boolean;
}

function DealerSetup() {
  const { register, handleSubmit, watch } = useForm<SetupForm>();
  const navigate = useNavigate();
  const hasAccount = watch('hasGoogleAdsAccount');

  const onSubmit = async (data: SetupForm) => {
    try {
      // API call to save setup data
      navigate('/dealer/campaigns');
    } catch (error) {
      console.error('Setup failed:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Hesap Kurulumu
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Google Ads Hesabınız var mı?</span>
            <select
              {...register('hasGoogleAdsAccount')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            >
              <option value="true">Evet</option>
              <option value="false">Hayır, oluşturmak istiyorum</option>
            </select>
          </label>

          {hasAccount && (
            <label className="block">
              <span className="text-gray-700">Müşteri Kimliği</span>
              <input
                type="text"
                {...register('googleAdsCustomerId')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                placeholder="123-456-7890"
              />
            </label>
          )}

          <label className="block">
            <span className="text-gray-700">Yetkili Adı</span>
            <input
              type="text"
              {...register('representativeName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Yetkili Soyadı</span>
            <input
              type="text"
              {...register('representativeSurname')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Telefon Numarası</span>
            <input
              type="tel"
              {...register('phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
              placeholder="+90"
            />
          </label>

          {!hasAccount && (
            <label className="block">
              <span className="text-gray-700">Hesap kurulum randevusu talep et</span>
              <input
                type="checkbox"
                {...register('appointmentRequest')}
                className="ml-2 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
              />
            </label>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Kurulumu Tamamla
        </button>
      </form>
    </div>
  );
}

export default DealerSetup;