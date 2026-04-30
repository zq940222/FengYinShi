// Smaller / supporting screens — shop, tutorial overlay, achievements,
// leaderboard, pause, and an occasional ribbon.

// ─────────────────────────────────────────
// SHOP
// ─────────────────────────────────────────
const SHOP_ITEMS = [
  { name: '初春卡包', sub: '5 张 · 含 1 SR+', price: 580, icon: 'card', rare: true },
  { name: '羽笔礼盒', sub: '限定皮肤', price: 1280, icon: 'feather' },
  { name: '体力药水', sub: '+ 30 体力', price: 60, icon: 'flame' },
  { name: '夜露宝石', sub: '× 10', price: 199, icon: 'crystal' },
];

function ShopA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto',
      background: `linear-gradient(180deg, #FFE7F0 0%, #F5E8FF 100%)`,
      fontFamily: t.font, paddingBottom: 24 }}>
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={16} color={t.outline} stroke={3}/>
        </button>
        <div style={{ flex: 1, fontSize: 18, fontWeight: 800, color: t.outline, textAlign: 'center' }}>樱花商店</div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 999, padding: '4px 10px', boxShadow: `0 3px 0 ${t.outline}` }}>
          <Glyph kind="coin" size={12} color={t.outline} stroke={3}/>
          <span style={{ fontSize: 12, fontWeight: 800, color: t.outline }}>1,248</span>
        </div>
      </div>

      {/* hero card pack */}
      <div style={{ margin: '8px 14px', position: 'relative',
        background: `linear-gradient(135deg, ${t.primary} 0%, ${t.secondary} 100%)`,
        border: `${t.outlineWidth}px solid ${t.outline}`,
        borderRadius: 22, padding: 16,
        boxShadow: `0 5px 0 ${t.outline}`, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -10, right: 14, transform: 'rotate(8deg)' }}>
          <SpiritCardA card={CARDS[0]} size="sm"/>
        </div>
        <div style={{ position: 'absolute', top: 6, right: 80, transform: 'rotate(-8deg)' }}>
          <SpiritCardA card={CARDS[7]} size="sm"/>
        </div>
        <div style={{ position: 'relative', maxWidth: '60%' }}>
          <StickerTag theme={t} color={t.accent} icon="star">限时</StickerTag>
          <div style={{ marginTop: 6, fontSize: 19, fontWeight: 800, color: '#fff', textShadow: `0 2px 0 ${t.outline}`, lineHeight: 1.1 }}>初春十连</div>
          <div style={{ fontSize: 10, color: '#fff', opacity: 0.9, fontWeight: 700, marginTop: 4 }}>必出 1 张 SSR · 04:21:08</div>
        </div>
        <div style={{ marginTop: 56 }}>
          <StickerBtn theme={t} color={t.accent} size="md" icon="sparkle">3,800 樱币</StickerBtn>
        </div>
      </div>

      {/* item grid */}
      <div style={{ padding: '10px 14px 0' }}>
        <SectionHeader t={t}>每日特惠</SectionHeader>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
          {SHOP_ITEMS.map(it => (
            <div key={it.name} style={{ background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 16,
              boxShadow: `0 4px 0 ${t.outline}`, padding: 10 }}>
              <div style={{ height: 70, borderRadius: 10, background: it.rare ? t.accent : t.bg,
                border: `${t.outlineWidth - 0.5}px solid ${t.outline}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                <Glyph kind={it.icon} size={36} color={t.outline} stroke={3}/>
              </div>
              <div style={{ fontSize: 12, fontWeight: 800, color: t.outline }}>{it.name}</div>
              <div style={{ fontSize: 9, color: t.inkSoft, fontWeight: 700, marginBottom: 6 }}>{it.sub}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Glyph kind="coin" size={11} color={t.outline} stroke={3}/>
                  <span style={{ fontSize: 11, fontWeight: 800, color: t.outline }}>{it.price}</span>
                </div>
                <button style={{ width: 28, height: 28, borderRadius: 999, background: t.primary, border: `${t.outlineWidth - 0.5}px solid ${t.outline}`, boxShadow: `0 2px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Glyph kind="plus" size={14} color="#fff" stroke={3.5}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto', position: 'relative',
      background: `radial-gradient(ellipse at 50% 0%, #1F3357 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody, color: t.starlight, paddingBottom: 24 }}>
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 30, height: 30, borderRadius: 2, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={14} color={t.primary} stroke={1.5}/>
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 22, color: t.primary, lineHeight: 1, letterSpacing: 2 }}>星河集市</div>
          <div style={{ fontSize: 8, color: t.starlight, opacity: 0.6, letterSpacing: 3 }}>BAZAAR</div>
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '4px 10px', border: `0.5px solid ${t.primary}80`, background: 'rgba(232,177,76,0.1)' }}>
          <Glyph kind="coin" size={11} color={t.primary} stroke={1.5}/>
          <span style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.primary }}>1,248</span>
        </div>
      </div>

      <div style={{ margin: '8px 14px', position: 'relative',
        background: `linear-gradient(135deg, rgba(232,177,76,0.18), rgba(91,192,190,0.12))`,
        border: `0.5px solid ${t.primary}`, padding: 16, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -8, right: 14, transform: 'rotate(8deg)' }}>
          <SpiritCardB card={CARDS[0]} size="sm"/>
        </div>
        <div style={{ position: 'absolute', top: 6, right: 78, transform: 'rotate(-8deg)' }}>
          <SpiritCardB card={CARDS[7]} size="sm"/>
        </div>
        <div style={{ maxWidth: '60%', position: 'relative' }}>
          <InkTag theme={t} icon="star">LIMITED</InkTag>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 26, color: t.primary, marginTop: 6, lineHeight: 1.1, letterSpacing: 1 }}>初春十连</div>
          <div style={{ fontSize: 9, color: t.starlight, opacity: 0.7, letterSpacing: 1.5, marginTop: 3 }}>1 GUARANTEED SSR · 04:21:08</div>
        </div>
        <div style={{ marginTop: 56 }}>
          <InkBtn theme={t} size="md" icon="sparkle">3,800 GOLD</InkBtn>
        </div>
      </div>

      <div style={{ padding: '10px 14px 0' }}>
        <SectionHeaderB>每日特惠</SectionHeaderB>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
          {SHOP_ITEMS.map(it => (
            <div key={it.name} style={{ background: 'rgba(15,26,46,0.6)', backdropFilter: 'blur(8px)', border: `0.5px solid ${t.primary}60`, padding: 10 }}>
              <div style={{ height: 64, background: it.rare ? `linear-gradient(135deg, ${t.primary}40, ${t.secondary}30)` : 'rgba(232,177,76,0.05)',
                border: `0.5px solid ${t.primary}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                <Glyph kind={it.icon} size={32} color={t.primary} stroke={1.5}/>
              </div>
              <div style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.primary, lineHeight: 1 }}>{it.name}</div>
              <div style={{ fontSize: 8, color: t.starlight, opacity: 0.7, letterSpacing: 1, margin: '3px 0 6px' }}>{it.sub}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Glyph kind="coin" size={10} color={t.primary} stroke={1.5}/>
                  <span style={{ fontFamily: t.fontDisplay, fontSize: 13, color: t.starlight }}>{it.price}</span>
                </div>
                <button style={{ width: 24, height: 24, background: t.primary, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Glyph kind="plus" size={12} color={t.ink} stroke={2}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// TUTORIAL OVERLAY
// ─────────────────────────────────────────
function TutorialA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `linear-gradient(180deg, #FFE7F0 0%, #F0E2FF 100%)`,
      fontFamily: t.font }}>
      {/* simulated gameplay underneath */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
        <GameplayA/>
      </div>
      {/* dimmer */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(58,34,64,0.55)' }}/>
      {/* spotlight on a card */}
      <div style={{ position: 'absolute', top: '60%', right: '18%',
        width: 100, height: 100, borderRadius: 999,
        boxShadow: `0 0 0 9999px rgba(58,34,64,0.55)`,
        background: 'transparent',
        border: `${t.outlineWidth}px solid ${t.accent}`,
      }}/>

      {/* tutorial mascot bubble */}
      <div style={{ position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)', maxWidth: 320,
        background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 18,
        boxShadow: `0 5px 0 ${t.outline}`, padding: 14, position: 'absolute',
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
          <HeroineAvatar heroine={HEROINES[0]} size={44} theme={t}/>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800, color: t.outline }}>羽笔小灵 · 教学 1/4</div>
            <div style={{ fontSize: 10, color: t.inkSoft, fontWeight: 700 }}>第一步：封印灵卡</div>
          </div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color: t.outline, lineHeight: 1.5 }}>
          看到地上发光的卡片了吗？<br/>
          靠近后<b>点一下</b>就能把灵卡封印进背包啦 ✦
        </div>
      </div>

      {/* progress dots */}
      <div style={{ position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 6 }}>
        {[1,0,0,0].map((on, i) => (
          <div key={i} style={{
            width: on ? 22 : 10, height: 10, borderRadius: 999,
            background: on ? t.primary : '#fff',
            border: `${t.outlineWidth - 0.5}px solid ${t.outline}`,
          }}/>
        ))}
      </div>

      {/* CTAs */}
      <div style={{ position: 'absolute', bottom: 18, left: 14, right: 14, display: 'flex', gap: 8 }}>
        <StickerBtn theme={t} color={'#fff'} size="md" icon="x" style={{ flex: 0, color: t.outline, paddingLeft: 16, paddingRight: 16 }}>跳过</StickerBtn>
        <StickerBtn theme={t} color={t.primary} size="md" full icon="arrow-r">明白啦</StickerBtn>
      </div>
    </div>
  );
}

function TutorialB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: `radial-gradient(ellipse at 30% 20%, #1F3357 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody, color: t.starlight }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
        <GameplayB/>
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,24,0.6)' }}/>
      <div style={{ position: 'absolute', top: '60%', right: '15%',
        width: 90, height: 90, borderRadius: 999,
        boxShadow: `0 0 0 9999px rgba(5,10,24,0.7)`,
        border: `1px solid ${t.primary}`,
      }}/>

      <div style={{ position: 'absolute', top: '16%', left: '50%', transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)', maxWidth: 320,
        background: 'rgba(15,26,46,0.85)', backdropFilter: 'blur(10px)',
        border: `0.5px solid ${t.primary}`, padding: 14,
      }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
          <HeroineAvatar heroine={HEROINES[0]} size={40} theme={t}/>
          <div>
            <div style={{ fontFamily: t.fontDisplay, fontSize: 16, color: t.primary, lineHeight: 1, letterSpacing: 1 }}>羽笔小灵</div>
            <div style={{ fontSize: 8, color: t.starlight, opacity: 0.7, letterSpacing: 2, marginTop: 2 }}>TUTORIAL · 01 / 04</div>
          </div>
        </div>
        <div style={{ fontFamily: t.fontDisplay, fontSize: 18, color: t.primary, marginBottom: 6, letterSpacing: 1 }}>第一步 · 封印灵卡</div>
        <div style={{ fontSize: 11, color: t.starlight, lineHeight: 1.6, opacity: 0.9 }}>
          地上发光的灵卡近在咫尺。靠近后轻点屏幕，便能将其封印入囊。
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 76, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 4 }}>
        {[1,0,0,0].map((on, i) => (
          <div key={i} style={{
            width: on ? 20 : 6, height: 2,
            background: on ? t.primary : `${t.primary}40`,
          }}/>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: 16, left: 14, right: 14, display: 'flex', gap: 8 }}>
        <InkBtn theme={t} ghost size="md" style={{ paddingLeft: 18, paddingRight: 18 }}>SKIP</InkBtn>
        <InkBtn theme={t} size="md" full icon="arrow-r">CONTINUE</InkBtn>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// ACHIEVEMENTS
// ─────────────────────────────────────────
const ACH = [
  { name: '初心者', sub: '完成第一次封印', icon: 'sparkle', done: true, prog: '1/1' },
  { name: '收藏家', sub: '收集 10 张灵卡', icon: 'card', done: true, prog: '10/10' },
  { name: '满月夜', sub: '一夜内封印 5 张', icon: 'moon', done: false, prog: '3/5' },
  { name: '不眠之星', sub: '连续 7 天登录', icon: 'star', done: false, prog: '4/7' },
  { name: '镜界来客', sub: '获得 SSR 灵卡', icon: 'crystal', done: false, prog: '0/1' },
  { name: '羽笔大师', sub: '通关全部章节', icon: 'feather', done: false, prog: '3/12' },
];

function AchA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto',
      background: `linear-gradient(180deg, ${t.bg} 0%, #FCE8F0 100%)`,
      fontFamily: t.font, paddingBottom: 24 }}>
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={16} color={t.outline} stroke={3}/>
        </button>
        <div style={{ flex: 1, fontSize: 18, fontWeight: 800, color: t.outline, textAlign: 'center' }}>成就</div>
        <div style={{ width: 36 }}/>
      </div>

      <div style={{ margin: '6px 14px 14px', background: t.accent, border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 18,
        boxShadow: `0 4px 0 ${t.outline}`, padding: '10px 14px',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <Glyph kind="trophy" size={32} color={t.outline} stroke={3}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: t.outline }}>成就分 · 240</div>
          <div style={{ height: 8, background: '#fff', border: `1.5px solid ${t.outline}`, borderRadius: 999, marginTop: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '34%', background: t.primary }}/>
          </div>
          <div style={{ fontSize: 9, color: t.outline, opacity: 0.7, fontWeight: 700, marginTop: 2 }}>2 / 6 已解锁</div>
        </div>
      </div>

      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {ACH.map(a => (
          <div key={a.name} style={{ background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 14,
            boxShadow: `0 3px 0 ${t.outline}`, padding: 10,
            display: 'flex', alignItems: 'center', gap: 10,
            opacity: a.done ? 1 : 0.85,
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 999,
              background: a.done ? t.mint : t.bg, border: `${t.outlineWidth - 0.5}px solid ${t.outline}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Glyph kind={a.icon} size={22} color={t.outline} stroke={3}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: t.outline }}>{a.name}</div>
              <div style={{ fontSize: 10, color: t.inkSoft, fontWeight: 700 }}>{a.sub}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              {a.done
                ? <StickerTag theme={t} color={t.mint} icon="check">已完成</StickerTag>
                : <div style={{ fontSize: 12, fontWeight: 800, color: t.outline }}>{a.prog}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AchB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto', position: 'relative',
      background: `radial-gradient(ellipse at 50% 0%, #1F3357 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody, color: t.starlight, paddingBottom: 24 }}>
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 30, height: 30, borderRadius: 2, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={14} color={t.primary} stroke={1.5}/>
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 22, color: t.primary, lineHeight: 1, letterSpacing: 2 }}>星之纪</div>
          <div style={{ fontSize: 8, color: t.starlight, opacity: 0.6, letterSpacing: 3 }}>ACHIEVEMENTS</div>
        </div>
        <div style={{ width: 30 }}/>
      </div>

      <div style={{ margin: '6px 14px 14px', background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}`, padding: '10px 14px',
        display: 'flex', alignItems: 'center', gap: 10 }}>
        <Glyph kind="trophy" size={28} color={t.primary} stroke={1.5}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 18, color: t.primary, lineHeight: 1 }}>STAR · 240</div>
          <div style={{ height: 2, background: 'rgba(255,255,255,0.1)', marginTop: 6 }}>
            <div style={{ height: '100%', width: '34%', background: t.primary }}/>
          </div>
          <div style={{ fontSize: 8, color: t.starlight, opacity: 0.7, letterSpacing: 1.5, marginTop: 3 }}>2 / 6 UNLOCKED</div>
        </div>
      </div>

      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {ACH.map(a => (
          <div key={a.name} style={{ background: 'rgba(15,26,46,0.6)', border: `0.5px solid ${t.primary}40`, padding: 10,
            display: 'flex', alignItems: 'center', gap: 10,
            opacity: a.done ? 1 : 0.7 }}>
            <div style={{ width: 38, height: 38, background: a.done ? `${t.primary}30` : 'rgba(255,255,255,0.05)', border: `0.5px solid ${a.done ? t.primary : t.starlight + '30'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Glyph kind={a.icon} size={18} color={a.done ? t.primary : t.starlight} stroke={1.5}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: t.fontDisplay, fontSize: 15, color: t.primary, letterSpacing: 1 }}>{a.name}</div>
              <div style={{ fontSize: 9, color: t.starlight, opacity: 0.7, letterSpacing: 1 }}>{a.sub}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              {a.done
                ? <Glyph kind="check" size={16} color={t.primary} stroke={2}/>
                : <div style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.primary }}>{a.prog}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// LEADERBOARD
// ─────────────────────────────────────────
const LB = [
  { rank: 1, name: '夜·风铃', sc: 28420, color: '#FF7AB6' },
  { rank: 2, name: '苍·拾光者', sc: 26100, color: '#8C70CF' },
  { rank: 3, name: '梅·零度', sc: 24890, color: '#5BC0BE' },
  { rank: 4, name: '璐米 (你)', sc: 18750, color: '#FFD66B', me: true },
  { rank: 5, name: '雨·镜面', sc: 17220, color: '#9BE0C9' },
  { rank: 6, name: '北·灯下', sc: 15940, color: '#FFA8B8' },
  { rank: 7, name: '柚·糖霜', sc: 14430, color: '#B79BE8' },
];

function RankA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto',
      background: `linear-gradient(180deg, #FFE7F0 0%, #F0E2FF 100%)`,
      fontFamily: t.font, paddingBottom: 24 }}>
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 36, height: 36, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={16} color={t.outline} stroke={3}/>
        </button>
        <div style={{ flex: 1, fontSize: 18, fontWeight: 800, color: t.outline, textAlign: 'center' }}>本周榜单</div>
        <div style={{ width: 36 }}/>
      </div>

      {/* podium */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 8, padding: '20px 14px 14px' }}>
        {[LB[1], LB[0], LB[2]].map((u, idx) => {
          const isFirst = idx === 1;
          return (
            <div key={u.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <HeroineAvatar heroine={{ ...HEROINES[0], color: u.color }} size={isFirst ? 64 : 50} theme={t}/>
                {isFirst && <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', fontSize: 24 }}>👑</div>}
              </div>
              <div style={{ fontSize: 12, fontWeight: 800, color: t.outline, marginTop: 6 }}>{u.name}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: t.inkSoft }}>{u.sc.toLocaleString()}</div>
              <div style={{ width: '100%', height: isFirst ? 60 : idx === 0 ? 44 : 32,
                background: [t.secondary, t.primary, t.mint][idx],
                border: `${t.outlineWidth}px solid ${t.outline}`,
                borderBottom: 'none',
                borderRadius: '14px 14px 0 0',
                marginTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, fontWeight: 800, color: '#fff', textShadow: `0 2px 0 ${t.outline}`,
              }}>{u.rank}</div>
            </div>
          );
        })}
      </div>

      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {LB.slice(3).map(u => (
          <div key={u.name} style={{ background: u.me ? t.accent : '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 12,
            boxShadow: `0 3px 0 ${t.outline}`, padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: t.outline, width: 22 }}>#{u.rank}</div>
            <HeroineAvatar heroine={{ ...HEROINES[0], color: u.color }} size={32} theme={t}/>
            <div style={{ flex: 1, fontSize: 12, fontWeight: 800, color: t.outline }}>{u.name}</div>
            <div style={{ fontSize: 12, fontWeight: 800, color: t.outline }}>{u.sc.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RankB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto', position: 'relative',
      background: `radial-gradient(ellipse at 50% 0%, #1F3357 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody, color: t.starlight, paddingBottom: 24 }}>
      <div style={{ padding: '14px 14px 6px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{ width: 30, height: 30, borderRadius: 2, background: 'rgba(232,177,76,0.1)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="arrow-l" size={14} color={t.primary} stroke={1.5}/>
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 22, color: t.primary, lineHeight: 1, letterSpacing: 2 }}>群星谱</div>
          <div style={{ fontSize: 8, color: t.starlight, opacity: 0.6, letterSpacing: 3 }}>WEEKLY · LEADERBOARD</div>
        </div>
        <div style={{ width: 30 }}/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 6, padding: '24px 14px 14px' }}>
        {[LB[1], LB[0], LB[2]].map((u, idx) => {
          const isFirst = idx === 1;
          return (
            <div key={u.name} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <HeroineAvatar heroine={{ ...HEROINES[0], color: u.color }} size={isFirst ? 56 : 44} theme={t}/>
              <div style={{ fontFamily: t.fontDisplay, fontSize: 15, color: t.primary, marginTop: 6, letterSpacing: 1 }}>{u.name}</div>
              <div style={{ fontSize: 9, color: t.starlight, opacity: 0.7, letterSpacing: 1 }}>{u.sc.toLocaleString()}</div>
              <div style={{ width: '100%', height: isFirst ? 54 : idx === 0 ? 40 : 28,
                background: 'rgba(232,177,76,0.1)',
                border: `0.5px solid ${t.primary}`,
                borderBottom: 'none',
                marginTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: t.fontDisplay, fontSize: 22, color: t.primary,
              }}>{u.rank}</div>
            </div>
          );
        })}
      </div>

      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {LB.slice(3).map(u => (
          <div key={u.name} style={{ background: u.me ? `${t.primary}20` : 'rgba(15,26,46,0.6)',
            border: `0.5px solid ${u.me ? t.primary : t.primary + '40'}`,
            padding: '6px 12px',
            display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ fontFamily: t.fontDisplay, fontSize: 16, color: t.primary, width: 26 }}>{String(u.rank).padStart(2, '0')}</div>
            <HeroineAvatar heroine={{ ...HEROINES[0], color: u.color }} size={26} theme={t}/>
            <div style={{ flex: 1, fontFamily: t.fontDisplay, fontSize: 14, color: t.starlight, letterSpacing: 1 }}>{u.name}</div>
            <div style={{ fontFamily: t.fontDisplay, fontSize: 14, color: t.primary }}>{u.sc.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// PAUSE / SETTINGS
// ─────────────────────────────────────────
function PauseA() {
  const t = THEME_A;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', fontFamily: t.font }}>
      <div style={{ position: 'absolute', inset: 0 }}><GameplayA/></div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(58,34,64,0.6)' }}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 'calc(100% - 36px)', maxWidth: 320,
        background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 22,
        boxShadow: `0 6px 0 ${t.outline}`, padding: 18 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: t.outline, textAlign: 'center', marginBottom: 12 }}>暂停</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Toggle label="背景音乐" v t={t}/>
          <Toggle label="音效" v t={t}/>
          <Toggle label="震动" v={false} t={t}/>
          <SliderRow label="音量" v={70} t={t}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
          <StickerBtn theme={t} color={t.primary} size="md" full icon="play">继续</StickerBtn>
          <StickerBtn theme={t} color={'#fff'} size="md" full icon="home" style={{ color: t.outline }}>放弃本夜</StickerBtn>
        </div>
      </div>
    </div>
  );
}

function Toggle({ label, v, t }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontSize: 13, fontWeight: 800, color: t.outline }}>{label}</div>
      <div style={{ width: 44, height: 24, borderRadius: 999,
        background: v ? t.primary : '#fff',
        border: `${t.outlineWidth - 0.5}px solid ${t.outline}`,
        position: 'relative', transition: 'background 0.15s',
      }}>
        <div style={{ position: 'absolute', top: 1, left: v ? 21 : 1,
          width: 18, height: 18, borderRadius: 999, background: '#fff',
          border: `${t.outlineWidth - 1}px solid ${t.outline}`,
          transition: 'left 0.15s' }}/>
      </div>
    </div>
  );
}

function SliderRow({ label, v, t }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: t.outline }}>{label}</div>
        <div style={{ fontSize: 11, fontWeight: 800, color: t.outline }}>{v}</div>
      </div>
      <div style={{ height: 10, background: '#FFE0E8', border: `1.5px solid ${t.outline}`, borderRadius: 999, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${v}%`, background: t.primary, borderRadius: 999 }}/>
        <div style={{ position: 'absolute', top: '50%', left: `${v}%`, transform: 'translate(-50%,-50%)',
          width: 18, height: 18, borderRadius: 999, background: '#fff',
          border: `${t.outlineWidth - 0.5}px solid ${t.outline}`, boxShadow: `0 2px 0 ${t.outline}` }}/>
      </div>
    </div>
  );
}

function PauseB() {
  const t = THEME_B;
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', fontFamily: t.fontBody }}>
      <div style={{ position: 'absolute', inset: 0 }}><GameplayB/></div>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,24,0.7)', backdropFilter: 'blur(2px)' }}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 'calc(100% - 36px)', maxWidth: 320,
        background: 'rgba(15,26,46,0.85)', backdropFilter: 'blur(10px)',
        border: `0.5px solid ${t.primary}`, padding: 18, color: t.starlight }}>
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 28, color: t.primary, lineHeight: 1, letterSpacing: 4 }}>PAUSED</div>
          <div style={{ fontSize: 8, color: t.starlight, opacity: 0.6, letterSpacing: 4, marginTop: 4 }}>夜停</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ToggleB label="MUSIC" v/>
          <ToggleB label="SFX" v/>
          <ToggleB label="HAPTICS" v={false}/>
          <SliderRowB label="VOLUME" v={70}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
          <InkBtn theme={t} size="md" full icon="play">RESUME</InkBtn>
          <InkBtn theme={t} ghost size="md" full icon="home">ABANDON NIGHT</InkBtn>
        </div>
      </div>
    </div>
  );
}

function ToggleB({ label, v }) {
  const t = THEME_B;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ fontFamily: t.fontDisplay, fontSize: 13, color: t.primary, letterSpacing: 2 }}>{label}</div>
      <div style={{ width: 36, height: 16, background: 'rgba(255,255,255,0.05)',
        border: `0.5px solid ${t.primary}`,
        position: 'relative' }}>
        <div style={{ position: 'absolute', top: 1, left: v ? 19 : 1,
          width: 14, height: 12, background: v ? t.primary : `${t.starlight}50`,
          transition: 'left 0.15s' }}/>
      </div>
    </div>
  );
}

function SliderRowB({ label, v }) {
  const t = THEME_B;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ fontFamily: t.fontDisplay, fontSize: 13, color: t.primary, letterSpacing: 2 }}>{label}</div>
        <div style={{ fontFamily: t.fontDisplay, fontSize: 13, color: t.starlight }}>{v}</div>
      </div>
      <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${v}%`, background: t.primary }}/>
        <div style={{ position: 'absolute', top: '50%', left: `${v}%`, transform: 'translate(-50%,-50%)',
          width: 10, height: 10, background: t.primary }}/>
      </div>
    </div>
  );
}

Object.assign(window, { ShopA, ShopB, TutorialA, TutorialB, AchA, AchB, RankA, RankB, PauseA, PauseB });
