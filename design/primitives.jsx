// Hand-drawn primitives shared across the design.
// Two visual languages live side by side; each component takes a `theme`.

// ─────────────────────────────────────────
// SVG glyphs (placeholder hand-drawn iconography)
// Kept very simple — circles, stars, simple paths
// ─────────────────────────────────────────
function Glyph({ kind, size = 24, color = 'currentColor', stroke = 2.5 }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (kind) {
    case 'sparkle': return (<svg {...props}><path d="M12 3 L13.5 10.5 L21 12 L13.5 13.5 L12 21 L10.5 13.5 L3 12 L10.5 10.5 Z"/></svg>);
    case 'heart':   return (<svg {...props}><path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z"/></svg>);
    case 'shield':  return (<svg {...props}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg>);
    case 'bag':     return (<svg {...props}><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg>);
    case 'compass': return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 5-5 2 2-5z"/></svg>);
    case 'card':    return (<svg {...props}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>);
    case 'star':    return (<svg {...props}><path d="M12 3l2.6 5.7 6.4.6-4.8 4.3 1.4 6.2L12 16.8 6.4 19.8l1.4-6.2L3 9.3l6.4-.6z"/></svg>);
    case 'gear':    return (<svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 00-.2-1.6l2-1.5-2-3.4-2.3.8a7 7 0 00-2.7-1.6L13.5 2h-3l-.3 2.7a7 7 0 00-2.7 1.6L5.2 5.5l-2 3.4 2 1.5A7 7 0 005 12c0 .5.1 1.1.2 1.6l-2 1.5 2 3.4 2.3-.8a7 7 0 002.7 1.6l.3 2.7h3l.3-2.7a7 7 0 002.7-1.6l2.3.8 2-3.4-2-1.5z"/></svg>);
    case 'trophy':  return (<svg {...props}><path d="M7 4h10v4a5 5 0 01-10 0z"/><path d="M5 6H3v2a3 3 0 003 3M19 6h2v2a3 3 0 01-3 3M9 16h6v4H9z"/><path d="M12 11v5"/></svg>);
    case 'home':    return (<svg {...props}><path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/></svg>);
    case 'shop':    return (<svg {...props}><path d="M4 8h16l-1 12H5z"/><path d="M8 8V5h8v3"/></svg>);
    case 'map':     return (<svg {...props}><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v16M15 6v16"/></svg>);
    case 'play':    return (<svg {...props}><path d="M7 4l13 8-13 8z"/></svg>);
    case 'pause':   return (<svg {...props}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>);
    case 'arrow-r': return (<svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case 'arrow-l': return (<svg {...props}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>);
    case 'eye':     return (<svg {...props}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>);
    case 'lock':    return (<svg {...props}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>);
    case 'plus':    return (<svg {...props}><path d="M12 5v14M5 12h14"/></svg>);
    case 'check':   return (<svg {...props}><path d="M5 12l5 5 9-11"/></svg>);
    case 'x':       return (<svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>);
    case 'feather': return (<svg {...props}><path d="M19 4c0 8-8 12-13 13l-1 3-2-2 3-1c1-5 5-13 13-13z"/><path d="M16 8L8 16"/></svg>);
    case 'wand':    return (<svg {...props}><path d="M5 19l11-11M14 6l1-3 1 3 3 1-3 1-1 3-1-3-3-1z"/></svg>);
    case 'crystal': return (<svg {...props}><path d="M12 3l7 6-7 12-7-12z"/><path d="M5 9h14M12 3v18"/></svg>);
    case 'coin':    return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M9 12h6M12 8v8"/></svg>);
    case 'flame':   return (<svg {...props}><path d="M12 3c0 4 4 5 4 10a4 4 0 11-8 0c0-3 2-3 2-6 1 1 2 2 2-4z"/></svg>);
    case 'leaf':    return (<svg {...props}><path d="M5 19c0-9 7-15 15-15-1 9-6 15-15 15zM5 19l8-8"/></svg>);
    case 'moon':    return (<svg {...props}><path d="M20 14A8 8 0 1110 4a6 6 0 0010 10z"/></svg>);
    case 'menu':    return (<svg {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>);
    case 'crown':   return (<svg {...props}><path d="M3 18h18l-2-10-4 3-3-6-3 6-4-3z"/></svg>);
    default:        return (<svg {...props}><circle cx="12" cy="12" r="8"/></svg>);
  }
}

// ─────────────────────────────────────────
// Sticker Button — Theme A: chunky outlined puffy button
// ─────────────────────────────────────────
function StickerBtn({ children, color, theme, full, onClick, size = 'md', icon, style = {} }) {
  const t = theme || THEME_A;
  const bg = color || t.primary;
  const sizes = {
    sm: { h: 36, px: 14, fs: 13 },
    md: { h: 48, px: 20, fs: 15 },
    lg: { h: 60, px: 28, fs: 18 },
  };
  const s = sizes[size];
  return (
    <button onClick={onClick} style={{
      height: s.h, padding: `0 ${s.px}px`, fontSize: s.fs,
      width: full ? '100%' : 'auto',
      background: bg, color: '#fff',
      border: `${t.outlineWidth}px solid ${t.outline}`,
      borderRadius: 9999,
      fontFamily: t.font, fontWeight: 700, letterSpacing: 0.2,
      boxShadow: `0 4px 0 ${t.outline}`,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      cursor: 'pointer', textShadow: '0 1px 0 rgba(0,0,0,0.15)',
      ...style,
    }}>
      {icon && <Glyph kind={icon} size={s.fs + 4} stroke={3} />}
      {children}
    </button>
  );
}

// ─────────────────────────────────────────
// Ink Button — Theme B: ink-stroke watercolor button
// ─────────────────────────────────────────
function InkBtn({ children, theme, full, onClick, ghost, size = 'md', icon, style = {} }) {
  const t = theme || THEME_B;
  const sizes = {
    sm: { h: 34, px: 14, fs: 13 },
    md: { h: 46, px: 22, fs: 15 },
    lg: { h: 58, px: 30, fs: 18 },
  };
  const s = sizes[size];
  const bg = ghost ? 'transparent' : `linear-gradient(180deg, ${t.primary} 0%, ${t.primaryDeep} 100%)`;
  const color = ghost ? t.primary : '#0B1530';
  return (
    <button onClick={onClick} style={{
      height: s.h, padding: `0 ${s.px}px`, fontSize: s.fs,
      width: full ? '100%' : 'auto',
      background: bg, color,
      border: ghost ? `1.5px solid ${t.primary}` : `1px solid ${t.primaryDeep}`,
      borderRadius: 4,
      fontFamily: t.fontDisplay, fontWeight: 600, letterSpacing: 1,
      boxShadow: ghost ? 'none' : `0 1px 0 ${t.primary}, 0 6px 16px rgba(232,177,76,0.25)`,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      cursor: 'pointer', textTransform: 'uppercase',
      ...style,
    }}>
      {icon && <Glyph kind={icon} size={s.fs + 2} stroke={2} />}
      {children}
    </button>
  );
}

// ─────────────────────────────────────────
// Card visual — Sealed Spirit Card (THEME A — flat puffy)
// ─────────────────────────────────────────
function SpiritCardA({ card, size = 'md', sealed = false, equipped = false, glow = false }) {
  const t = THEME_A;
  const sizes = {
    xs: { w: 60,  h: 84,  fs: 8,  glyph: 22, name: 9 },
    sm: { w: 84,  h: 116, fs: 10, glyph: 32, name: 11 },
    md: { w: 108, h: 152, fs: 11, glyph: 44, name: 13 },
    lg: { w: 150, h: 210, fs: 13, glyph: 64, name: 17 },
    xl: { w: 200, h: 280, fs: 15, glyph: 88, name: 22 },
  };
  const s = sizes[size];
  const rarityColor = card.rarity === 'SSR' ? t.accent : card.rarity === 'SR' ? t.secondary : '#D4D4E0';
  const cardImg = window.ASSETS?.cards?.[card.id];
  return (
    <div style={{
      width: s.w, height: s.h, position: 'relative',
      background: `linear-gradient(160deg, ${card.color1} 0%, ${card.color2} 100%)`,
      border: `${t.outlineWidth}px solid ${t.outline}`,
      borderRadius: 14,
      boxShadow: glow
        ? `0 0 0 4px ${card.color1}40, 0 6px 0 ${t.outline}, 0 0 30px ${card.color1}80`
        : `0 4px 0 ${t.outline}`,
      overflow: 'hidden', flexShrink: 0,
      filter: sealed ? 'grayscale(0.9) brightness(0.7)' : 'none',
    }}>
      {/* sparkle dots */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3,
        backgroundImage: `radial-gradient(circle at 20% 30%, #fff 0 1.5px, transparent 2px), radial-gradient(circle at 70% 60%, #fff 0 1px, transparent 1.5px), radial-gradient(circle at 40% 80%, #fff 0 1px, transparent 1.5px)` }} />
      {/* inner panel */}
      <div style={{
        position: 'absolute', inset: 6, borderRadius: 9,
        background: 'rgba(255,255,255,0.18)',
        border: `${Math.max(1.5, t.outlineWidth - 1)}px solid rgba(255,255,255,0.5)`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
        padding: size === 'xs' ? 3 : 6,
      }}>
        {/* rarity tag */}
        <div style={{
          alignSelf: 'flex-end', fontSize: s.fs, fontFamily: t.font, fontWeight: 800,
          background: rarityColor, color: t.outline, padding: '1px 6px', borderRadius: 999,
          border: `1.5px solid ${t.outline}`, zIndex: 1,
        }}>{card.rarity}</div>
        {cardImg ? (
          <div style={{ width: '82%', aspectRatio: '1', borderRadius: 8, overflow: 'hidden', border: `1.5px solid rgba(255,255,255,0.5)`, flexShrink: 0 }}>
            <img src={cardImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
        ) : (
          <div style={{ fontSize: s.glyph, color: '#fff', textShadow: `0 2px 0 ${t.outline}`, lineHeight: 1 }}>{card.glyph}</div>
        )}
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: s.name, fontFamily: t.font, fontWeight: 800, color: '#fff', textShadow: `0 1.5px 0 ${t.outline}` }}>{card.name}</div>
          {size !== 'xs' && size !== 'sm' && <div style={{ fontSize: s.fs - 1, fontFamily: t.font, color: '#fff', opacity: 0.8, letterSpacing: 1.5 }}>{card.kana}</div>}
        </div>
      </div>
      {sealed && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="lock" size={s.glyph} color="#fff" stroke={3} />
        </div>
      )}
      {equipped && (
        <div style={{ position: 'absolute', top: -6, left: -6,
          width: 22, height: 22, borderRadius: 999,
          background: t.mint, border: `${t.outlineWidth}px solid ${t.outline}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="check" size={12} color={t.outline} stroke={3.5}/>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// Card visual — Sealed Spirit Card (THEME B — watercolor / paper)
// ─────────────────────────────────────────
function SpiritCardB({ card, size = 'md', sealed = false, equipped = false, glow = false }) {
  const t = THEME_B;
  const sizes = {
    xs: { w: 56,  h: 80,  fs: 8,  glyph: 22, name: 9 },
    sm: { w: 80,  h: 112, fs: 10, glyph: 32, name: 11 },
    md: { w: 104, h: 148, fs: 11, glyph: 44, name: 13 },
    lg: { w: 146, h: 206, fs: 13, glyph: 60, name: 16 },
    xl: { w: 200, h: 280, fs: 15, glyph: 84, name: 20 },
  };
  const s = sizes[size];
  const rarityColor = card.rarity === 'SSR' ? t.primary : card.rarity === 'SR' ? t.secondary : '#9aa9bc';
  const cardImg = window.ASSETS?.cards?.[card.id];
  return (
    <div style={{
      width: s.w, height: s.h, position: 'relative', flexShrink: 0,
      background: `linear-gradient(180deg, #FAF4E8 0%, #F0E4CC 100%)`,
      borderRadius: 4,
      boxShadow: glow
        ? `0 0 0 1px ${t.primary}, 0 0 28px ${t.primary}80, 0 6px 14px rgba(0,0,0,0.4)`
        : `0 6px 14px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(0,0,0,0.1)`,
      overflow: 'hidden', filter: sealed ? 'saturate(0.3) brightness(0.6)' : 'none',
    }}>
      {/* paper texture */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.25,
        backgroundImage: `radial-gradient(circle at 20% 20%, #5C3F1E 0 1px, transparent 1px), radial-gradient(circle at 60% 70%, #3A2A0F 0 0.7px, transparent 1px)`,
        backgroundSize: '12px 12px, 7px 7px' }} />
      {/* watercolor splash */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '80%', aspectRatio: '1', borderRadius: '50%',
        background: `radial-gradient(circle, ${card.color1}AA 0%, ${card.color2}66 50%, transparent 70%)`,
        filter: 'blur(2px)' }} />
      {/* gold border */}
      <div style={{ position: 'absolute', inset: 4, border: `1px solid ${t.primary}`, borderRadius: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 4, border: `0.5px solid ${t.primary}80`, borderRadius: 2, transform: 'scale(0.94)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: size === 'xs' ? 4 : 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: s.fs + 1, color: rarityColor, letterSpacing: 1.5 }}>{card.rarity}</div>
          <div style={{ width: 6, height: 6, borderRadius: 999, background: rarityColor }} />
        </div>
        {cardImg ? (
          <div style={{ width: '80%', aspectRatio: '1', overflow: 'hidden', borderRadius: 2, border: `1px solid ${t.primary}80`, flexShrink: 0 }}>
            <img src={cardImg} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} loading="lazy" />
          </div>
        ) : (
          <div style={{ fontSize: s.glyph, color: card.color2, fontFamily: t.fontDisplay, lineHeight: 1, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.2))' }}>{card.glyph}</div>
        )}
        <div style={{ textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: s.name, fontFamily: t.fontDisplay, color: t.ink, letterSpacing: 1 }}>{card.name}</div>
          {size !== 'xs' && size !== 'sm' && <div style={{ fontSize: s.fs - 2, fontFamily: t.fontBody, color: t.inkSoft, letterSpacing: 2, opacity: 0.7 }}>{card.kana}</div>}
        </div>
      </div>
      {sealed && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(11,21,48,0.55)' }}>
          <Glyph kind="lock" size={s.glyph * 0.6} color={t.primary} stroke={1.5} />
        </div>
      )}
      {equipped && (
        <div style={{ position: 'absolute', top: 6, right: 6,
          width: 16, height: 16, borderRadius: 999,
          background: t.primary,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="check" size={10} color={t.ink} stroke={2.5}/>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// Sticker tag — small colored chip with outline
// ─────────────────────────────────────────
function StickerTag({ children, color, theme, icon }) {
  const t = theme || THEME_A;
  return (
    <div style={{
      height: 26, padding: '0 10px', borderRadius: 999,
      background: color || '#fff',
      border: `${t.outlineWidth}px solid ${t.outline}`,
      fontFamily: t.font, fontWeight: 700, fontSize: 12, color: t.outline,
      display: 'inline-flex', alignItems: 'center', gap: 4,
      boxShadow: `0 2px 0 ${t.outline}`,
    }}>
      {icon && <Glyph kind={icon} size={12} stroke={3} color={t.outline}/>}
      {children}
    </div>
  );
}

function InkTag({ children, theme, icon }) {
  const t = theme || THEME_B;
  return (
    <div style={{
      height: 22, padding: '0 8px', borderRadius: 2,
      background: 'rgba(232,177,76,0.15)',
      border: `0.5px solid ${t.primary}80`,
      fontFamily: t.fontBody, fontSize: 10, color: t.primary, fontWeight: 600, letterSpacing: 1,
      display: 'inline-flex', alignItems: 'center', gap: 4, textTransform: 'uppercase',
    }}>
      {icon && <Glyph kind={icon} size={10} stroke={2} color={t.primary}/>}
      {children}
    </div>
  );
}

// ─────────────────────────────────────────
// Heroine avatar — drawn as colored circle + glyph
// ─────────────────────────────────────────
function HeroineAvatar({ heroine, size = 64, theme }) {
  const t = theme || THEME_A;
  const isA = t === THEME_A;
  const imgUrl = window.ASSETS?.heroines?.[isA ? 'a' : 'b']?.[heroine.id];
  return (
    <div style={{
      width: size, height: size, borderRadius: 999,
      border: isA ? `${t.outlineWidth}px solid ${t.outline}` : `1.5px solid ${t.primary}`,
      boxShadow: isA ? `0 4px 0 ${t.outline}` : `0 4px 14px rgba(0,0,0,0.3)`,
      flexShrink: 0,
      position: 'relative', overflow: 'hidden',
      background: imgUrl
        ? heroine.color
        : `radial-gradient(circle at 35% 30%, #fff, ${heroine.color}30 60%, ${heroine.color})`,
    }}>
      {imgUrl ? (
        <img src={imgUrl} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 10%', display: 'block' }} loading="lazy" />
      ) : (
        <>
          <div style={{ width: '60%', height: '60%', borderRadius: '50%',
            background: `linear-gradient(180deg, #FFE4D6 0%, #FFCBB0 100%)`,
            border: isA ? `${t.outlineWidth - 0.5}px solid ${t.outline}` : `1px solid ${t.ink}40`,
            position: 'relative', marginTop: '15%',
          }}>
            <div style={{ position: 'absolute', top: '40%', left: '25%', width: 4, height: 4, borderRadius: 999, background: t.outline }}/>
            <div style={{ position: 'absolute', top: '40%', right: '25%', width: 4, height: 4, borderRadius: 999, background: t.outline }}/>
            <div style={{ position: 'absolute', bottom: '20%', left: '40%', width: '20%', height: 2, background: t.outline, borderRadius: 999 }}/>
          </div>
          <div style={{ position: 'absolute', top: '8%', left: '20%', width: '60%', height: '30%',
            background: heroine.color, borderRadius: '50% 50% 30% 30%',
            border: isA ? `${t.outlineWidth - 0.5}px solid ${t.outline}` : 'none',
          }}/>
        </>
      )}
    </div>
  );
}

Object.assign(window, { Glyph, StickerBtn, InkBtn, SpiritCardA, SpiritCardB, StickerTag, InkTag, HeroineAvatar });
