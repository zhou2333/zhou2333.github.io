import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.0e8ae64e.js";const p="/other/new_repository.png",m=JSON.parse('{"title":"VitePress搭建及部署个人博客","description":"","frontmatter":{},"headers":[],"relativePath":"blog/other/VitePress搭建个人博客.md","filePath":"blog/other/VitePress搭建个人博客.md","lastUpdated":null}'),e={name:"blog/other/VitePress搭建个人博客.md"},o=l(`<h1 id="vitepress搭建及部署个人博客" tabindex="-1">VitePress搭建及部署个人博客 <a class="header-anchor" href="#vitepress搭建及部署个人博客" aria-label="Permalink to &quot;VitePress搭建及部署个人博客&quot;">​</a></h1><p><strong><a href="https://vitepress.dev/guide/getting-started" target="_blank" rel="noreferrer">官方文档</a></strong></p><p><strong>VitePress 是一个现代化的静态网站生成框架，它是基于 Vite 构建工具的一个插件，旨在简化文档和博客的创建。本篇文章带大家快速搭建一个基于VitePress的静态博客网站并且部署到GitHub Pages上。<br><br></strong></p><blockquote><p><em><strong>前提条件：Node.js 版本大于等于 18</strong></em></p></blockquote><h2 id="本地vitepress搭建" tabindex="-1">本地VitePress搭建 <a class="header-anchor" href="#本地vitepress搭建" aria-label="Permalink to &quot;本地VitePress搭建&quot;">​</a></h2><h3 id="_1-安装vitepress" tabindex="-1">1. 安装VitePress <a class="header-anchor" href="#_1-安装vitepress" aria-label="Permalink to &quot;1. 安装VitePress&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-构建基本项目" tabindex="-1">2. 构建基本项目 <a class="header-anchor" href="#_2-构建基本项目" aria-label="Permalink to &quot;2. 构建基本项目&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blog</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blog</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blog</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blog</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>执行上面👆命令会弹出来一个交互式窗口，按照下图输入即可</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">┌</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Welcome</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress!</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">│</span></span>
<span class="line"><span style="color:#B392F0;">◇</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Where</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">should</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">initialize</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config?</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">./docs</span></span>
<span class="line"><span style="color:#B392F0;">│</span></span>
<span class="line"><span style="color:#B392F0;">◇</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Site</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">title:</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">test</span></span>
<span class="line"><span style="color:#B392F0;">│</span></span>
<span class="line"><span style="color:#B392F0;">◇</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Site</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">description:</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">A</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Site</span></span>
<span class="line"><span style="color:#B392F0;">│</span></span>
<span class="line"><span style="color:#B392F0;">◇</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Theme:</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Default</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Theme</span></span>
<span class="line"><span style="color:#B392F0;">│</span></span>
<span class="line"><span style="color:#B392F0;">◇</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">TypeScript</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">files?</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Yes</span></span>
<span class="line"><span style="color:#B392F0;">│</span></span>
<span class="line"><span style="color:#B392F0;">◇</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">VitePress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scripts</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json?</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Yes</span></span>
<span class="line"><span style="color:#B392F0;">│</span></span>
<span class="line"><span style="color:#B392F0;">└</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Done!</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Now</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">writing.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">┌</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Welcome</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress!</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">│</span></span>
<span class="line"><span style="color:#6F42C1;">◇</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Where</span><span style="color:#24292E;"> </span><span style="color:#032F62;">should</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">initialize</span><span style="color:#24292E;"> </span><span style="color:#032F62;">the</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config?</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">./docs</span></span>
<span class="line"><span style="color:#6F42C1;">│</span></span>
<span class="line"><span style="color:#6F42C1;">◇</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Site</span><span style="color:#24292E;"> </span><span style="color:#032F62;">title:</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">test</span></span>
<span class="line"><span style="color:#6F42C1;">│</span></span>
<span class="line"><span style="color:#6F42C1;">◇</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Site</span><span style="color:#24292E;"> </span><span style="color:#032F62;">description:</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">A</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Site</span></span>
<span class="line"><span style="color:#6F42C1;">│</span></span>
<span class="line"><span style="color:#6F42C1;">◇</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Theme:</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Default</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Theme</span></span>
<span class="line"><span style="color:#6F42C1;">│</span></span>
<span class="line"><span style="color:#6F42C1;">◇</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">TypeScript</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">files?</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Yes</span></span>
<span class="line"><span style="color:#6F42C1;">│</span></span>
<span class="line"><span style="color:#6F42C1;">◇</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">VitePress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scripts</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json?</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Yes</span></span>
<span class="line"><span style="color:#6F42C1;">│</span></span>
<span class="line"><span style="color:#6F42C1;">└</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Done!</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Now</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">writing.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>完成之后，此时的目录与以下结构类似：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.vitepress</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config.mts</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">api-examples.md</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">markdown-examples.md</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.md</span></span>
<span class="line"><span style="color:#B392F0;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.vitepress</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config.mts</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">api-examples.md</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">markdown-examples.md</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.md</span></span>
<span class="line"><span style="color:#6F42C1;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>说明:</strong> 该 <code>docs</code> 目录被视为VitePress站点的<strong>项目根目录</strong>。该 <code>.vitepress</code> 目录是VitePress配置文件、开发服务器缓存、构建输出和可选主题自定义代码的保留位置。VitePress将其开发服务器缓存存储在 <code>.vitepress/cache</code> 中，并将生产构建输出结果存储在 <code>.vitepress/dist</code> 中。</p><h3 id="_3-本地启动vitepress服务" tabindex="-1">3. 本地启动VitePress服务 <a class="header-anchor" href="#_3-本地启动vitepress服务" aria-label="Permalink to &quot;3. 本地启动VitePress服务&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时服务已经启动，查看控制台输出结果，找到下图Local后面的地址并在浏览器中访问，就可以查看到默认的博客页面。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&gt; docs:dev</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; vitepress dev docs</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  vitepress v1.0.0-rc.24</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  ➜  Local:   http://localhost:5173/</span></span>
<span class="line"><span style="color:#e1e4e8;">  ➜  Network: use --host to expose</span></span>
<span class="line"><span style="color:#e1e4e8;">  ➜  press h to show help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&gt; docs:dev</span></span>
<span class="line"><span style="color:#24292e;">&gt; vitepress dev docs</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  vitepress v1.0.0-rc.24</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  ➜  Local:   http://localhost:5173/</span></span>
<span class="line"><span style="color:#24292e;">  ➜  Network: use --host to expose</span></span>
<span class="line"><span style="color:#24292e;">  ➜  press h to show help</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="部署至github-pages" tabindex="-1">部署至GitHub Pages <a class="header-anchor" href="#部署至github-pages" aria-label="Permalink to &quot;部署至GitHub Pages&quot;">​</a></h2><p>经过上面三个简单的步骤，我们已经可以在本地启动并浏览默认的博客页面了。现在来看如何将我们的博客部署到GitHub上，让任何人都可以通过域名访问你的博客。</p><h3 id="_1-github新建远程仓库" tabindex="-1">1. GitHub新建远程仓库 <a class="header-anchor" href="#_1-github新建远程仓库" aria-label="Permalink to &quot;1. GitHub新建远程仓库&quot;">​</a></h3><p><img src="`+p+`" alt="image-20231101005149668"></p><p>在GitHub上创建新的仓库，并且仓库名一定是 <strong>{username}.github.io</strong>。</p><h3 id="_2-编写构建及推送脚本" tabindex="-1">2. 编写构建及推送脚本 <a class="header-anchor" href="#_2-编写构建及推送脚本" aria-label="Permalink to &quot;2. 编写构建及推送脚本&quot;">​</a></h3><p><strong>在blog目录下编写脚本</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 编写deploy脚本，脚本代码在下面👇</span></span>
<span class="line"><span style="color:#B392F0;">vim</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy.sh</span></span>
<span class="line"><span style="color:#6A737D;"># 运行脚本</span></span>
<span class="line"><span style="color:#B392F0;">sh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 编写deploy脚本，脚本代码在下面👇</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy.sh</span></span>
<span class="line"><span style="color:#6A737D;"># 运行脚本</span></span>
<span class="line"><span style="color:#6F42C1;">sh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>deploy.sh</strong></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 脚本在执行过程中一旦出现错误，就立即退出</span></span>
<span class="line"><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入构建结果输入目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化本地git，初始分支名和远程分支一样，并提交commit</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-A</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将本地master分支强制推送到远程master</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com:zhou2333/zhou2333.github.io.git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 返回上一个目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 脚本在执行过程中一旦出现错误，就立即退出</span></span>
<span class="line"><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入构建结果输入目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 初始化本地git，初始分支名和远程分支一样，并提交commit</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-A</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将本地master分支强制推送到远程master</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:zhou2333/zhou2333.github.io.git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 返回上一个目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>这样我们每次在修改完本地文件后，直接执行脚本就可以将新的构建结果推送到远程仓库。之后，我们就可以通过访问 <strong>https://{username}.github.io/</strong> 来查看自己的博客了。</p><h2 id="vitepress配置" tabindex="-1">VitePress配置 <a class="header-anchor" href="#vitepress配置" aria-label="Permalink to &quot;VitePress配置&quot;">​</a></h2><h3 id="_1-站点及主题配置" tabindex="-1">1. 站点及主题配置 <a class="header-anchor" href="#_1-站点及主题配置" aria-label="Permalink to &quot;1. 站点及主题配置&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 官方文档: https://vitepress.dev/reference/site-config</span></span>
<span class="line"><span style="color:#6A737D;">// 站点配置</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;ZhouQuan&#39;s Blog&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;周全的博客&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 浏览器中icon</span></span>
<span class="line"><span style="color:#E1E4E8;">  head: [[</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">, { rel: </span><span style="color:#9ECBFF;">&#39;icon&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;/favicon.png&#39;</span><span style="color:#E1E4E8;">}]],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 文档最后更新时间展示</span></span>
<span class="line"><span style="color:#E1E4E8;">  lastUpdated: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 去除浏览器链接中的.html后缀</span></span>
<span class="line"><span style="color:#E1E4E8;">  cleanUrls: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// markdown显示行数</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    lineNumbers: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// https://vitepress.dev/reference/default-theme-config</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 主题配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 主页左上角logo</span></span>
<span class="line"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;/favicon.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 文章更新时间的前缀文本</span></span>
<span class="line"><span style="color:#E1E4E8;">    lastUpdatedText: </span><span style="color:#9ECBFF;">&#39;最后更新时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 上方导航栏</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;首页&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Java&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;Java基础&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;spaceholder&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/java&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;spaceholder&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/java&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;SpringBoot&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;spaceholder&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/java&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;编程之外&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;博客&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;VitePress搭建个人博客&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/other/VitePress搭建个人博客&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;让博客被浏览器收录&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/other/test&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;Mac&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Mac必装软件&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/other/Mac必装软件&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 为每个目录下的文件配置一个侧边栏</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/blog/java/&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          text: </span><span style="color:#9ECBFF;">&#39;&lt;font style=&quot;font-size:16px&quot;&gt;Java&lt;/font&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Index&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;One&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/one&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Two&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/two&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/blog/other/&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          text: </span><span style="color:#9ECBFF;">&#39;&lt;font style=&quot;font-size:16px&quot;&gt;编程之外&lt;/font&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              text: </span><span style="color:#9ECBFF;">&#39;博客&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;VitePress搭建个人博客&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/other/VitePress搭建个人博客&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">                { text: </span><span style="color:#9ECBFF;">&#39;让博客被浏览器收录&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/other/test&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          text: </span><span style="color:#9ECBFF;">&#39;Mac&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Mac必装软件&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/blog/other/Mac必装软件&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 文章右侧目录展示级别和标题，level表示标题级别</span></span>
<span class="line"><span style="color:#E1E4E8;">    outline: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      level: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;本章目录&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 文章底部导航栏的自定义配置，默认是英语</span></span>
<span class="line"><span style="color:#E1E4E8;">    docFooter: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			prev: </span><span style="color:#9ECBFF;">&#39;上一篇&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			next: </span><span style="color:#9ECBFF;">&#39;下一篇&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 右上角Github链接</span></span>
<span class="line"><span style="color:#E1E4E8;">    socialLinks: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/zhou2333/zhou2333.github.io&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 开启本地搜索（左上角）</span></span>
<span class="line"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 页脚</span></span>
<span class="line"><span style="color:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			copyright: </span><span style="color:#9ECBFF;">&#39;Copyright © 2023-2099 ZhouQuan. All rights reserved.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 官方文档: https://vitepress.dev/reference/site-config</span></span>
<span class="line"><span style="color:#6A737D;">// 站点配置</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;ZhouQuan&#39;s Blog&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;周全的博客&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 浏览器中icon</span></span>
<span class="line"><span style="color:#24292E;">  head: [[</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&#39;icon&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;/favicon.png&#39;</span><span style="color:#24292E;">}]],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 文档最后更新时间展示</span></span>
<span class="line"><span style="color:#24292E;">  lastUpdated: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 去除浏览器链接中的.html后缀</span></span>
<span class="line"><span style="color:#24292E;">  cleanUrls: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// markdown显示行数</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    lineNumbers: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// https://vitepress.dev/reference/default-theme-config</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 主题配置</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 主页左上角logo</span></span>
<span class="line"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;/favicon.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 文章更新时间的前缀文本</span></span>
<span class="line"><span style="color:#24292E;">    lastUpdatedText: </span><span style="color:#032F62;">&#39;最后更新时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 上方导航栏</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;首页&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Java&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;Java基础&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;spaceholder&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/java&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;spaceholder&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/java&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;SpringBoot&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;spaceholder&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/java&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;编程之外&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;博客&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;VitePress搭建个人博客&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/other/VitePress搭建个人博客&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;让博客被浏览器收录&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/other/test&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;Mac&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Mac必装软件&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/other/Mac必装软件&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 为每个目录下的文件配置一个侧边栏</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/blog/java/&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          text: </span><span style="color:#032F62;">&#39;&lt;font style=&quot;font-size:16px&quot;&gt;Java&lt;/font&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          items: [</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Index&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;One&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/one&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Two&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/two&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/blog/other/&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          text: </span><span style="color:#032F62;">&#39;&lt;font style=&quot;font-size:16px&quot;&gt;编程之外&lt;/font&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          items: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              text: </span><span style="color:#032F62;">&#39;博客&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              items: [</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;VitePress搭建个人博客&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/other/VitePress搭建个人博客&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">                { text: </span><span style="color:#032F62;">&#39;让博客被浏览器收录&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/other/test&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              ]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          text: </span><span style="color:#032F62;">&#39;Mac&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          items: [</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Mac必装软件&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/blog/other/Mac必装软件&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 文章右侧目录展示级别和标题，level表示标题级别</span></span>
<span class="line"><span style="color:#24292E;">    outline: {</span></span>
<span class="line"><span style="color:#24292E;">      level: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;本章目录&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 文章底部导航栏的自定义配置，默认是英语</span></span>
<span class="line"><span style="color:#24292E;">    docFooter: {</span></span>
<span class="line"><span style="color:#24292E;">			prev: </span><span style="color:#032F62;">&#39;上一篇&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			next: </span><span style="color:#032F62;">&#39;下一篇&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 右上角Github链接</span></span>
<span class="line"><span style="color:#24292E;">    socialLinks: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/zhou2333/zhou2333.github.io&#39;</span><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 开启本地搜索（左上角）</span></span>
<span class="line"><span style="color:#24292E;">    search: {</span></span>
<span class="line"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 页脚</span></span>
<span class="line"><span style="color:#24292E;">    footer: {</span></span>
<span class="line"><span style="color:#24292E;">			copyright: </span><span style="color:#032F62;">&#39;Copyright © 2023-2099 ZhouQuan. All rights reserved.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br></div></div><h3 id="_2-首页配置" tabindex="-1">2. 首页配置 <a class="header-anchor" href="#_2-首页配置" aria-label="Permalink to &quot;2. 首页配置&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;"># https://vitepress.dev/reference/default-theme-home-page</span></span>
<span class="line"><span style="color:#e1e4e8;">layout: home</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">hero:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &quot;ZhouQuan&#39;s Blog&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  text: &quot;在代码中创造魔法&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  tagline: 编程的路上没有终点，只有更多的路可走。每行代码都是一个机会，每个错误都是一个教训，每次成功都是一个成就。坚持前行，你将书写属于自己的传奇。&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  image:</span></span>
<span class="line"><span style="color:#e1e4e8;">    src: /index.png</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">features:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - title: Feature A</span></span>
<span class="line"><span style="color:#e1e4e8;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#e1e4e8;">  - title: Feature B</span></span>
<span class="line"><span style="color:#e1e4e8;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#e1e4e8;">  - title: Feature C</span></span>
<span class="line"><span style="color:#e1e4e8;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#e1e4e8;">  - title: Feature D</span></span>
<span class="line"><span style="color:#e1e4e8;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;"># https://vitepress.dev/reference/default-theme-home-page</span></span>
<span class="line"><span style="color:#24292e;">layout: home</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">hero:</span></span>
<span class="line"><span style="color:#24292e;">  name: &quot;ZhouQuan&#39;s Blog&quot;</span></span>
<span class="line"><span style="color:#24292e;">  text: &quot;在代码中创造魔法&quot;</span></span>
<span class="line"><span style="color:#24292e;">  tagline: 编程的路上没有终点，只有更多的路可走。每行代码都是一个机会，每个错误都是一个教训，每次成功都是一个成就。坚持前行，你将书写属于自己的传奇。&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">  image:</span></span>
<span class="line"><span style="color:#24292e;">    src: /index.png</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">features:</span></span>
<span class="line"><span style="color:#24292e;">  - title: Feature A</span></span>
<span class="line"><span style="color:#24292e;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#24292e;">  - title: Feature B</span></span>
<span class="line"><span style="color:#24292e;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#24292e;">  - title: Feature C</span></span>
<span class="line"><span style="color:#24292e;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#24292e;">  - title: Feature D</span></span>
<span class="line"><span style="color:#24292e;">    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="color:#24292e;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>说明: 这里配置非常的多，我这里只进行了一些基础配置，可以直接在我的配置上面改，也可以参照官方文档自行添加配置。<strong><a href="https://vitepress.dev/reference/site-config" target="_blank" rel="noreferrer">站点配置</a></strong> <strong><a href="https://vitepress.dev/reference/default-theme-config" target="_blank" rel="noreferrer">主题配置</a></strong><br> 另外，项目中如果需要添加图片、文本之类的文件，可以放在 <strong>./docs/public</strong> 目录下面，例如将favicon图标放在 <strong>./docs/public/icon.png</strong>，使用时的路径就为 <strong>/icon.png</strong>。</p>`,35),c=[o];function r(t,i,E,y,b,F){return n(),a("div",null,c)}const d=s(e,[["render",r]]);export{m as __pageData,d as default};
