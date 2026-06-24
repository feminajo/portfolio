import { profile } from '../../data/profile'
import { seo } from '../../data/navigation'

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    email: profile.email,
    telephone: profile.phone,
    url: seo.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressCountry: 'IN',
    },
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: [
      'React',
      'TypeScript',
      'Frontend Development',
      'AI Applications',
      'LLM Integration',
    ],
    worksFor: {
      '@type': 'Organization',
      name: profile.currentCompany,
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.title,
    description: seo.description,
    url: seo.url,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
