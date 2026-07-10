/**
 * Shared industry catalog. IDs are stable and safe to store/compare against
 * (in the database, in analytics, in future Industry Pack logic) — labels
 * and descriptions are display-only and can be reworded freely without
 * touching any stored data.
 */
export interface IndustryOption {
  id: string;
  emoji: string;
  label: string;
  subcategories: string;
  recommended?: boolean;
}

export const INDUSTRY_OPTIONS: IndustryOption[] = [
  {
    id: "insurance",
    emoji: "🛡️",
    label: "Insurance",
    subcategories: "Insurance Advisors, Financial Advisors, Agencies, Brokerages",
    recommended: true,
  },
  {
    id: "real_estate",
    emoji: "🏡",
    label: "Real Estate",
    subcategories: "Brokers, Salespersons, Property Developers",
  },
  {
    id: "restaurant_food",
    emoji: "🍽️",
    label: "Restaurant & Food Business",
    subcategories: "Restaurants, Cafés, Catering, Food Franchises",
  },
  {
    id: "travel_tourism",
    emoji: "✈️",
    label: "Travel & Tourism",
    subcategories: "Travel Agencies, Tour Operators, Visa Assistance, Ticketing",
  },
  {
    id: "logistics_transportation",
    emoji: "🚛",
    label: "Logistics & Transportation",
    subcategories: "Trucking, Freight Forwarding, Import / Export, Courier Services",
  },
  {
    id: "renewable_energy",
    emoji: "☀️",
    label: "Renewable Energy",
    subcategories: "Solar Installers, Solar Distributors, Energy Consultants",
  },
  {
    id: "professional_services",
    emoji: "💼",
    label: "Professional Services",
    subcategories: "Accounting, Consulting, Legal, Marketing Agencies",
  },
  {
    id: "healthcare",
    emoji: "🏥",
    label: "Healthcare",
    subcategories: "Clinics, Medical Centers, Dental Clinics",
  },
  {
    id: "retail_ecommerce",
    emoji: "🛍️",
    label: "Retail & E-Commerce",
    subcategories: "Retail Stores, Online Shops, Wholesalers",
  },
  {
    id: "construction_engineering",
    emoji: "🏗️",
    label: "Construction & Engineering",
    subcategories: "Contractors, Architects, Engineers",
  },
  {
    id: "education_training",
    emoji: "🎓",
    label: "Education & Training",
    subcategories: "Schools, Review Centers, Training Companies",
  },
  {
    id: "other",
    emoji: "🧩",
    label: "Other Business",
    subcategories: "For businesses not listed above.",
  },
];
