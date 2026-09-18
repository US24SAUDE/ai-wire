const articles = [
  { slug: 'gpt5-vs-claude-vs-gemini', title: 'GPT-5 vs. Claude vs. Gemini: o grande comparativo de código', category: 'Modelos', catSlug: 'modelos', author: 'Equipe AI Wire', date: '12 set 2026', readTime: '8 min', excerpt: 'Testamos os três modelos no mesmo conjunto de tarefas reais de engenharia.', icon: '🧠' },
  { slug: 'mcp-guia-definitivo', title: 'MCP (Model Context Protocol): o USB-C da IA — guia definitivo', category: 'Agentes', catSlug: 'agentes', author: 'Equipe AI Wire', date: '11 set 2026', readTime: '12 min', excerpt: 'O protocolo que conecta agentes a ferramentas. Tudo que você precisa saber para adotar.', icon: '🔌' },
  { slug: 'rag-do-zero', title: 'RAG do zero: embeddings, chunking e busca semântica em 1 artigo', category: 'Guia do Dev', catSlug: 'guia-do-dev', author: 'Equipe AI Wire', date: '10 set 2026', readTime: '15 min', excerpt: 'Do zero ao deploy: monte um RAG funcional com código comentado.', icon: '📚' },
  { slug: 'ollama-deepseek-local', title: 'DeepSeek local com Ollama: guia completo de instalação e uso', category: 'Open Source', catSlug: 'open-source', author: 'Equipe AI Wire', date: '9 set 2026', readTime: '10 min', excerpt: 'Rode um modelo de raciocínio na sua máquina, sem pagar API.', icon: '🖥️' },
  { slug: 'langchain-vs-crewai', title: 'LangGraph vs. CrewAI: qual orquestrar seus agentes em 2026?', category: 'Frameworks', catSlug: 'frameworks', author: 'Equipe AI Wire', date: '8 set 2026', readTime: '9 min', excerpt: 'Comparativo de maturidade, comunidade e quando cada um vence.', icon: '⚙️' },
  { slug: 'economia-tokens', title: 'A economia dos tokens: por que arquitetura vale mais que modelo', category: 'Análises', catSlug: 'analises', author: 'Equipe AI Wire', date: '7 set 2026', readTime: '7 min', excerpt: 'Caching, roteamento e structured outputs reduzem a conta mais que trocar de modelo.', icon: '💰' },
  { slug: 'bench-custo-12-provedores', title: 'Bench de custo: mesmo prompt, 12 provedores, planilha aberta', category: 'Benchmarks', catSlug: 'benchmarks', author: 'Equipe AI Wire', date: '6 set 2026', readTime: '6 min', excerpt: 'Dados replicáveis: quanto custa de verdade rodar o mesmo prompt em cada provedor.', icon: '📊' },
  { slug: 'vibe-coding-guia', title: 'Vibe coding: codificando por descrição — guia e limites', category: 'Guia do Dev', catSlug: 'guia-do-dev', author: 'Equipe AI Wire', date: '5 set 2026', readTime: '8 min', excerpt: 'Quando funciona, quando quebra, e como manter o controle do que a IA gera.', icon: '✨' },
  { slug: 'quantizacao-leigos', title: 'Quantização para leigos: GGUF, Q4, Q8 e como escolher', category: 'Modelos', catSlug: 'modelos', author: 'Equipe AI Wire', date: '4 set 2026', readTime: '5 min', excerpt: 'O que muda na qualidade e no tamanho ao quantizar um modelo aberto.', icon: '🔢' }
];

const trending = [
  'MCP e o fim do function calling',
  'DeepSeek-R1 local em GPU de consumo',
  'Custo real de agentes autônomos',
  'Janela de 1M tokens: mito ou realidade?',
  'Ollama como camada de inferência'
];

const mostRead = [
  'GPT-5 vs. Claude vs. Gemini: o grande comparativo de código',
  'MCP (Model Context Protocol): o USB-C da IA — guia definitivo',
  'RAG do zero: embeddings, chunking e busca semântica',
  'DeepSeek local com Ollama: guia completo',
  'LangGraph vs. CrewAI: qual orquestrar seus agentes em 2026?',
  'A economia dos tokens: por que arquitetura vale mais que modelo'
];

function cardHTML(a) {
  return `<article class="card">
    <div class="card-thumb">${a.icon}</div>
    <div class="card-body">
      <span class="card-cat">${a.category}</span>
      <h3><a href="/artigos/${a.slug}.html">${a.title}</a></h3>
      <div class="card-meta"><span>${a.author}</span><span>·</span><span>${a.date}</span><span>·</span><span>${a.readTime}</span></div>
    </div>
  </article>`;
}

const grid = document.getElementById('cardGrid');
if (grid) grid.innerHTML = articles.map(cardHTML).join('');

const tl = document.getElementById('trendingList');
if (tl) tl.innerHTML = trending.map((t, i) => `<li><a href="#">${i + 1}. ${t}</a></li>`).join('');

const mr = document.getElementById('mostReadList');
if (mr) mr.innerHTML = mostRead.map(t => `<li><a href="#">${t}</a></li>`).join('');

// Theme toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  const saved = localStorage.getItem('aiwire-theme');
  if (saved) document.body.dataset.theme = saved;
  toggle.textContent = document.body.dataset.theme === 'light' ? '☀️' : '🌙';
  toggle.addEventListener('click', () => {
    const next = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = next;
    localStorage.setItem('aiwire-theme', next);
    toggle.textContent = next === 'light' ? '☀️' : '🌙';
  });
}
