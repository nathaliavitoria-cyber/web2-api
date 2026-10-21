# Atividade 03 — Tarefas e Projetos no PostgreSQL (TypeORM)

Backend NestJS com persistência em PostgreSQL via TypeORM (módulos **Tarefas** e **Projetos**).

## Como rodar
```bash
docker compose up -d db        # sobe o PostgreSQL (container)
cd backend
npm install
npm run migration:run          # cria as tabelas (tarefas e projetos)
npm run seed                   # dados iniciais
npm run start:dev              # API em http://localhost:3000/api
```

Rotas: `/api/tarefas` e `/api/projetos` (GET, GET/:id, POST, PUT/:id, DELETE/:id).

## O que mudou em relação às aulas anteriores
- `src/data-source.ts`: conexão com o Postgres (usada pela app e pela CLI das migrations).
- Entidades `Tarefa` e `Projeto` agora são tabelas (`@Entity`, `@Column`...).
- `TarefasService` e `ProjetosService` usam o `Repository` do TypeORM (assíncrono) no lugar do array em memória.
- Migrations: `CreateTarefas` e `CreateProjetos` (em `src/migrations/`).
- `src/seed.ts` popula as duas tabelas.
- Nos controllers, o `remove` agora faz `return` da Promise do service (sem isso o 404 do
  DELETE não chegava ao cliente e o servidor caía).
