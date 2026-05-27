# Movie DB

![thumbnail](public/thumbnail.png)

Aplicação React para explorar filmes, ver detalhes e gerenciar uma lista de favoritos, consumindo a API do [The Movie Database (TMDB)](https://www.themoviedb.org/).

## Deploy

Hospedado na [Vercel](https://vercel.com) — acesse em: **https://movie-db-inky-five.vercel.app/**

## Funcionalidades

- **Filmes populares** — grid responsivo com infinite scroll
- **Detalhes do filme** — backdrop, gêneros, data de lançamento, nota e sinopse
- **Favoritos** — lista persistida no localStorage com ordenação por título e nota
- **Busca** — resultados em tempo real com destaque do termo buscado nos títulos
- **Favoritar em qualquer página** — ícone de coração nos cards e botão na página de detalhes

## Tecnologias

- React 19 + TypeScript
- React Router v7
- Context API (gerenciamento de favoritos)
- Axios
- TanStack Query v5 (cache e infinite scroll)
- Tailwind CSS v4
- Jest + React Testing Library

## Pré-requisitos

- Node.js 18+
- Conta gratuita no [TMDB](https://www.themoviedb.org/) para obter uma API Key

## Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/fernandes-vinicius/movie-db.git
cd movie-db

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
```

Abra `.env.local` e preencha sua API Key do TMDB:

```env
VITE_TMDB_API_KEY=sua_api_key_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

> Gere sua API Key gratuitamente em: https://www.themoviedb.org/settings/api

## Execução

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Testes

```bash
# Executar todos os testes
npm test

# Modo watch
npm run test:watch

# Relatório de cobertura
npm run test:coverage
```

## Estrutura do Projeto

```
src/
├── api/                  # Endpoints e cliente HTTP (Axios)
├── app/
│   ├── routes/           # Páginas (Home, Search, MovieDetails, Favorites)
│   ├── router.tsx
│   └── app.tsx
├── features/
│   ├── favorites/        # Componentes, hooks e utils de favoritos
│   ├── movie-details/    # Componentes e hooks da página de detalhes
│   ├── movies/           # MovieCard, MovieGrid, MovieRatingBadge
│   └── search/           # Componentes e hooks de busca
└── shared/
    ├── components/       # Header, ErrorBoundary, componentes de UI
    ├── contexts/         # FavoritesContext
    ├── hooks/            # useLocalStorage
    ├── types/            # Tipos do TMDB
    └── utils/            # formatDate, getImageUrl, sortFavorites
```

## Rotas

| Rota | Descrição |
|---|---|
| `/` | Filmes populares com infinite scroll |
| `/movie/:id` | Detalhes do filme |
| `/favorites` | Lista de favoritos com filtros de ordenação |
| `/search?q=termo` | Resultados de busca com destaque do termo |

## Variáveis de Ambiente

| Variável | Descrição |
|---|---|
| `VITE_TMDB_API_KEY` | Chave de API do TMDB (obrigatória) |
| `VITE_TMDB_BASE_URL` | URL base da API do TMDB |
| `VITE_TMDB_IMAGE_BASE_URL` | URL base para imagens do TMDB |

## Decisões de Arquitetura

### Feature-Based Architecture (Vertical Slices)

O projeto adota organização **vertical por domínio de negócio** em vez de horizontal por camada técnica. Cada feature encapsula seus próprios componentes, hooks e utilitários:

```
features/
├── favorites/     → componentes, hooks e utils de favoritos
├── movies/        → componentes e hooks de filmes populares
├── movie-details/ → componentes e hooks da página de detalhes
└── search/        → componentes e hooks de busca
```

Código compartilhado entre features fica em `shared/` (tipos, componentes de UI, contextos, utilitários), e o acesso à API é isolado em `api/`.

### Por que não Clean Architecture

Clean Architecture (Robert C. Martin) é uma abordagem horizontal com camadas explícitas — Entities, Use Cases, Interface Adapters e Frameworks — onde cada camada interna não conhece a externa. É especialmente adequada para:

- Backends com lógica de negócio complexa e regras de domínio ricas
- Sistemas que precisam trocar banco de dados, framework ou canal de entrega sem reescrever regras de negócio
- Times grandes onde o isolamento rígido entre camadas evita acoplamento acidental

Para um SPA React que consome uma API externa, esse custo não se justifica: manter interfaces de repositório (`IMovieRepository`), Use Cases em classes isoladas e uma camada de domínio sem React adicionaria boilerplate significativo sem ganho proporcional — o domínio de negócio da aplicação se resume a favoritar filmes com persistência local.

### Princípios preservados

Mesmo sem seguir Clean Architecture formalmente, alguns de seus princípios foram mantidos intencionalmente:

- **Isolamento de infraestrutura** — `api/endpoints/` não importa nada do React; são funções puras que retornam dados
- **Entidades estáveis** — `shared/types/` não depende de nenhuma camada externa
- **Regra da dependência** — o fluxo `api → hooks → components` é unidirecional, sem inversões
- **Sem dependências circulares** — features não se importam entre si; dependem apenas de `shared/`
