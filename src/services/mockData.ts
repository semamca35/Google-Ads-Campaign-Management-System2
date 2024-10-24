import { Brand, Campaign, CampaignStats, Dealer, User } from '../types';

// Demo Users
export const users: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: '2',
    email: 'brand@example.com',
    role: 'brand',
    name: 'Brand Manager'
  },
  {
    id: '3',
    email: 'dealer@example.com',
    role: 'dealer',
    name: 'Dealer User'
  }
];

// Demo Brands
export const brands: Brand[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    email: 'brand@example.com',
    requirements: ['Minimum 1000₺ günlük bütçe', 'En az 6 aylık reklam deneyimi'],
    createdAt: '2024-01-15T10:00:00Z',
    googleAdsApiToken: 'ya29.a0AfB_byC7s...'
  },
  {
    id: '2',
    name: 'Global Industries',
    email: 'global@example.com',
    requirements: ['Minimum 500₺ günlük bütçe'],
    createdAt: '2024-02-01T15:30:00Z'
  }
];

// Demo Dealers
export const dealers: Dealer[] = [
  {
    id: '1',
    brandId: '1',
    name: 'İstanbul Bayi',
    city: 'İstanbul',
    district: 'Kadıköy',
    neighborhood: 'Caddebostan',
    email: 'dealer@example.com',
    googleAdsCustomerId: '123-456-7890',
    hasGoogleAdsAccount: true,
    setupCompleted: true
  },
  {
    id: '2',
    brandId: '1',
    name: 'Ankara Bayi',
    city: 'Ankara',
    district: 'Çankaya',
    neighborhood: 'Kızılay',
    email: 'ankara@example.com',
    hasGoogleAdsAccount: false,
    setupCompleted: false
  }
];

// Demo Campaigns
export const campaigns: Campaign[] = [
  {
    id: '1',
    brandId: '1',
    title: 'Yaz Sezonu Kampanyası',
    description: 'Yaz sezonuna özel indirimli ürünler için reklam kampanyası',
    imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    suggestedDailyBudget: 1000,
    setupFileUrl: 'https://example.com/campaign1-setup.xlsx',
    startDate: '2024-06-01T00:00:00Z',
    endDate: '2024-08-31T23:59:59Z',
    status: 'active',
    categories: ['Yaz', 'İndirim', 'Sezonsal']
  },
  {
    id: '2',
    brandId: '1',
    title: 'Okula Dönüş',
    description: 'Okul sezonu başlangıcı için özel kampanya',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    suggestedDailyBudget: 1500,
    setupFileUrl: 'https://example.com/campaign2-setup.xlsx',
    startDate: '2024-08-15T00:00:00Z',
    endDate: '2024-09-30T23:59:59Z',
    status: 'paused',
    categories: ['Okul', 'Öğrenci', 'Sezonsal']
  }
];

// Demo Campaign Stats
export const campaignStats: CampaignStats[] = [
  {
    campaignId: '1',
    impressions: 150000,
    clicks: 7500,
    cost: 12500,
    ctr: 5,
    date: '2024-03-01'
  },
  {
    campaignId: '1',
    impressions: 180000,
    clicks: 9000,
    cost: 15000,
    ctr: 5,
    date: '2024-03-02'
  },
  {
    campaignId: '2',
    impressions: 120000,
    clicks: 6000,
    cost: 10000,
    ctr: 5,
    date: '2024-03-01'
  },
  {
    campaignId: '2',
    impressions: 140000,
    clicks: 7000,
    cost: 11500,
    ctr: 5,
    date: '2024-03-02'
  }
];