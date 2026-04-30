# 灵卡封印师 (FengYinShi)

魔法少女 + 封印灵卡 · Roguelike 探险手游

## 技术栈

- **引擎**：Cocos Creator 3.8.8
- **语言**：TypeScript
- **目标平台**：微信小游戏 / iOS / Android

## 快速开始

### 环境要求

- [Cocos Creator 3.8.8](https://www.cocos.com/creator) 
- Node.js 18+
- Git + Git LFS（图片资源用 LFS 存储）

### 拉取项目

```bash
git clone https://github.com/zq940222/FengYinShi.git
cd FengYinShi
git lfs pull   # 拉取图片资源（约 220MB）
```

### 打开项目

用 Cocos Creator 打开 `FengYinShi/` 目录即可，无需额外安装依赖。

> **换电脑完整流程**
> ```bash
> git clone https://github.com/zq940222/FengYinShi.git
> cd FengYinShi
> git lfs pull        # 拉取 220MB 图片资源
> ```
> 然后用 Cocos Creator 3.8.8 打开该目录，资源 UUID 已随 `.meta` 文件一起提交，引用不会丢失。

## 项目结构

```
assets/
  textures/
    heroines/     # 主角立绘（5 张，即梦 AI 生成）
    cards/        # 灵卡卡面（8 张，即梦 AI 生成）
    backgrounds/  # 场景背景（2 张，即梦 AI 生成）
  scenes/         # Cocos 场景文件（待开发）
  scripts/        # TypeScript 游戏脚本（待开发）
design/           # UI 设计稿参考（React 原型，勿修改）
```

## 游戏设定

### 核心玩法
搜打撤 Roguelike：进入地牢 → 收集散落的封印灵卡 → 计时撤退

### 主角
| ID | 名称 | 称号 | 主题色 |
|----|------|------|--------|
| lumi | 璐米 | 初契约者 | 草莓粉 |
| sora | 苍羽 | 夜空守望 | 薰衣草紫 |
| mika | 雅卡 | 潮汐学徒 | 海洋青 |

### 灵卡
| 卡名 | 稀有度 | 属性 | 效果 |
|------|--------|------|------|
| 极光 | SSR | 光 | 冷却 -2s |
| 潮汐 | SR | 水 | 退潮时收获更多碎片 |
| 余烬 | SR | 火 | 受击反弹 12% 伤害 |
| 苔语 | R | 土 | 每 5s 治疗 1 点 |
| 回响 | SR | 音 | 探测附近 3 格灵卡 |
| 霜针 | R | 冰 | 冰封地面 1.5s |
| 花粉 | R | 风 | 减速周围目标 |
| 镜界 | SSR | 奥术 | 复制最近一张灵卡 |

### 视觉方向
- **方向 A**：粉紫扁平卡通（参考 `design/` 中 Theme A）
- **方向 B**：深青金水彩（参考 `design/` 中 Theme B）

## 设计稿预览

在 `design/` 目录下运行本地服务器可预览完整 UI 原型：

```bash
npx serve design
# 浏览器打开 http://localhost:3000/灵卡封印师.html
```
