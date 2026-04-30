/* ===================================
   MURILABS — JAVASCRIPT
   =================================== */

// ── Page data ──────────────────────────────────────────────────────────────

const products = {
  'whey-core': {
    line: 'CORE',
    name: 'Whey Core',
    tagline: 'Proteína concentrada do soro do leite para construção muscular eficiente.',
    size: '900g',
    serving: '21g',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Proteína de alto valor biológico' },
      { icon: '◈', text: 'Perfil completo de aminoácidos essenciais' },
      { icon: '◇', text: 'Auxilia na recuperação e crescimento muscular' },
      { icon: '△', text: 'Sem corantes ou aromas artificiais' },
    ],
    visual: 'pm--dark',
    bg: 'pc--dark',
    bgPage: 'var(--navy)',
  },
  'creatine-core': {
    line: 'CORE',
    name: 'Creatine Core',
    tagline: 'Creatina monohidratada 100% pura. Força, desempenho e recuperação.',
    size: '300g',
    serving: '3g',
    doses: '100',
    benefits: [
      { icon: '◎', text: '100% creatina monohidratada' },
      { icon: '◈', text: 'Aumenta força e desempenho nos treinos' },
      { icon: '◇', text: 'Acelera a recuperação muscular' },
      { icon: '△', text: 'Sem adição de açúcares' },
    ],
    visual: 'pm--dark',
    bg: 'pc--dark',
    bgPage: 'var(--navy)',
  },
  'pre-ignite': {
    line: 'CORE',
    name: 'Pre Ignite',
    tagline: 'Energia, foco e performance para treinos que exigem o máximo.',
    size: '300g',
    serving: '10g',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Energia explosiva antes do treino' },
      { icon: '◈', text: 'Foco e clareza mental' },
      { icon: '◇', text: 'Ingredientes clinicamente dosados' },
      { icon: '△', text: 'Sabor limão' },
    ],
    visual: 'pm--dark',
    bg: 'pc--dark',
    bgPage: 'var(--navy)',
  },
  'recover-restore': {
    line: 'CORE',
    name: 'Recover Restore',
    tagline: 'Recuperação pós-treino eficiente para evoluir mais rápido.',
    size: '500g',
    serving: '16g',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Reduz dores musculares após o treino' },
      { icon: '◈', text: 'Acelera a recuperação e reparação' },
      { icon: '◇', text: 'Vitaminas e minerais essenciais' },
      { icon: '△', text: 'Sabor uva' },
    ],
    visual: 'pm--dark',
    bg: 'pc--dark',
    bgPage: 'var(--navy)',
  },
  'focus-mind-core': {
    line: 'CORE',
    name: 'Focus Mind',
    tagline: 'Suplemento para foco, memória e clareza mental no dia a dia.',
    size: '60 cáps',
    serving: '1000mg',
    doses: '60',
    benefits: [
      { icon: '◎', text: 'Mais foco e concentração' },
      { icon: '◈', text: 'Apoia a memória e o aprendizado' },
      { icon: '◇', text: 'Cafeína natural + L-teanina' },
      { icon: '△', text: 'Uso diário seguro' },
    ],
    visual: 'pm--dark',
    bg: 'pc--dark',
    bgPage: 'var(--navy)',
  },
  'fuel-bar': {
    line: 'CORE',
    name: 'Fuel Bar',
    tagline: 'Barra proteica para matar a fome e manter a energia em movimento.',
    size: '60g',
    serving: '12g',
    doses: '1',
    benefits: [
      { icon: '◎', text: '12g de proteína por barra' },
      { icon: '◈', text: 'Ingredientes reais, sem excessos' },
      { icon: '◇', text: 'Prático para levar a qualquer lugar' },
      { icon: '△', text: 'Vários sabores disponíveis' },
    ],
    visual: 'pm--dark',
    bg: 'pc--dark',
    bgPage: 'var(--navy)',
  },
  'whey-next': {
    line: 'NEXT',
    name: 'Whey Next',
    tagline: 'Proteína concentrada para quem está sempre evoluindo.',
    size: '900g',
    serving: '21g',
    doses: '30',
    benefits: [
      { icon: '◎', text: '21g de proteína por dose' },
      { icon: '◈', text: '4,6g de BCAAs naturais' },
      { icon: '◇', text: 'Low açúcar' },
      { icon: '△', text: 'Sabor chocolate' },
    ],
    visual: 'pm--blue',
    bg: 'pc--blue',
    bgPage: 'linear-gradient(135deg, #1E90FF, #0060CC)',
  },
  'focus-next': {
    line: 'NEXT',
    name: 'Focus Next',
    tagline: 'Foco e concentração para quem não pode parar.',
    size: '60 cáps',
    serving: '500mg',
    doses: '60',
    benefits: [
      { icon: '◎', text: 'Mais atenção e clareza' },
      { icon: '◈', text: 'Fórmula inteligente com cafeína natural' },
      { icon: '◇', text: 'Para estudos e trabalho' },
      { icon: '△', text: 'Uso diário' },
    ],
    visual: 'pm--blue',
    bg: 'pc--blue',
    bgPage: 'linear-gradient(135deg, #1E90FF, #0060CC)',
  },
  'energy-next': {
    line: 'NEXT',
    name: 'Energy Next',
    tagline: 'Energia para o dia todo, com baixo teor de açúcar.',
    size: 'Pó',
    serving: '–',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Energia sustentada ao longo do dia' },
      { icon: '◈', text: 'Low açúcar, sabor limão' },
      { icon: '◇', text: 'Vitaminas do complexo B' },
      { icon: '△', text: 'Pronto para misturar' },
    ],
    visual: 'pm--teal',
    bg: 'pc--teal',
    bgPage: 'linear-gradient(135deg, #00E0A0, #00B07A)',
  },
  'pre-next': {
    line: 'NEXT',
    name: 'Pre Next',
    tagline: 'Pré-treino inteligente para o próximo nível do seu desempenho.',
    size: '300g',
    serving: '10g',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Energia e foco para treinos intensos' },
      { icon: '◈', text: '2g de creatina por dose' },
      { icon: '◇', text: 'Beta-alanina para resistência' },
      { icon: '△', text: 'Sabor tropical' },
    ],
    visual: 'pm--purple-dark',
    bg: 'pc--purple',
    bgPage: 'linear-gradient(135deg, #7B61FF, #4F3ACC)',
  },
  'bar-next': {
    line: 'NEXT',
    name: 'Bar Next',
    tagline: 'Barra de proteína com adição de vitaminas para o dia a dia.',
    size: '60g',
    serving: '12g',
    doses: '1',
    benefits: [
      { icon: '◎', text: '12g de proteína por barra' },
      { icon: '◈', text: 'Com adição de vitaminas' },
      { icon: '◇', text: 'Sabor cookies & cream' },
      { icon: '△', text: 'Prático e nutritivo' },
    ],
    visual: 'pm--teal',
    bg: 'pc--teal',
    bgPage: 'linear-gradient(135deg, #00E0A0, #00B07A)',
  },
  'pure-protein': {
    line: 'PURE',
    name: 'Pure Protein',
    tagline: 'Proteína vegetal de alta qualidade, fácil digestão e completa em aminoácidos.',
    size: '900g',
    serving: '20g',
    doses: '30',
    benefits: [
      { icon: '◎', text: '100% vegana, sem ingredientes animais' },
      { icon: '◈', text: 'Fácil digestão e absorção' },
      { icon: '◇', text: 'Fórmula limpa e transparente' },
      { icon: '△', text: 'Sabores naturais: baunilha, cacau, coco' },
    ],
    visual: 'pm--green',
    bg: 'pc--green',
    bgPage: 'linear-gradient(135deg, #4CAF6F, #2E7D4F)',
  },
  'pure-creatine': {
    line: 'PURE',
    name: 'Pure Creatine',
    tagline: 'Creatina 100% pura em fórmula vegana. Performance com consciência.',
    size: '200g',
    serving: '3g',
    doses: '66',
    benefits: [
      { icon: '◎', text: 'Creatina monohidratada 100% pura' },
      { icon: '◈', text: 'Fórmula vegana e sustentável' },
      { icon: '◇', text: 'Embalagem reciclável' },
      { icon: '△', text: 'Sem adição de aromas ou corantes' },
    ],
    visual: 'pm--green',
    bg: 'pc--green',
    bgPage: 'linear-gradient(135deg, #4CAF6F, #2E7D4F)',
  },
  'pure-daily': {
    line: 'PURE',
    name: 'Pure Daily',
    tagline: 'Multivitamínico vegano para mais saúde e equilíbrio todos os dias.',
    size: '60 cáps',
    serving: '1 cáps',
    doses: '60',
    benefits: [
      { icon: '◎', text: 'Vitaminas e minerais essenciais' },
      { icon: '◈', text: '100% vegano, sem lactose ou glúten' },
      { icon: '◇', text: 'Ingredientes de origem natural' },
      { icon: '△', text: 'Uso diário' },
    ],
    visual: 'pm--green',
    bg: 'pc--green',
    bgPage: 'linear-gradient(135deg, #4CAF6F, #2E7D4F)',
  },
  'pure-bar': {
    line: 'PURE',
    name: 'Pure Bar',
    tagline: 'Barra vegana de cacau e avelã. Real, simples, deliciosa.',
    size: '50g',
    serving: '10g',
    doses: '1',
    benefits: [
      { icon: '◎', text: '10g de proteína vegetal' },
      { icon: '◈', text: 'Ingredientes reais e naturais' },
      { icon: '◇', text: 'Sem corantes ou adoçantes artificiais' },
      { icon: '△', text: 'Sabor cacau & avelã' },
    ],
    visual: 'pm--green',
    bg: 'pc--green',
    bgPage: 'linear-gradient(135deg, #4CAF6F, #2E7D4F)',
  },
  'hydrate-drink': {
  line: 'HYDRATE',
  name: 'Hydrate Drink',
  tagline: 'Bebida pronta para hidratação com eletrólitos essenciais.',
  size: '500ml',
  serving: '–',
  doses: '1',
  benefits: [
    { icon: '◎', text: 'Eletrólitos prontos para beber' },
    { icon: '◈', text: 'Zero açúcar' },
    { icon: '◇', text: 'Prático, gelado e delicioso' },
    { icon: '△', text: 'Vegano e sem corantes artificiais' },
  ],
  visual: 'pm--cyan',
  bg: 'pc--cyan',
  bgPage: 'linear-gradient(135deg, #00D4FF, #0098CC)',
},
  'hydrate-electrolytes': {
    line: 'HYDRATE',
    name: 'Hydrate Electrolytes',
    tagline: 'Eletrólitos essenciais para manter o corpo em equilíbrio todos os dias.',
    size: '300g',
    serving: '10g',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Sódio, potássio, magnésio e cloreto' },
      { icon: '◈', text: 'Sem açúcar, baixas calorias' },
      { icon: '◇', text: '100% vegano, sem corantes' },
      { icon: '△', text: 'Sabores: limão, frutas vermelhas, natural' },
    ],
    visual: 'pm--cyan',
    bg: 'pc--cyan',
    bgPage: 'linear-gradient(135deg, #00D4FF, #0098CC)',
  },
  'hydrate-energy': {
    line: 'HYDRATE',
    name: 'Hydrate Energy',
    tagline: 'Eletrólitos + energia para treinos e dias intensos.',
    size: '300g',
    serving: '10g',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Eletrólitos + Coenzima Q10 + B12' },
      { icon: '◈', text: 'Energia extra sem excesso de calorias' },
      { icon: '◇', text: 'Vegano, sem glúten e sem lactose' },
      { icon: '△', text: 'Hidratação inteligente' },
    ],
    visual: 'pm--cyan',
    bg: 'pc--cyan',
    bgPage: 'linear-gradient(135deg, #00D4FF, #0098CC)',
  },
  'hydrate-zero': {
    line: 'HYDRATE',
    name: 'Hydrate Zero',
    tagline: 'Eletrólitos essenciais sem sabor e sem açúcar. O mais versátil da linha.',
    size: '300g',
    serving: '10g',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Eletrólitos puros, sem sabor' },
      { icon: '◈', text: 'Zero açúcar, zero calorias' },
      { icon: '◇', text: 'Mistura com qualquer bebida' },
      { icon: '△', text: 'Ideal para hidratação no dia a dia' },
    ],
    visual: 'pm--cyan',
    bg: 'pc--cyan',
    bgPage: 'linear-gradient(135deg, #00D4FF, #0098CC)',
  },
  'hydrate-tablets': {
    line: 'HYDRATE',
    name: 'Hydrate Tablets',
    tagline: 'Eletrólitos em tablet. Leve na bolsa, use em qualquer lugar.',
    size: '60 tablets',
    serving: '1 tablet',
    doses: '60',
    benefits: [
      { icon: '◎', text: 'Prático e portátil' },
      { icon: '◈', text: 'Dissolve rapidamente em água' },
      { icon: '◇', text: 'Sem corantes artificiais' },
      { icon: '△', text: 'Eletrólitos essenciais em formato compacto' },
    ],
    visual: 'pm--cyan',
    bg: 'pc--cyan',
    bgPage: 'linear-gradient(135deg, #00D4FF, #0098CC)',
  },
  'mind-focus': {
    line: 'MIND+',
    name: 'Mind+ Focus',
    tagline: 'Fórmula inteligente para foco, concentração e performance mental.',
    size: '60 cáps',
    serving: '2 cáps',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Cafeína natural + L-teanina + tirosina' },
      { icon: '◈', text: 'Mais concentração nos estudos e no trabalho' },
      { icon: '◇', text: 'Vitaminas do complexo B' },
      { icon: '△', text: 'Para estudantes, profissionais e atletas' },
    ],
    visual: 'pm--lilac',
    bg: 'pc--lilac',
    bgPage: 'linear-gradient(135deg, #C4ACFF, #9B7CFF)',
  },
  'mind-memory': {
    line: 'MIND+',
    name: 'Mind+ Memory',
    tagline: 'Suporte à memória e aprendizado com ingredientes de origem natural.',
    size: '60 cáps',
    serving: '2 cáps',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Fosfatidilserina e Bacopa Monnieri' },
      { icon: '◈', text: 'Ginkgo Biloba para circulação cerebral' },
      { icon: '◇', text: 'Melhora retenção e aprendizado' },
      { icon: '△', text: 'Vitaminas B6 e B12' },
    ],
    visual: 'pm--lilac',
    bg: 'pc--lilac',
    bgPage: 'linear-gradient(135deg, #C4ACFF, #9B7CFF)',
  },
  'mind-calm': {
    line: 'MIND+',
    name: 'Mind+ Calm',
    tagline: 'Relaxamento e equilíbrio para uma mente mais tranquila e focada.',
    size: '60 cáps',
    serving: '2 cáps',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Magnésio + Ashwagandha + L-triptofano' },
      { icon: '◈', text: 'Controle do estresse e ansiedade' },
      { icon: '◇', text: 'Apoia o equilíbrio emocional' },
      { icon: '△', text: 'Vitamina B6 para o sistema nervoso' },
    ],
    visual: 'pm--lilac',
    bg: 'pc--lilac',
    bgPage: 'linear-gradient(135deg, #C4ACFF, #9B7CFF)',
  },
  'mind-drink': {
    line: 'MIND+',
    name: 'Mind+ Drink',
    tagline: 'Shot de foco e energia mental. Pronto para beber, zero açúcar.',
    size: '300ml',
    serving: '–',
    doses: '1',
    benefits: [
      { icon: '◎', text: 'Cafeína natural + L-teanina + taurina' },
      { icon: '◈', text: 'Energia mental imediata' },
      { icon: '◇', text: 'Zero açúcar, pronto para beber' },
      { icon: '△', text: 'Colina para função cognitiva' },
    ],
    visual: 'pm--lilac',
    bg: 'pc--lilac',
    bgPage: 'linear-gradient(135deg, #C4ACFF, #9B7CFF)',
  },
  'focus-mind': {
    line: 'MIND+',
    name: 'Mind+ Focus',
    tagline: 'Fórmula inteligente para foco, concentração e performance mental.',
    size: '60 cáps',
    serving: '2 cáps',
    doses: '30',
    benefits: [
      { icon: '◎', text: 'Cafeína natural + L-teanina + tirosina' },
      { icon: '◈', text: 'Mais concentração nos estudos e no trabalho' },
      { icon: '◇', text: 'Vitaminas do complexo B' },
      { icon: '△', text: 'Para estudantes, profissionais e atletas' },
    ],
    visual: 'pm--lilac',
    bg: 'pc--lilac',
    bgPage: 'linear-gradient(135deg, #C4ACFF, #9B7CFF)',
  },
};

// ── State ───────────────────────────────────────────────────────────────────

let currentPage = 'home';
let previousPage = 'home';

// ── Navigation ──────────────────────────────────────────────────────────────

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    previousPage = currentPage;
    currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function showProductsLine(lineId) {
  showPage('produtos');
  // Delay filter until page shows
  setTimeout(() => {
    const btn = document.querySelector(`.filter-btn[data-filter="${lineId}"]`);
    if (btn) filterProducts(btn, lineId);
  }, 100);
}

function goBack() {
  showPage(previousPage === 'produto' ? 'produtos' : previousPage);
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// ── Products Filter ─────────────────────────────────────────────────────────

function filterProducts(btn, filter) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Update label
  const label = document.getElementById('products-line-label');
  if (filter === 'all') {
    label.textContent = 'Todos os produtos';
  } else {
    const names = { core: 'Linha Core', next: 'Linha Next', pure: 'Linha Pure', hydrate: 'Linha Hydrate', mind: 'Linha Mind+' };
    label.textContent = names[filter] || 'Todos os produtos';
  }

  // Filter cards
  document.querySelectorAll('.product-card').forEach(card => {
    const line = card.getAttribute('data-line');
    if (filter === 'all' || line === filter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ── Image helper ────────────────────────────────────────────────────────────

function productImageTag(productId, cssClass, fallbackHtml) {
  return `<img src="images/${productId}.png" class="${cssClass}" alt="" onerror="this.style.display='none'" />${fallbackHtml}`;
}

// ── Product Detail ──────────────────────────────────────────────────────────

function showProduct(productId) {
  const p = products[productId];
  if (!p) return;

  previousPage = currentPage;

  const detail = document.getElementById('productDetail');
  detail.innerHTML = `
    <div class="pd-visual ${p.bg}" style="background: ${p.bgPage}; position: relative;">
      <img src="images/${productId}.png" class="pd-img" alt="${p.name}" onerror="this.style.display='none'" />
      <div class="product-mock ${p.visual}" style="z-index:1;">
        <span class="pm-brand">murilabs</span>
        <span class="pm-name">${p.name.toUpperCase()}</span>
        <span class="pm-size">${p.size}</span>
      </div>
    </div>
    <div class="pd-content">
      <p class="pd-line">${p.line}</p>
      <h1 class="pd-name">${p.name}</h1>
      <p class="pd-tagline">${p.tagline}</p>

      <div class="pd-meta">
        <div class="pd-meta-item">
          <span class="pd-meta-val">${p.size}</span>
          <span class="pd-meta-key">Tamanho</span>
        </div>
        <div class="pd-meta-item">
          <span class="pd-meta-val">${p.serving}</span>
          <span class="pd-meta-key">Por dose</span>
        </div>
        <div class="pd-meta-item">
          <span class="pd-meta-val">${p.doses}</span>
          <span class="pd-meta-key">Doses</span>
        </div>
      </div>

      <div class="pd-benefits">
        ${p.benefits.map(b => `
          <div class="pd-benefit">
            <div class="pd-benefit-icon">${b.icon}</div>
            <span class="pd-benefit-text">${b.text}</span>
          </div>
        `).join('')}
      </div>

      <div class="pd-cta">
        <button class="btn-primary" onclick="alert('Funcionalidade de compra em breve!')">Comprar agora</button>
        <button class="btn-ghost" onclick="showPage('produtos')">Ver todos os produtos</button>
      </div>
    </div>
  `;

  showPage('produto');
}

// ── Nav scroll effect ───────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── Close mobile menu on resize ─────────────────────────────────────────────

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.getElementById('mobileMenu').classList.remove('open');
  }
});
