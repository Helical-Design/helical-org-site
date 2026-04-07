// ============================================================
// helical — webflow cms setup script
// doc: HEL-CMS-001 · rev 2026.04
//
// HOW TO RUN:
// 1. Open your Webflow project in the designer
// 2. Open browser DevTools (F12 or Cmd+Option+I)
// 3. Go to the Console tab
// 4. Replace YOUR_API_TOKEN and YOUR_SITE_ID below
// 5. Paste the entire script and hit Enter
//
// WHERE TO FIND YOUR VALUES:
// API Token:  webflow.com/dashboard → Account Settings
//             → Integrations → API Access → Generate Token
//             Scopes needed: CMS:write, sites:read
// Site ID:    webflow.com/dashboard → your project
//             → Project Settings → the ID in the URL
//             e.g. webflow.com/dashboard/sites/[THIS-IS-YOUR-SITE-ID]
// ============================================================

(async () => {

  // ── CONFIG — fill these in ──────────────────────────────
  const API_TOKEN = 'YOUR_API_TOKEN_HERE';
  const SITE_ID   = 'YOUR_SITE_ID_HERE';
  // ────────────────────────────────────────────────────────

  const BASE = 'https://api.webflow.com/v2';
  const H = {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
    'accept': 'application/json'
  };

  // ── HELPERS ──────────────────────────────────────────────

  const post = async (url, body) => {
    const r = await fetch(url, { method: 'POST', headers: H, body: JSON.stringify(body) });
    const data = await r.json();
    if (!r.ok) throw new Error(`${r.status} — ${JSON.stringify(data)}`);
    return data;
  };

  const createCollection = async (displayName, singularName, slug) => {
    console.log(`  creating collection: ${displayName}...`);
    const data = await post(`${BASE}/sites/${SITE_ID}/collections`, {
      displayName, singularName, slug
    });
    console.log(`  ✓ ${displayName} — id: ${data.id}`);
    return data.id;
  };

  const createField = async (collectionId, type, displayName, isRequired = false) => {
    const data = await post(`${BASE}/collections/${collectionId}/fields`, {
      type, displayName, isRequired, helpText: ''
    });
    return data.slug;
  };

  const createItem = async (collectionId, fieldData) => {
    await post(`${BASE}/collections/${collectionId}/items`, {
      isArchived: false,
      isDraft: false,
      fieldData
    });
  };

  const slugify = str => str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  // ── RUN ──────────────────────────────────────────────────

  try {
    console.log('');
    console.log('helical cms setup');
    console.log('─────────────────');

    // ════════════════════════════════════════════════════════
    // 01 — SERVICES COLLECTION
    // Powers the products/deliverables section on the landing page
    // ════════════════════════════════════════════════════════

    console.log('\n01 — services collection');
    const servicesId = await createCollection('Services', 'Service', 'services');

    console.log('  adding fields...');
    await createField(servicesId, 'Number',    'Order');
    await createField(servicesId, 'PlainText', 'Description');
    await createField(servicesId, 'PlainText', 'File Name');
    await createField(servicesId, 'Switch',    'Featured');
    console.log('  ✓ fields created');

    console.log('  adding items...');
    await createItem(servicesId, {
      name:        'wireframes + flows',
      slug:        'wireframes-flows',
      order:       1,
      description: 'annotated figma files covering the full scope. every screen, every state, every edge case that matters.',
      'file-name': 'wireframes.fig',
      featured:    true
    });
    await createItem(servicesId, {
      name:        'design system',
      slug:        'design-system',
      order:       2,
      description: 'components, tokens, and patterns your team can build on. not a style guide — a working system.',
      'file-name': 'design_system.fig',
      featured:    false
    });
    await createItem(servicesId, {
      name:        'interactive prototype',
      slug:        'interactive-prototype',
      order:       3,
      description: 'clickable figma prototype for user testing or stakeholder review. built from the wireframes, no extra time.',
      'file-name': 'prototype.fig',
      featured:    false
    });
    await createItem(servicesId, {
      name:        'ux audit',
      slug:        'ux-audit',
      order:       4,
      description: 'a structured review of your existing product with prioritised findings. scored by impact, not opinion.',
      'file-name': 'audit.pdf',
      featured:    false
    });
    console.log('  ✓ 4 items created');


    // ════════════════════════════════════════════════════════
    // 02 — TESTIMONIALS COLLECTION
    // Powers the social proof / quote section
    // ════════════════════════════════════════════════════════

    console.log('\n02 — testimonials collection');
    const testimonialsId = await createCollection('Testimonials', 'Testimonial', 'testimonials');

    console.log('  adding fields...');
    await createField(testimonialsId, 'PlainText', 'Quote', true);
    await createField(testimonialsId, 'PlainText', 'Author Title');
    await createField(testimonialsId, 'PlainText', 'Company');
    await createField(testimonialsId, 'Switch',    'Featured');
    console.log('  ✓ fields created');

    console.log('  adding items...');
    await createItem(testimonialsId, {
      name:           'maya r.',
      slug:           'maya-r',
      quote:          'we went from a rough brief on monday to a prototype ready for user testing on thursday. that used to take us six weeks.',
      'author-title': 'product lead',
      company:        'series a startup',
      featured:       true
    });
    await createItem(testimonialsId, {
      name:           'placeholder client 2',
      slug:           'placeholder-client-2',
      quote:          'the intake form alone saved us two weeks of back-and-forth. we had a scope confirmed within 24 hours of filling it out.',
      'author-title': 'founder',
      company:        'b2b saas startup',
      featured:       false
    });
    await createItem(testimonialsId, {
      name:           'placeholder client 3',
      slug:           'placeholder-client-3',
      quote:          'i\'ve worked with three agencies before helical. the difference isn\'t just speed — the work is better because the process forces clarity upfront.',
      'author-title': 'head of product',
      company:        'fintech company',
      featured:       false
    });
    console.log('  ✓ 3 items created');


    // ════════════════════════════════════════════════════════
    // 03 — PROJECTS COLLECTION
    // Powers a future work/case studies page
    // ════════════════════════════════════════════════════════

    console.log('\n03 — projects collection');
    const projectsId = await createCollection('Projects', 'Project', 'projects');

    console.log('  adding fields...');
    await createField(projectsId, 'PlainText', 'Client');
    await createField(projectsId, 'PlainText', 'Project Type');
    await createField(projectsId, 'PlainText', 'Deliverables');
    await createField(projectsId, 'PlainText', 'Timeline');
    await createField(projectsId, 'PlainText', 'Result');
    await createField(projectsId, 'PlainText', 'Tagline');
    await createField(projectsId, 'Switch',    'Featured');
    console.log('  ✓ fields created');

    console.log('  adding items...');
    await createItem(projectsId, {
      name:            'onboarding redesign',
      slug:            'onboarding-redesign',
      client:          'series a saas startup',
      'project-type':  'ux redesign',
      deliverables:    'wireframes, user flows, interactive prototype',
      timeline:        '4 days',
      result:          'drop-off at step 3 reduced by 40% in first month after launch.',
      tagline:         'a 12-step onboarding flow compressed into 4.',
      featured:        true
    });
    await createItem(projectsId, {
      name:            'design system foundation',
      slug:            'design-system-foundation',
      client:          'b2b fintech platform',
      'project-type':  'design system',
      deliverables:    'component library, design tokens, documentation',
      timeline:        '5 days',
      result:          'engineering team shipped 3 new features in the first two weeks using the system.',
      tagline:         'from 6 inconsistent component styles to one system in a week.',
      featured:        true
    });
    await createItem(projectsId, {
      name:            'mobile app ux audit',
      slug:            'mobile-app-ux-audit',
      client:          'consumer mobile app',
      'project-type':  'ux audit',
      deliverables:    'audit report, prioritised findings, quick wins list',
      timeline:        '2 days',
      result:          '14 actionable findings. top 3 implemented in the next sprint.',
      tagline:         '14 findings. delivered before the next sprint planning.',
      featured:        false
    });
    console.log('  ✓ 3 items created');


    // ════════════════════════════════════════════════════════
    // 04 — PRICING COLLECTION
    // Powers the pricing section — makes tiers editable in CMS
    // ════════════════════════════════════════════════════════

    console.log('\n04 — pricing collection');
    const pricingId = await createCollection('Pricing Tiers', 'Pricing Tier', 'pricing-tiers');

    console.log('  adding fields...');
    await createField(pricingId, 'Number',    'Order');
    await createField(pricingId, 'PlainText', 'Price');
    await createField(pricingId, 'PlainText', 'Tagline');
    await createField(pricingId, 'PlainText', 'Timeline');
    await createField(pricingId, 'PlainText', 'Includes');
    await createField(pricingId, 'PlainText', 'CTA Label');
    await createField(pricingId, 'Switch',    'Featured');
    console.log('  ✓ fields created');

    console.log('  adding items...');
    await createItem(pricingId, {
      name:         'focused',
      slug:         'focused',
      order:        1,
      price:        'from $2,500',
      tagline:      'one deliverable, done fast',
      timeline:     '2–3 days',
      includes:     'intake form, 1 deliverable (wireframes or audit or prototype), figma source files, 1 revision round',
      'cta-label':  'start here →',
      featured:     false
    });
    await createItem(pricingId, {
      name:         'system',
      slug:         'system',
      order:        2,
      price:        'from $6,500',
      tagline:      'end-to-end ux engagement',
      timeline:     '4–5 days',
      includes:     'intake form, wireframes + user flows, design system foundations, interactive prototype, figma source files + documentation, 2 revision rounds',
      'cta-label':  'start your project →',
      featured:     true
    });
    await createItem(pricingId, {
      name:         'ongoing',
      slug:         'ongoing',
      order:        3,
      price:        'from $4,500/mo',
      tagline:      'ux on retainer',
      timeline:     'monthly',
      includes:     'everything in system monthly, priority intake queue, dedicated design system, async collaboration, monthly ux review',
      'cta-label':  "let's talk →",
      featured:     false
    });
    console.log('  ✓ 3 items created');


    // ════════════════════════════════════════════════════════
    // DONE
    // ════════════════════════════════════════════════════════

    console.log('\n─────────────────────────────────────');
    console.log('✓ cms setup complete');
    console.log('');
    console.log('collections created:');
    console.log(`  services       id: ${servicesId}`);
    console.log(`  testimonials   id: ${testimonialsId}`);
    console.log(`  projects       id: ${projectsId}`);
    console.log(`  pricing-tiers  id: ${pricingId}`);
    console.log('');
    console.log('next steps:');
    console.log('  1. open webflow designer');
    console.log('  2. check CMS panel — all 4 collections should appear');
    console.log('  3. bind collection items to your page sections');
    console.log('  4. replace placeholder copy with real client work');
    console.log('─────────────────────────────────────');

  } catch (err) {
    console.error('\n✗ error:', err.message);
    console.error('check your API_TOKEN and SITE_ID and try again.');
  }

})();
