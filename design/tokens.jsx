// Design tokens for two visual directions
// A: Pink + Lavender, flat cartoon w/ thick outlines (animation feel)
// B: Deep Teal + Gold, watercolor + hand-drawn line

const THEME_A = {
  // Pink + Lavender — "柔美梦幻"
  bg: '#FFF5F8',
  bgAlt: '#FCE8F0',
  card: '#FFFFFF',
  ink: '#3A2240',          // deep aubergine for outlines & text
  inkSoft: '#5C3F66',
  primary: '#FF7AB6',      // strawberry pink
  primaryDeep: '#E04E96',
  secondary: '#B79BE8',    // lavender
  secondaryDeep: '#8C70CF',
  accent: '#FFD66B',        // sunshine
  mint: '#9BE0C9',
  danger: '#FF6F8A',
  outline: '#3A2240',
  outlineWidth: 3,
  radius: 18,
  font: '"Fredoka", "M PLUS Rounded 1c", system-ui, sans-serif',
  fontDisplay: '"Fredoka", "M PLUS Rounded 1c", system-ui, sans-serif',
  shadow: '0 4px 0 rgba(58,34,64,0.15)',
  cardShadow: '0 6px 0 #3A2240',
};

const THEME_B = {
  // Deep Teal + Gold — "神秘星空"
  bg: '#0F1A2E',
  bgAlt: '#172541',
  bgPaper: '#FAF4E8',       // paper for cards
  card: 'rgba(255, 246, 224, 0.95)',
  ink: '#0B1530',
  inkSoft: '#3A4A6E',
  primary: '#E8B14C',       // gold
  primaryDeep: '#C58A1F',
  secondary: '#5BC0BE',     // teal accent
  secondaryDeep: '#2F8F8C',
  accent: '#F2A6C3',         // touch of pink for magic
  starlight: '#CFE3FF',
  danger: '#E36A6A',
  outline: '#1A2A48',
  outlineWidth: 1.5,
  radius: 14,
  font: '"Caveat Brush", "Yuji Mai", "Noto Serif", Georgia, serif',
  fontDisplay: '"Caveat Brush", "Yuji Mai", Georgia, serif',
  fontBody: '"Nunito", "Source Han Sans", system-ui, sans-serif',
  shadow: '0 6px 18px rgba(0,0,0,0.35)',
  cardShadow: '0 4px 14px rgba(0,0,0,0.45)',
};

// ─────────────────────────────────────────
// Original card archetypes (sealed-spirit cards)
// All original IP — magical-girl + sealed spirits
// ─────────────────────────────────────────
const CARDS = [
  { id: 'aurora', name: '极光', kana: 'AURORA', element: 'light', rarity: 'SSR', glyph: '✦', color1: '#FFD66B', color2: '#FF7AB6', desc: '撕开夜幕的光河。冷却 -2s' },
  { id: 'tide',   name: '潮汐', kana: 'TIDE',   element: 'water', rarity: 'SR',  glyph: '∿', color1: '#7CC9E8', color2: '#5BC0BE', desc: '退潮时收获更多碎片' },
  { id: 'ember',  name: '余烬', kana: 'EMBER',  element: 'fire',  rarity: 'SR',  glyph: '✸', color1: '#FF8C5A', color2: '#E04E96', desc: '受击反弹 12% 伤害' },
  { id: 'moss',   name: '苔语', kana: 'MOSS',   element: 'earth', rarity: 'R',   glyph: '✿', color1: '#9BE0C9', color2: '#6FA89B', desc: '每 5s 治疗 1 点' },
  { id: 'echo',   name: '回响', kana: 'ECHO',   element: 'sound', rarity: 'SR',  glyph: '◉', color1: '#B79BE8', color2: '#8C70CF', desc: '探测附近 3 格灵卡' },
  { id: 'frost',  name: '霜针', kana: 'FROST',  element: 'ice',   rarity: 'R',   glyph: '❉', color1: '#CFE3FF', color2: '#7CC9E8', desc: '冰封地面 1.5s' },
  { id: 'pollen', name: '花粉', kana: 'POLLEN', element: 'wind',  rarity: 'R',   glyph: '❀', color1: '#FFC1D8', color2: '#FFD66B', desc: '减速周围目标' },
  { id: 'mirror', name: '镜界', kana: 'MIRROR', element: 'arcane',rarity: 'SSR', glyph: '◈', color1: '#E8E1F2', color2: '#B79BE8', desc: '复制最近一张灵卡' },
];

const HEROINES = [
  { id: 'lumi',  name: '璐米',   title: '初契约者', motto: '羽笔与樱花', color: '#FF7AB6' },
  { id: 'sora',  name: '苍羽',   title: '夜空守望', motto: '月下追星人', color: '#8C70CF' },
  { id: 'mika',  name: '雅卡',   title: '潮汐学徒', motto: '海浪记得名字', color: '#5BC0BE' },
];

const ASSETS = {
  heroines: {
    a: { lumi: 'assets/lumi-a.png', sora: 'assets/sora-a.png', mika: 'assets/mika-a.png' },
    b: { lumi: 'assets/lumi-b.png', sora: 'assets/sora-a.png', mika: 'assets/mika-b.png' },
  },
  cards: {
    aurora: 'assets/aurora.png', tide: 'assets/tide.png', ember: 'assets/ember.png',
    moss: 'assets/moss.png', echo: 'assets/echo.png', frost: 'assets/frost.png',
    pollen: 'assets/pollen.png', mirror: 'assets/mirror.png',
  },
  bg: { a: 'assets/bg-a.png', b: 'assets/bg-b.png' },
};

Object.assign(window, { THEME_A, THEME_B, CARDS, HEROINES, ASSETS });
