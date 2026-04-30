// Main gameplay screen — 探索 + 撚退 (search & extract)
// Top-down dungeon-ish grid view with the heroine in the middle, cards
// scattered as "sealed spirits" to be captured, and an extraction timer.

// ─────────────────────────────────────────
// Theme A — Pink + Lavender, flat puffy
// ─────────────────────────────────────────
function GameplayA() {
  const t = THEME_A;
  const cardSlots = [CARDS[0], CARDS[3], CARDS[5]]; // equipped quick-slots
  const bgImg = window.ASSETS?.bg?.a;
  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: bgImg
        ? `url(${bgImg}) center/cover no-repeat`
        : `linear-gradient(180deg, #FFE7F0 0%, #F0E2FF 100%)`,
      fontFamily: t.font,
    }}>
      {/* tint overlay so HUD stays readable */}
      {bgImg && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,235,248,0.55)' }} />}
      {/* dungeon-grid floor */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(140,112,207,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(140,112,207,0.18) 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse at center, #000 30%, transparent 80%)' }} />

      {/* sparkles */}
      {[[12,18],[80,22],[20,55],[88,62],[14,82],[78,86],[55,12]].map(([x,y],i) => (
        <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, color: t.accent, fontSize: 14 + (i%3)*4, opacity: 0.7 }}>✦</div>
      ))}

      {/* TOP HUD */}
      <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', gap: 10, zIndex: 5 }}>
        <div style={{
          background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 999,
          padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: `0 3px 0 ${t.outline}`, flex: 1,
        }}>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: HEROINES[0].color, border: `${t.outlineWidth - 0.5}px solid ${t.outline}`, flexShrink: 0 }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: t.outline, opacity: 0.6 }}>HP</div>
            <div style={{ height: 8, background: '#FFE0E8', border: `1.5px solid ${t.outline}`, borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '72%', background: t.danger }} />
            </div>
          </div>
          <div style={{ fontSize: 12, fontWeight: 800, color: t.outline }}>72</div>
        </div>
        <button style={{ width: 40, height: 40, borderRadius: 999, background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`, boxShadow: `0 3px 0 ${t.outline}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="pause" size={16} color={t.outline} stroke={3}/>
        </button>
      </div>

      {/* extract timer */}
      <div style={{ position: 'absolute', top: 70, left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
        <div style={{
          background: t.accent, border: `${t.outlineWidth}px solid ${t.outline}`,
          borderRadius: 999, padding: '6px 16px',
          display: 'flex', alignItems: 'center', gap: 6,
          boxShadow: `0 4px 0 ${t.outline}`,
        }}>
          <Glyph kind="moon" size={14} color={t.outline} stroke={3}/>
          <span style={{ fontWeight: 800, color: t.outline, fontSize: 13 }}>夜幕</span>
          <span style={{ fontWeight: 800, color: t.outline, fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>02:14</span>
        </div>
      </div>

      {/* the heroine in center */}
      <div style={{ position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 4 }}>
        <div style={{ position: 'relative' }}>
          {/* aura ring */}
          <div style={{
            position: 'absolute', inset: -16, borderRadius: 999,
            background: `radial-gradient(circle, ${HEROINES[0].color}50 0%, transparent 70%)`,
          }}/>
          <HeroineAvatar heroine={HEROINES[0]} size={68} theme={t}/>
          {/* feather wand */}
          <div style={{ position: 'absolute', top: -6, right: -10, transform: 'rotate(20deg)' }}>
            <div style={{ width: 4, height: 32, background: t.accent, border: `2px solid ${t.outline}`, borderRadius: 4 }}/>
            <div style={{ position: 'absolute', top: -8, left: -4, width: 14, height: 14, background: t.primary, border: `${t.outlineWidth}px solid ${t.outline}`, borderRadius: 999 }}/>
          </div>
        </div>
      </div>

      {/* sealed cards on floor */}
      <div style={{ position: 'absolute', top: '28%', left: '20%', transform: 'rotate(-12deg)' }}>
        <SpiritCardA card={CARDS[1]} size="xs" sealed/>
      </div>
      <div style={{ position: 'absolute', top: '34%', right: '15%', transform: 'rotate(8deg)' }}>
        <SpiritCardA card={CARDS[2]} size="xs" sealed/>
      </div>
      <div style={{ position: 'absolute', top: '70%', right: '24%', transform: 'rotate(-6deg)' }}>
        <SpiritCardA card={CARDS[7]} size="xs" sealed glow/>
      </div>

      {/* "tap to seal" floating prompt */}
      <div style={{ position: 'absolute', top: '63%', right: '20%', zIndex: 6 }}>
        <div style={{
          background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`,
          borderRadius: 14, padding: '4px 10px',
          boxShadow: `0 3px 0 ${t.outline}`,
          fontSize: 10, fontWeight: 800, color: t.outline,
          transform: 'rotate(4deg)',
        }}>
          点击封印 ✦
        </div>
        <div style={{ position: 'absolute', bottom: -8, left: 14,
          width: 10, height: 10, background: '#fff',
          border: `${t.outlineWidth}px solid ${t.outline}`,
          borderTop: 'none', borderLeft: 'none',
          transform: 'rotate(45deg)' }}/>
      </div>

      {/* progress / loot bar */}
      <div style={{ position: 'absolute', bottom: 168, left: 14, right: 14, zIndex: 5 }}>
        <div style={{
          background: '#fff', border: `${t.outlineWidth}px solid ${t.outline}`,
          borderRadius: 14, padding: '8px 12px',
          boxShadow: `0 3px 0 ${t.outline}`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <Glyph kind="bag" size={20} color={t.outline} stroke={3}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: t.outline, opacity: 0.7, marginBottom: 2 }}>背包 5/8</div>
            <div style={{ display: 'flex', gap: 3 }}>
              {[0,0,0,0,0,1,1,1].map((empty,i) => (
                <div key={i} style={{ flex: 1, height: 6,
                  background: empty ? '#FFE0E8' : t.primary,
                  border: `1.5px solid ${t.outline}`,
                  borderRadius: 3 }}/>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* card quick-slots + extract button */}
      <div style={{ position: 'absolute', bottom: 18, left: 14, right: 14, zIndex: 5,
        display: 'flex', gap: 10, alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {cardSlots.map((c, i) => (
            <div key={c.id} style={{ position: 'relative' }}>
              <SpiritCardA card={c} size="xs"/>
              <div style={{ position: 'absolute', top: -6, right: -6,
                width: 18, height: 18, borderRadius: 999,
                background: t.outline, color: '#fff',
                fontSize: 10, fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `2px solid #fff`,
              }}>{i+1}</div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}/>
        <StickerBtn theme={t} color={t.primary} size="md" icon="feather">撤离</StickerBtn>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Theme B — Deep Teal + Gold, watercolor
// ─────────────────────────────────────────
function GameplayB() {
  const t = THEME_B;
  const cardSlots = [CARDS[0], CARDS[3], CARDS[5]];
  const bgImg = window.ASSETS?.bg?.b;
  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: bgImg
        ? `url(${bgImg}) center/cover no-repeat`
        : `radial-gradient(ellipse at 30% 20%, #1F3357 0%, #0F1A2E 60%, #050A18 100%)`,
      fontFamily: t.fontBody,
    }}>
      {bgImg && <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,18,40,0.55)' }} />}
      {/* starfield */}
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 18% 22%, #fff 0 0.7px, transparent 1.5px),
                          radial-gradient(circle at 72% 18%, #fff 0 1px, transparent 1.5px),
                          radial-gradient(circle at 32% 60%, ${t.primary} 0 1px, transparent 1.5px),
                          radial-gradient(circle at 88% 72%, #fff 0 0.7px, transparent 1.5px),
                          radial-gradient(circle at 12% 88%, #fff 0 0.7px, transparent 1.5px),
                          radial-gradient(circle at 50% 38%, ${t.starlight} 0 0.8px, transparent 1.5px),
                          radial-gradient(circle at 8% 45%, #fff 0 0.6px, transparent 1.2px),
                          radial-gradient(circle at 60% 80%, ${t.primary} 0 0.8px, transparent 1.4px)`,
      }}/>
      {/* watercolor wash */}
      <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', aspectRatio: '1', borderRadius: '50%',
        background: `radial-gradient(circle, ${t.secondary}30 0%, transparent 60%)`,
        filter: 'blur(20px)' }}/>

      {/* TOP HUD */}
      <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', gap: 10, zIndex: 5, alignItems: 'center' }}>
        <div style={{
          background: 'rgba(15,26,46,0.7)', backdropFilter: 'blur(8px)',
          border: `0.5px solid ${t.primary}80`, borderRadius: 4,
          padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 8, flex: 1,
        }}>
          <div style={{ width: 22, height: 22, borderRadius: 999, background: HEROINES[0].color, border: `1px solid ${t.primary}`, flexShrink: 0 }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 8, color: t.primary, letterSpacing: 1.5, marginBottom: 2 }}>VITALITY</div>
            <div style={{ height: 5, background: 'rgba(255,255,255,0.08)', border: `0.5px solid ${t.primary}40`, borderRadius: 0, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '72%', background: `linear-gradient(90deg, ${t.danger}, ${t.primary})` }} />
            </div>
          </div>
          <div style={{ fontFamily: t.fontDisplay, fontSize: 16, color: t.primary }}>72</div>
        </div>
        <button style={{ width: 32, height: 32, borderRadius: 4, background: 'rgba(15,26,46,0.7)', border: `0.5px solid ${t.primary}80`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph kind="pause" size={14} color={t.primary} stroke={1.5}/>
        </button>
      </div>

      {/* extract timer */}
      <div style={{ position: 'absolute', top: 64, left: '50%', transform: 'translateX(-50%)', zIndex: 5, textAlign: 'center' }}>
        <div style={{ fontSize: 9, color: t.primary, letterSpacing: 3, fontFamily: t.fontBody }}>UNTIL DAWN</div>
        <div style={{ fontFamily: t.fontDisplay, fontSize: 32, color: t.primary, lineHeight: 1, letterSpacing: 1, fontVariantNumeric: 'tabular-nums', textShadow: `0 0 16px ${t.primary}60` }}>02:14</div>
      </div>

      {/* concentric rune ring around heroine */}
      <div style={{ position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
        <svg width="240" height="240" viewBox="0 0 240 240" style={{ opacity: 0.6 }}>
          <circle cx="120" cy="120" r="110" fill="none" stroke={t.primary} strokeWidth="0.5" strokeDasharray="2 4"/>
          <circle cx="120" cy="120" r="80" fill="none" stroke={t.primary} strokeWidth="0.7"/>
          <circle cx="120" cy="120" r="50" fill="none" stroke={t.secondary} strokeWidth="0.5" strokeDasharray="6 3"/>
          {/* rune marks */}
          {[0,60,120,180,240,300].map(deg => (
            <text key={deg} x="120" y="20" textAnchor="middle" fontFamily={t.fontDisplay} fontSize="10" fill={t.primary}
              transform={`rotate(${deg} 120 120)`}>✦</text>
          ))}
        </svg>
      </div>

      {/* heroine center */}
      <div style={{ position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 4 }}>
        <HeroineAvatar heroine={HEROINES[0]} size={62} theme={t}/>
      </div>

      {/* sealed cards on floor */}
      <div style={{ position: 'absolute', top: '24%', left: '14%', transform: 'rotate(-15deg)' }}>
        <SpiritCardB card={CARDS[1]} size="xs" sealed/>
      </div>
      <div style={{ position: 'absolute', top: '32%', right: '14%', transform: 'rotate(10deg)' }}>
        <SpiritCardB card={CARDS[2]} size="xs" sealed/>
      </div>
      <div style={{ position: 'absolute', top: '70%', right: '20%', transform: 'rotate(-8deg)' }}>
        <SpiritCardB card={CARDS[7]} size="xs" sealed glow/>
      </div>

      {/* tap to seal */}
      <div style={{ position: 'absolute', top: '64%', right: '18%', zIndex: 6,
        background: 'rgba(15,26,46,0.8)', backdropFilter: 'blur(4px)',
        border: `0.5px solid ${t.primary}`, borderRadius: 2,
        padding: '3px 8px', fontSize: 9, color: t.primary, letterSpacing: 2,
        fontFamily: t.fontDisplay,
      }}>
        TAP TO SEAL
      </div>

      {/* loot meter */}
      <div style={{ position: 'absolute', bottom: 156, left: 14, right: 14, zIndex: 5,
        background: 'rgba(15,26,46,0.6)', backdropFilter: 'blur(8px)',
        border: `0.5px solid ${t.primary}60`, borderRadius: 2, padding: '6px 10px',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <Glyph kind="bag" size={16} color={t.primary} stroke={1.5}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 8, color: t.primary, letterSpacing: 2, marginBottom: 3 }}>SATCHEL · 5 / 8</div>
          <div style={{ display: 'flex', gap: 2 }}>
            {[0,0,0,0,0,1,1,1].map((empty,i) => (
              <div key={i} style={{ flex: 1, height: 3,
                background: empty ? 'rgba(255,255,255,0.08)' : t.primary,
                borderRadius: 0 }}/>
            ))}
          </div>
        </div>
      </div>

      {/* card slots + extract */}
      <div style={{ position: 'absolute', bottom: 16, left: 14, right: 14, zIndex: 5,
        display: 'flex', gap: 8, alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {cardSlots.map((c, i) => (
            <div key={c.id} style={{ position: 'relative' }}>
              <SpiritCardB card={c} size="xs"/>
              <div style={{ position: 'absolute', bottom: 2, right: 2,
                fontSize: 8, color: t.primary, fontFamily: t.fontDisplay,
                background: 'rgba(11,21,48,0.8)', padding: '0 3px',
              }}>{i+1}</div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}/>
        <InkBtn theme={t} size="md" icon="feather">EXTRACT</InkBtn>
      </div>
    </div>
  );
}

Object.assign(window, { GameplayA, GameplayB });
