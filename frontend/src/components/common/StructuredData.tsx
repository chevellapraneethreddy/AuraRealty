import React from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://aurarealty.io';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'property' | 'aiHub' | 'localBusiness' | 'breadcrumb' | 'faqPage' | 'howTo' | 'speakable';
  data?: {
    // property listing
    title?: string;
    description?: string;
    location?: string;
    region?: string;
    price?: number;
    sqft?: number;
    beds?: number;
    baths?: number;
    createdAt?: string;
    image?: string;
    // breadcrumb
    breadcrumbs?: Array<{ name: string; url: string }>;
    // faqPage
    faqs?: Array<{ question: string; answer: string }>;
    // howTo
    howToName?: string;
    howToDescription?: string;
    steps?: Array<{ name: string; text: string }>;
    // speakable
    cssSelector?: string[];
  };
}

const AREA_SERVED = ['New York', 'San Francisco', 'London', 'Dubai', 'Mumbai', 'Singapore'];

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const location = useLocation();
  const currentUrl = `${SITE_URL}${location.pathname}`;

  const schemas: Record<string, object> = {
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'AuraRealty',
      url: SITE_URL,
      description: 'Next-Generation AI Real Estate & Intelligent Living platform connecting you with architectural sanctuaries.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/properties?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },

    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'AuraRealty Technologies Inc.',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      areaServed: AREA_SERVED,
      sameAs: [
        'https://twitter.com/AuraRealtyHQ',
        'https://linkedin.com/company/aurarealty',
        'https://instagram.com/aurarealty.io',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English'],
      },
    },

    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'AuraRealty',
      description: 'Next-Generation AI Real Estate & Intelligent Living platform.',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      image: `${SITE_URL}/og-image.png`,
      areaServed: AREA_SERVED.map((city) => ({ '@type': 'City', name: city })),
      priceRange: '$$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'One World Trade Center, Suite 8500',
        addressLocality: 'New York',
        addressRegion: 'NY',
        postalCode: '10007',
        addressCountry: 'US',
      },
      sameAs: [
        'https://twitter.com/AuraRealtyHQ',
        'https://linkedin.com/company/aurarealty',
      ],
    },

    property: {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: data?.title || 'Property Listing',
      description: data?.description || 'Property details',
      url: currentUrl,
      datePosted: data?.createdAt || new Date().toISOString(),
      image: data?.image || `${SITE_URL}/og-image.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: data?.location || 'City',
        addressRegion: data?.region || 'Region',
        addressCountry: 'US',
      },
      ...(data?.price && { price: `$${data.price}`, priceCurrency: 'USD' }),
      ...(data?.sqft && {
        floorSize: { '@type': 'QuantitativeValue', unitText: 'SQFT', value: data.sqft },
      }),
      ...(data?.beds && { numberOfRooms: data.beds }),
      ...(data?.baths && { numberOfBathroomsTotal: data.baths }),
    },

    aiHub: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'AI Property Hub - AuraRealty',
      applicationCategory: 'RealEstateApplication',
      description: 'AI-powered real estate analytics, property search, and investment insights.',
      url: `${SITE_URL}/ai-hub`,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },

    breadcrumb: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: (data?.breadcrumbs || []).map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`,
      })),
    },

    faqPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (data?.faqs || []).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },

    howTo: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: data?.howToName || 'How to Buy Property with AuraRealty',
      description: data?.howToDescription || 'AI-assisted steps to discover and acquire your premier sanctuary.',
      step: (data?.steps || []).map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
      })),
    },

    speakable: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${currentUrl}#webpage`,
      url: currentUrl,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: data?.cssSelector || ['h1', 'p[data-speakable]'],
      },
    },
  };

  const schema = schemas[type];
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
