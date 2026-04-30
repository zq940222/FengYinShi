# 灵卡封印师 — Claude 工作指南

## 项目概述

**引擎**：Cocos Creator 3.8.8  
**语言**：TypeScript（strict: false）  
**目标平台**：微信小游戏 / iOS / Android  
**核心玩法**：搜打撤 Roguelike — 进入地牢 → 收集封印灵卡 → 计时撤退

## 目录结构

```
assets/
  textures/
    heroines/     # 主角立绘 PNG（lumi-a/b, sora-a, mika-a/b）
    cards/        # 灵卡卡面 PNG（aurora, tide, ember, moss, echo, frost, pollen, mirror）
    backgrounds/  # 场景背景 PNG（bg-a 粉紫, bg-b 深青）
  scenes/         # Cocos 场景（.scene 文件）
  scripts/        # TypeScript 游戏脚本
design/           # React UI 原型（只读参考，不参与 Cocos 构建）
```

## 图片资源规范

- 所有 PNG 通过 **Git LFS** 管理，拉取需运行 `git lfs pull`
- `.meta` 文件必须随代码一起提交，保证资源 UUID 跨机器一致
- 立绘尺寸：3328×4992（2:3 竖向）；卡面：4096×4096（1:1）；背景：5404×3040（16:9）

## 游戏数据

### 主角（Heroines）
| id | 名称 | 称号 | 主色 |
|----|------|------|------|
| lumi | 璐米 | 初契约者 | #FF7AB6 草莓粉 |
| sora | 苍羽 | 夜空守望 | #8C70CF 薰衣草紫 |
| mika | 雅卡 | 潮汐学徒 | #5BC0BE 海洋青 |

### 灵卡（Cards）
| id | 名称 | 稀有度 | 属性 | 效果 |
|----|------|--------|------|------|
| aurora | 极光 | SSR | 光 | 冷却 -2s |
| tide | 潮汐 | SR | 水 | 退潮收获更多碎片 |
| ember | 余烬 | SR | 火 | 受击反弹 12% 伤害 |
| moss | 苔语 | R | 土 | 每 5s 治疗 1 点 |
| echo | 回响 | SR | 音 | 探测附近 3 格灵卡 |
| frost | 霜针 | R | 冰 | 冰封地面 1.5s |
| pollen | 花粉 | R | 风 | 减速周围目标 |
| mirror | 镜界 | SSR | 奥术 | 复制最近一张灵卡 |

### 视觉方向
- **Theme A（粉紫扁平卡通）**：`#FFF5F8` 背景，`#FF7AB6` 主色，`#3A2240` 描边，字体 Fredoka
- **Theme B（深青金水彩）**：`#0F1A2E` 背景，`#E8B14C` 金色主色，`#5BC0BE` 青色辅色，字体 Caveat Brush

## 开发规范

- 脚本放在 `assets/scripts/`，按功能分子目录（`gameplay/`、`ui/`、`data/`）
- 场景文件放在 `assets/scenes/`
- 新增图片资源后必须在 Cocos Editor 中导入，确保生成 `.meta` 文件后再提交
- 提交信息用中文，格式：`模块: 简述`，例如 `战斗: 实现灵卡拾取逻辑`

## 设计稿参考

`design/` 目录内是完整的 React UI 原型，包含所有屏幕的两套视觉方向。  
预览方式：`npx serve design`，浏览器打开 `http://localhost:3000/灵卡封印师.html`  
**不要修改 design/ 内的文件**，它只是视觉参考。
