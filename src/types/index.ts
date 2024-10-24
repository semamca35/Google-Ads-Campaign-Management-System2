export interface User {
  id: string;
  email: string;
  role: 'admin' | 'brand' | 'dealer';
  name: string;
}

export interface Brand {
  id: string;
  name: string;
  email: string;
  requirements: string[];
  createdAt: string;
  googleAdsApiToken?: string;
}

export interface Dealer {
  id: string;
  brandId: string;
  name: string;
  city: string;
  district: string;
  neighborhood: string;
  email: string;
  googleAdsCustomerId?: string;
  hasGoogleAdsAccount: boolean;
  setupCompleted: boolean;
}

export interface Campaign {
  id: string;
  brandId: string;
  title: string;
  description: string;
  imageUrl: string;
  suggestedDailyBudget: number;
  setupFileUrl: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'paused' | 'ended';
  categories: string[];
}

export interface CampaignStats {
  campaignId: string;
  impressions: number;
  clicks: number;
  cost: number;
  ctr: number;
  date: string;
}

export interface DealerSetup {
  dealerId: string;
  representativeName: string;
  representativeSurname: string;
  phone: string;
  appointmentRequest?: string;
}

export interface GoogleAdsConfig {
  developerToken: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}