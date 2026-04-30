// 角色 / 卡牌装备 — character + card deck management
// Top: heroine portrait + stats. Middle: equipped card slots (deck).
// Bottom: card collection grid.

function CharacterA() {
  const t = THEME_A;
  const equipped = [CARDS[0], CARDS[3], CARDS[5], null, null];
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto',
      background: `linear-gradient(180deg, ${t.bgAlt} 0%, ${t.bg} 100%)`,
      fontFamily: t.font, paddingBottom: 24 }}>
      {/* header */}
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={16} color={t.outline} stroke={3}/>
        </button>
        <div style={{ flex: 1, fontSize: 18, fontWeight: 800, color: t.outline, textAlign: 'center' }}>契约工坊</div>
        <button style={{ width: 36, height: 36, borderRadius: 999, background: t.accent, border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="sparkle" size={16} color={t.outline} stroke={3}/>
        </button>
      </div>

      {/* hero panel */}
      <div style={{ margin: '8px 14px', background: '#fff',
        border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 22,
        boxShadow: `0 5px 0 ${t.outline}`, padding: 14,
        display: 'flex', gap: 14, alignItems: 'center',
      }}>
        <HeroineAvatar heroine={HEROINES[0]} size={92} theme={t}/>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div style={{ fontSize: 19, fontWeight: 800, color: t.outline }}>{HEROINES[0].name}</div>
            <StickerTag theme={t} color={t.accent} icon="crown">Lv.18</StickerTag>
          </div>
          <div style={{ fontSize: 11, color: t.inkSoft, marginTop: 2, fontWeight: 600 }}>{HEROINES[0].title} · {HEROINES[0].motto}</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <Stat icon="heart" v="248" l="生命" t={t}/>
            <Stat icon="wand" v="36" l="法力" t={t}/>
            <Stat icon="shield" v="14" l="护盾" t={t}/>
          </div>
        </div>
      </div>

      {/* deck slots */}
      <div style={{ padding: '8px 14px' }}>
        <SectionHeader t={t}>契约灵卡 · 3 / 5</SectionHeader>
        <div style={{ display: 'flex', gap: 8, marginTop: 8, justifyContent: 'space-between' }}>
          {equipped.map((c, i) => c ? (
            <SpiritCardA key={i} card={c} size="sm" equipped/>
          ) : (
            <div key={i} style={{ width: 84, height: 116,
              background: 'rgba(255,255,255,0.5)',
              border: `${t.outlineWidth}px dashed ${t.outline}`,
              borderRadius: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: `${t.outline}80`,
            }}>
              <Glyph kind="plus" size={28} stroke={3} color={`${t.outline}80`}/>
            </div>
          ))}
        </div>
      </div>

      {/* deck stats summary */}
      <div style={{ margin: '6px 14px 0', background: t.mint,
        border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 14,
        boxShadow: `0 3px 0 ${t.outline}`, padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <Glyph kind="sparkle" size={16} color={t.outline} stroke={3}/>
        <div style={{ fontSize: 11, fontWeight: 700, color: t.outline }}>共鸣加成：探测 +30%, 治疗 +12%</div>
      </div>

      {/* collection */}
      <div style={{ padding: '14px 14px 0' }}>
        <SectionHeader t={t}>灵卡收藏 · 8 / 24</SectionHeader>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {['全部', 'SSR', 'SR', '光属性'].map((tag, i) => (
            <div key={tag} style={{
              padding: '5px 12px', borderRadius: 999,
              background: i === 0 ? t.outline : '#fff',
              color: i === 0 ? '#fff' : t.outline,
              border: `${t.outlineWidth - 0.5}px solid ${t.outline}`,
              fontSize: 11, fontWeight: 700,
            }}>{tag}</div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 12 }}>
          {CARDS.map((c, i) => (
            <div key={c.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <SpiritCardA card={c} size="sm" sealed={i === 6 || i === 7} equipped={[0,3,5].includes(i)}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, v, l, t }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <Glyph kind={icon} size={14} color={t.outline} stroke={3}/>
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: t.outline, lineHeight: 1 }}>{v}</div>
        <div style={{ fontSize: 8, color: t.inkSoft, fontWeight: 700 }}>{l}</div>
      </div>
    </div>
  );
}

function SectionHeader({ children, t }) {
  return <div style={{ fontSize: 13, fontWeight: 800, color: t.outline, display: 'flex', alignItems: 'center', gap: 6 }}>
    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 999, background: t.primary, border: `2px solid ${t.outline}`}}/>
    {children}
  </div>;
}

// ─────────────────────────────────────────
// Theme B — Deep Teal + Gold / Watercolor
// ─────────────────────────────────────────
function CharacterB() {
  const t = THEME_B;
  const equipped = [CARDS[0], CARDS[3], CARDS[5], null, null];
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto',
      background: `radial-gradient(ellipse at 50% 0%, #1F3357 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody, paddingBottom: 24, color: t.starlight,
    }}>
      {/* starfield bg */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle at 18% 22%, #fff 0 0.7px, transparent 1.5px),
                          radial-gradient(circle at 72% 18%, #fff 0 1px, transparent 1.5px),
                          radial-gradient(circle at 32% 60%, ${t.primary} 0 1px, transparent 1.5px),
                          radial-gradient(circle at 88% 72%, #fff 0 0.7px, transparent 1.5px)` }}/>

      <div style={{ position: 'relative' }}>
        {/* header */}
        <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{ width: 30, height: 30, borderRadius: 2, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Glyph kind="arrow-l" size={14} color={t.primary} stroke={1.5}/>
          </button>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontFamily: t.fontDisplay, fontSize: 22, color: t.primary, lineHeight: 1, letterSpacing: 2 }}>契约工坊</div>
            <div style={{ fontSize: 8, color: t.starlight, opacity: 0.6, letterSpacing: 3 }}>PACT · ATELIER</div>
          </div>
          <button style={{ width: 30, height: 30, borderRadius: 2, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Glyph kind="sparkle" size={14} color={t.primary} stroke={1.5}/>
          </button>
        </div>

        {/* hero panel */}
        <div style={{ margin: '8px 14px', position: 'relative',
          background: 'rgba(15,26,46,0.5)', backdropFilter: 'blur(6px)',
          border: `0.5px solid ${t.primary}60`, padding: 14,
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          {/* decorative corners */}
          {[[0,0],[0,1],[1,0],[1,1]].map(([x,y]) => (
            <div key={`${x}${y}`} style={{ position: 'absolute',
              [x ? 'right' : 'left']: -1, [y ? 'bottom' : 'top']: -1,
              width: 14, height: 14,
              borderTop: y ? 'none' : `1.5px solid ${t.primary}`,
              borderBottom: y ? `1.5px solid ${t.primary}` : 'none',
              borderLeft: x ? 'none' : `1.5px solid ${t.primary}`,
              borderRight: x ? `1.5px solid ${t.primary}` : 'none',
            }}/>
          ))}
          <HeroineAvatar heroine={HEROINES[0]} size={84} theme={t}/>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
              <div style={{ fontFamily: t.fontDisplay, fontSize: 22, color: t.primary, lineHeight: 1 }}>{HEROINES[0].name}</div>
              <InkTag theme={t} icon="crown">Lv.18</InkTag>
            </div>
            <div style={{ fontSize: 10, color: t.starlight, opacity: 0.7, marginTop: 4, fontStyle: 'italic' }}>"{HEROINES[0].motto}"</div>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <StatB icon="heart" v="248" l="VITALITY"/>
              <StatB icon="wand" v="36" l="MANA"/>
              <StatB icon="shield" v="14" l="WARD"/>
            </div>
          </div>
        </div>

        {/* deck slots */}
        <div style={{ padding: '8px 14px' }}>
          <SectionHeaderB>契约灵卡 · 03 / 05</SectionHeaderB>
          <div style={{ display: 'flex', gap: 6, marginTop: 8, justifyContent: 'space-between' }}>
            {equipped.map((c, i) => c ? (
              <SpiritCardB key={i} card={c} size="sm" equipped/>
            ) : (
              <div key={i} style={{ width: 80, height: 112,
                background: 'rgba(232,177,76,0.05)',
                border: `0.5px dashed ${t.primary}60`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.primary,
              }}>
                <Glyph kind="plus" size={20} stroke={1} color={t.primary}/>
              </div>
            ))}
          </div>
        </div>

        {/* synergy line */}
        <div style={{ margin: '8px 14px 0', padding: '8px 12px',
          background: `linear-gradient(90deg, transparent, ${t.secondary}20, transparent)`,
          border: `0.5px solid ${t.secondary}40`,
          fontSize: 10, color: t.secondary, letterSpacing: 1.5, fontFamily: t.fontBody,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Glyph kind="sparkle" size={12} color={t.secondary} stroke={1.5}/>
          RESONANCE · 探测 +30% · 治疗 +12%
        </div>

        {/* collection */}
        <div style={{ padding: '14px 14px 0' }}>
          <SectionHeaderB>灵卡藏书 · 08 / 24</SectionHeaderB>
          <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
            {['全部', 'SSR', 'SR', '光属性'].map((tag, i) => (
              <div key={tag} style={{
                padding: '4px 12px',
                background: i === 0 ? t.primary : 'transparent',
                color: i === 0 ? t.ink : t.primary,
                border: `0.5px solid ${t.primary}80`,
                fontSize: 10, fontFamily: t.fontBody, letterSpacing: 1,
              }}>{tag}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 12 }}>
            {CARDS.map((c, i) => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <SpiritCardB card={c} size="sm" sealed={i === 6 || i === 7} equipped={[0,3,5].includes(i)}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatB({ icon, v, l }) {
  const t = THEME_B;
  return (
    <div>
      <div style={{ fontSize: 8, color: t.primary, letterSpacing: 1.5 }}>{l}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Glyph kind={icon} size={11} color={t.primary} stroke={1.5}/>
        <div style={{ fontFamily: t.fontDisplay, fontSize: 17, color: t.starlight, lineHeight: 1 }}>{v}</div>
      </div>
    </div>
  );
}

function SectionHeaderB({ children }) {
  const t = THEME_B;
  return (
    <div style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.primary, letterSpacing: 2,
      display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ display: 'inline-block', width: 16, height: 1, background: t.primary }}/>
      {children}
      <span style={{ flex: 1, height: 1, background: `${t.primary}40` }}/>
    </div>
  );
}

Object.assign(window, { CharacterA, CharacterB });
