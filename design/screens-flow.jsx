// Lighter screens — main menu, level select, shop, results, tutorial, achievements, ranking, pause/settings
// Each comes in A (pink + lavender, flat) and B (deep teal + gold, watercolor) variants

// ─────────────────────────────────────────
// MAIN MENU
// ─────────────────────────────────────────
function MenuA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `linear-gradient(180deg, #FFD9E8 0%, #E0CFFF 100%)`,
      fontFamily: t.font }}>
      {/* bg bubbles */}
      {[[10,10,80],[78,16,60],[15,80,100],[80,78,90]].map(([x,y,s], i) => (
        <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`,
          width: s, height: s, borderRadius: '50%',
          background: i % 2 ? t.secondary : t.primary, opacity: 0.25, filter: 'blur(2px)' }}/>
      ))}
      {[[20,30,'✦'],[80,50,'✿'],[30,75,'❀'],[70,20,'✧']].map(([x,y,g], i) => (
        <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, color: '#fff', fontSize: 22 }}>{g}</div>
      ))}

      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', padding: 20 }}>
        {/* logo lockup */}
        <div style={{ marginTop: 50, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <div style={{ fontSize: 44, fontWeight: 800, color: '#fff',
              WebkitTextStroke: `${t.outlineWidth}px ${t.outline}`,
              textShadow: `0 6px 0 ${t.outline}`,
              letterSpacing: 1, lineHeight: 1, fontFamily: t.font,
            }}>灵卡封印师</div>
            <div style={{ position: 'absolute', top: -10, right: -16, fontSize: 26 }}>✦</div>
            <div style={{ position: 'absolute', bottom: -6, left: -12, fontSize: 18 }}>❀</div>
          </div>
          <div style={{ marginTop: 8, fontSize: 12, fontWeight: 700, color: t.outline, letterSpacing: 4, opacity: 0.7 }}>SPIRIT CARD KEEPER</div>
        </div>

        {/* big card stack visual */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          {/* standing heroine portrait */}
          {window.ASSETS?.heroines?.a?.[HEROINES[0].id] && (
            <div style={{
              position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
              width: 170, height: 260, overflow: 'hidden',
              maskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)',
              zIndex: 1,
            }}>
              <img src={window.ASSETS.heroines.a[HEROINES[0].id]} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 5%' }} />
            </div>
          )}
          <div style={{ position: 'absolute', transform: 'translateX(-46px) rotate(-12deg)', zIndex: 3 }}>
            <SpiritCardA card={CARDS[1]} size="md"/>
          </div>
          <div style={{ position: 'absolute', transform: 'translateX(46px) rotate(12deg)', zIndex: 3 }}>
            <SpiritCardA card={CARDS[2]} size="md"/>
          </div>
          <div style={{ position: 'relative', zIndex: 4 }}>
            <SpiritCardA card={CARDS[0]} size="lg" glow/>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 8 }}>
          <StickerBtn theme={t} color={t.primary} size="lg" full icon="play">开始探险</StickerBtn>
          <div style={{ display: 'flex', gap: 8 }}>
            <StickerBtn theme={t} color={t.secondary} size="md" icon="card" style={{ flex: 1 }}>契约工坊</StickerBtn>
            <StickerBtn theme={t} color={t.accent} size="md" icon="shop" style={{ flex: 1 }}>樱花商店</StickerBtn>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 4px' }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <HeroineAvatar heroine={HEROINES[0]} size={32} theme={t}/>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: t.outline, lineHeight: 1 }}>{HEROINES[0].name}</div>
              <div style={{ fontSize: 9, color: t.inkSoft, fontWeight: 700 }}>Lv.18</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Glyph kind="trophy" size={16} color={t.outline} stroke={3}/>
            </button>
            <button style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Glyph kind="gear" size={16} color={t.outline} stroke={3}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse at 50% 30%, #2A3F6E 0%, #0F1A2E 50%, #050A18 100%)`,
      fontFamily: t.fontBody, color: t.starlight }}>
      {/* starfield */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 18%, #fff 0 1px, transparent 1.5px),
                          radial-gradient(circle at 70% 12%, ${t.primary} 0 1px, transparent 1.5px),
                          radial-gradient(circle at 30% 60%, #fff 0 0.8px, transparent 1.5px),
                          radial-gradient(circle at 85% 70%, ${t.starlight} 0 1px, transparent 1.5px),
                          radial-gradient(circle at 15% 88%, #fff 0 0.8px, transparent 1.5px),
                          radial-gradient(circle at 60% 38%, #fff 0 0.7px, transparent 1.5px),
                          radial-gradient(circle at 8% 45%, ${t.primary} 0 0.8px, transparent 1.4px)`,
      }}/>
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: '80%', aspectRatio: '1', borderRadius: '50%',
        background: `radial-gradient(circle, ${t.secondary}30, transparent 60%)`, filter: 'blur(20px)' }}/>

      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', padding: 20 }}>
        {/* logo */}
        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <div style={{ fontSize: 12, color: t.primary, letterSpacing: 6 }}>✦ THE PACT OF ✦</div>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 56, color: t.primary, lineHeight: 1, letterSpacing: 1, marginTop: 6, textShadow: `0 0 20px ${t.primary}80` }}>灵卡封印师</div>
          <div style={{ marginTop: 4, fontSize: 9, color: t.starlight, letterSpacing: 4, opacity: 0.6 }}>SPIRIT · CARD · KEEPER</div>
        </div>

        {/* card stack */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          {/* standing heroine portrait */}
          {window.ASSETS?.heroines?.b?.[HEROINES[0].id] && (
            <div style={{
              position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
              width: 160, height: 250, overflow: 'hidden',
              maskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)',
              zIndex: 1, opacity: 0.85,
              filter: 'drop-shadow(0 0 16px rgba(91,192,190,0.4))',
            }}>
              <img src={window.ASSETS.heroines.b[HEROINES[0].id]} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 5%' }} />
            </div>
          )}
          <div style={{ position: 'absolute', transform: 'translateX(-50px) rotate(-10deg)', zIndex: 3 }}>
            <SpiritCardB card={CARDS[1]} size="md"/>
          </div>
          <div style={{ position: 'absolute', transform: 'translateX(50px) rotate(10deg)', zIndex: 3 }}>
            <SpiritCardB card={CARDS[2]} size="md"/>
          </div>
          <div style={{ position: 'relative', zIndex: 4 }}>
            <SpiritCardB card={CARDS[0]} size="lg" glow/>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 8 }}>
          <InkBtn theme={t} size="lg" full icon="play">BEGIN PACT</InkBtn>
          <div style={{ display: 'flex', gap: 8 }}>
            <InkBtn theme={t} size="md" ghost icon="card" style={{ flex: 1 }}>ATELIER</InkBtn>
            <InkBtn theme={t} size="md" ghost icon="shop" style={{ flex: 1 }}>BAZAAR</InkBtn>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 4 }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <HeroineAvatar heroine={HEROINES[0]} size={28} theme={t}/>
            <div>
              <div style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.primary, lineHeight: 1 }}>{HEROINES[0].name}</div>
              <div style={{ fontSize: 8, color: t.starlight, opacity: 0.6, letterSpacing: 2 }}>LV·18</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button style={{ width: 30, height: 30, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Glyph kind="trophy" size={14} color={t.primary} stroke={1.5}/>
            </button>
            <button style={{ width: 30, height: 30, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Glyph kind="gear" size={14} color={t.primary} stroke={1.5}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// LEVEL SELECT (map)
// ─────────────────────────────────────────
const NODES = [
  { x: 18, y: 80, label: '樱花林', icon: 'leaf', done: true },
  { x: 40, y: 65, label: '夜潮岸', icon: 'moon', done: true },
  { x: 28, y: 45, label: '回声谷', icon: 'compass', done: true, current: false },
  { x: 55, y: 38, label: '霜星塔', icon: 'crystal', current: true },
  { x: 75, y: 22, label: '余烬窟', icon: 'flame', locked: true },
  { x: 50, y: 12, label: '星河顶', icon: 'star', locked: true, boss: true },
];

function LevelSelectA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `linear-gradient(180deg, #FFE7F0 0%, #E0CFFF 100%)`,
      fontFamily: t.font }}>
      {/* header */}
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 5 }}>
        <button style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={16} color={t.outline} stroke={3}/>
        </button>
        <div style={{ flex: 1, fontSize: 18, fontWeight: 800, color: t.outline, textAlign: 'center' }}>梦境地图</div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 999, padding: '4px 10px', boxShadow: `0 3px 0 ${t.outline}` }}>
          <Glyph kind="coin" size={12} color={t.outline} stroke={3}/>
          <span style={{ fontSize: 12, fontWeight: 800, color: t.outline }}>1,248</span>
        </div>
      </div>
      {/* map */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={`M ${NODES[0].x} ${NODES[0].y} ${NODES.slice(1).map(n => `L ${n.x} ${n.y}`).join(' ')}`}
          stroke={t.outline} strokeWidth="0.6" strokeDasharray="2 1.5" fill="none"/>
      </svg>
      {NODES.map((n, i) => (
        <div key={i} style={{ position: 'absolute', left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)' }}>
          <div style={{
            width: n.boss ? 64 : 50, height: n.boss ? 64 : 50, borderRadius: 999,
            background: n.locked ? '#D8D0E4' : n.current ? t.accent : n.done ? t.mint : '#fff',
            border: `${t.outlineWidth}px solid ${t.outline}`,
            boxShadow: `0 4px 0 ${t.outline}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Glyph kind={n.locked ? 'lock' : n.icon} size={n.boss ? 28 : 22} color={t.outline} stroke={3}/>
          </div>
          {n.current && (
            <div style={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)',
              background: t.primary, color: '#fff', fontSize: 10, fontWeight: 800,
              padding: '2px 8px', borderRadius: 999, border: `${t.outlineWidth - 0.5}px solid ${t.outline}`,
              boxShadow: `0 2px 0 ${t.outline}`, whiteSpace: 'nowrap',
            }}>当前</div>
          )}
          <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
            marginTop: 4, fontSize: 11, fontWeight: 800, color: t.outline, whiteSpace: 'nowrap',
          }}>{n.label}</div>
        </div>
      ))}
      {/* bottom card */}
      <div style={{ position: 'absolute', bottom: 16, left: 14, right: 14,
        background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 18,
        boxShadow: `0 4px 0 ${t.outline}`, padding: 12, display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <div style={{ width: 50, height: 50, borderRadius: 14, background: t.accent, border: `${t.outlineWidth - 0.5}px solid ${t.outline}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="crystal" size={24} color={t.outline} stroke={3}/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: t.outline }}>霜星塔 · 第三夜</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: t.inkSoft, marginTop: 2 }}>掉落 SR · 霜针 · 镜界 · ★★★ 难度</div>
        </div>
        <StickerBtn theme={t} color={t.primary} icon="play" size="md">出发</StickerBtn>
      </div>
    </div>
  );
}

function LevelSelectB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse at 50% 50%, #1F3357 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody, color: t.starlight }}>
      {/* starfield */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 18% 22%, #fff 0 0.8px, transparent 1.5px),
                          radial-gradient(circle at 72% 18%, ${t.primary} 0 1px, transparent 1.5px),
                          radial-gradient(circle at 32% 60%, #fff 0 1px, transparent 1.5px),
                          radial-gradient(circle at 88% 72%, ${t.starlight} 0 0.7px, transparent 1.5px),
                          radial-gradient(circle at 12% 88%, #fff 0 0.8px, transparent 1.5px)` }}/>
      {/* header */}
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 5 }}>
        <button style={{ width: 30, height: 30, borderRadius: 2, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={14} color={t.primary} stroke={1.5}/>
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 22, color: t.primary, lineHeight: 1, letterSpacing: 2 }}>梦境地图</div>
          <div style={{ fontSize: 8, color: t.starlight, opacity: 0.6, letterSpacing: 3 }}>DREAM · CARTOGRAPHY</div>
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '4px 10px', border: `0.5px solid ${t.primary}80`, background: 'rgba(232,177,76,0.1)' }}>
          <Glyph kind="coin" size={11} color={t.primary} stroke={1.5}/>
          <span style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.primary }}>1,248</span>
        </div>
      </div>
      {/* constellation lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={`M ${NODES[0].x} ${NODES[0].y} ${NODES.slice(1).map(n => `L ${n.x} ${n.y}`).join(' ')}`}
          stroke={t.primary} strokeWidth="0.3" strokeDasharray="0.7 0.7" fill="none" opacity="0.7"/>
      </svg>
      {NODES.map((n, i) => (
        <div key={i} style={{ position: 'absolute', left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)' }}>
          <div style={{
            width: n.boss ? 56 : 42, height: n.boss ? 56 : 42, borderRadius: 999,
            background: n.locked ? 'rgba(255,255,255,0.05)' : n.current ? t.primary : n.done ? `${t.secondary}30` : 'rgba(232,177,76,0.1)',
            border: `1px solid ${n.locked ? `${t.starlight}40` : t.primary}`,
            boxShadow: n.current ? `0 0 24px ${t.primary}` : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Glyph kind={n.locked ? 'lock' : n.icon} size={n.boss ? 22 : 18} color={n.current ? t.ink : t.primary} stroke={1.5}/>
          </div>
          {n.current && (
            <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
              fontFamily: t.fontDisplay, fontSize: 11, color: t.primary, letterSpacing: 2, whiteSpace: 'nowrap',
            }}>HERE</div>
          )}
          <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
            marginTop: 6, fontFamily: t.fontDisplay, fontSize: 13, color: n.locked ? `${t.starlight}50` : t.starlight, whiteSpace: 'nowrap',
          }}>{n.label}</div>
        </div>
      ))}
      {/* bottom card */}
      <div style={{ position: 'absolute', bottom: 16, left: 14, right: 14,
        background: 'rgba(15,26,46,0.7)', backdropFilter: 'blur(8px)',
        border: `0.5px solid ${t.primary}`, padding: 12,
        display: 'flex', gap: 10, alignItems: 'center',
      }}>
        <div style={{ width: 44, height: 44, background: 'rgba(232,177,76,0.15)', border: `0.5px solid ${t.primary}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="crystal" size={20} color={t.primary} stroke={1.5}/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 16, color: t.primary, lineHeight: 1.1 }}>霜星塔 · 第三夜</div>
          <div style={{ fontSize: 9, color: t.starlight, opacity: 0.7, letterSpacing: 1, marginTop: 3 }}>SR · 霜针 · 镜界 · ★★★</div>
        </div>
        <InkBtn theme={t} icon="play" size="md">出发</InkBtn>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// VICTORY / DEFEAT RESULT
// ─────────────────────────────────────────
function VictoryA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `linear-gradient(180deg, #FFE7F0 0%, #FCD9E8 100%)`,
      fontFamily: t.font }}>
      {/* confetti */}
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{ position: 'absolute',
          left: `${(i*7)%95}%`, top: `${(i*13)%80}%`,
          width: 8, height: 8,
          background: [t.primary, t.secondary, t.accent, t.mint][i%4],
          border: `1.5px solid ${t.outline}`,
          borderRadius: i%2 ? '50%' : 2,
          transform: `rotate(${i*23}deg)`,
        }}/>
      ))}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '40px 18px 18px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#fff',
              WebkitTextStroke: `${t.outlineWidth}px ${t.outline}`,
              textShadow: `0 5px 0 ${t.outline}` }}>封印成功</div>
            <div style={{ position: 'absolute', top: -6, right: -16, fontSize: 22 }}>✦</div>
            <div style={{ position: 'absolute', bottom: -4, left: -14, fontSize: 18 }}>✿</div>
          </div>
          <div style={{ marginTop: 6, fontSize: 11, fontWeight: 700, color: t.outline, opacity: 0.7, letterSpacing: 3 }}>VICTORY</div>
        </div>
        {/* stars */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 14 }}>
          {[1,1,0].map((on, i) => (
            <div key={i} style={{ width: 38, height: 38, borderRadius: 999,
              background: on ? t.accent : '#fff',
              border: `${t.outlineWidth}px solid ${t.outline}`,
              boxShadow: `0 3px 0 ${t.outline}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Glyph kind="star" size={20} color={t.outline} stroke={3}/>
            </div>
          ))}
        </div>
        {/* loot */}
        <div style={{ background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 18,
          boxShadow: `0 5px 0 ${t.outline}`, padding: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: t.outline, marginBottom: 10, textAlign: 'center' }}>本夜战利</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <SpiritCardA card={CARDS[0]} size="sm" glow/>
            <SpiritCardA card={CARDS[5]} size="sm"/>
            <SpiritCardA card={CARDS[6]} size="sm"/>
          </div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <RewardRow icon="coin" label="樱币" v="+ 348" t={t}/>
            <RewardRow icon="sparkle" label="经验" v="+ 1,250" t={t}/>
            <RewardRow icon="crystal" label="水晶" v="+ 12" t={t}/>
            <RewardRow icon="trophy" label="徽章" v="+ 2" t={t}/>
          </div>
        </div>
        <div style={{ flex: 1 }}/>
        <div style={{ display: 'flex', gap: 8 }}>
          <StickerBtn theme={t} color={'#fff'} size="md" icon="home" style={{ flex: 1, color: t.outline }}>主页</StickerBtn>
          <StickerBtn theme={t} color={t.primary} size="md" icon="arrow-r" style={{ flex: 2 }}>下一夜</StickerBtn>
        </div>
      </div>
    </div>
  );
}

function RewardRow({ icon, label, v, t }) {
  return (
    <div style={{ background: t.bg, border: `${t.outlineWidth - 0.5}px solid ${t.outline}`, borderRadius: 12, padding: '6px 10px',
      display: 'flex', alignItems: 'center', gap: 6 }}>
      <Glyph kind={icon} size={14} color={t.outline} stroke={3}/>
      <div style={{ flex: 1, fontSize: 10, fontWeight: 700, color: t.inkSoft }}>{label}</div>
      <div style={{ fontSize: 12, fontWeight: 800, color: t.outline }}>{v}</div>
    </div>
  );
}

function VictoryB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse at 50% 30%, #2A3F6E 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody, color: t.starlight }}>
      {/* sparkles */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 18%, ${t.primary} 0 1.2px, transparent 2px),
                          radial-gradient(circle at 70% 12%, #fff 0 1px, transparent 2px),
                          radial-gradient(circle at 30% 60%, ${t.primary} 0 1px, transparent 2px),
                          radial-gradient(circle at 85% 70%, #fff 0 1.2px, transparent 2px),
                          radial-gradient(circle at 50% 50%, ${t.starlight} 0 1px, transparent 2px)` }}/>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 18px 18px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 10, color: t.primary, letterSpacing: 6, marginBottom: 4 }}>✦ ✦ ✦</div>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 44, color: t.primary, lineHeight: 1, letterSpacing: 2, textShadow: `0 0 20px ${t.primary}` }}>SEALED</div>
          <div style={{ fontSize: 10, color: t.starlight, opacity: 0.7, letterSpacing: 4, marginTop: 4 }}>封印成功 · DAWN BREAKS</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 18 }}>
          {[1,1,0].map((on, i) => (
            <Glyph key={i} kind="star" size={28} color={on ? t.primary : `${t.starlight}30`} stroke={1.5}/>
          ))}
        </div>
        <div style={{ background: 'rgba(15,26,46,0.6)', backdropFilter: 'blur(8px)',
          border: `0.5px solid ${t.primary}`, padding: 14 }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 16, color: t.primary, marginBottom: 10, textAlign: 'center', letterSpacing: 2 }}>SPOILS · 战利</div>
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
            <SpiritCardB card={CARDS[0]} size="sm" glow/>
            <SpiritCardB card={CARDS[5]} size="sm"/>
            <SpiritCardB card={CARDS[6]} size="sm"/>
          </div>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <RewardRowB icon="coin" label="GOLD" v="+ 348"/>
            <RewardRowB icon="sparkle" label="EXP" v="+ 1,250"/>
            <RewardRowB icon="crystal" label="SHARDS" v="+ 12"/>
            <RewardRowB icon="trophy" label="BADGES" v="+ 2"/>
          </div>
        </div>
        <div style={{ flex: 1 }}/>
        <div style={{ display: 'flex', gap: 8 }}>
          <InkBtn theme={t} ghost size="md" icon="home" style={{ flex: 1 }}>主页</InkBtn>
          <InkBtn theme={t} size="md" icon="arrow-r" style={{ flex: 2 }}>下一夜</InkBtn>
        </div>
      </div>
    </div>
  );
}

function RewardRowB({ icon, label, v }) {
  const t = THEME_B;
  return (
    <div style={{ background: 'rgba(232,177,76,0.05)', border: `0.5px solid ${t.primary}40`, padding: '6px 10px',
      display: 'flex', alignItems: 'center', gap: 6 }}>
      <Glyph kind={icon} size={12} color={t.primary} stroke={1.5}/>
      <div style={{ flex: 1, fontSize: 8, color: t.primary, letterSpacing: 1.5 }}>{label}</div>
      <div style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.starlight }}>{v}</div>
    </div>
  );
}

Object.assign(window, { MenuA, MenuB, LevelSelectA, LevelSelectB, VictoryA, VictoryB });
