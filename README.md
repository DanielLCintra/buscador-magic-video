# Magic Search 🔍✨

Aplicação desenvolvida com Next.js, estilizada com Tailwind CSS, testada com Jest e Cypress, e com componentes documentados via Storybook.

------------------------------------------------------------
## 🚀 Scripts Disponíveis
```bash
npm run dev           # Inicia o servidor Next.js em modo de desenvolvimento
npm run build         # Gera a build de produção da aplicação
npm run start         # Inicia o servidor da aplicação após a build
npm run lint          # Executa o ESLint para verificar problemas de código
npm run test          # Roda os testes unitários com Jest
npm run storybook     # Abre o Storybook em http://localhost:6006
npm run cypress:open  # Abre a interface do Cypress (modo interativo)
npm run cypress:run   # Roda os testes e2e do Cypress em modo headless
```

### IMPORTANTE:
Para rodar os testes do Cypress (cypress:open ou cypress:run), 
a aplicação Next.js PRECISA estar rodando em paralelo, 
normalmente com o comando: npm run dev

------------------------------------------------------------
## 📁 Estrutura do Projeto

/components     -> Componentes reutilizáveis da aplicação
/pages          -> Rotas do Next.js (formato pages/)
/styles         -> Estilos globais (Tailwind e CSS)
/types          -> Tipagens TypeScript personalizadas
/cypress        -> Testes de ponta a ponta (E2E)
/terraform          -> Arquivos de infraestrutura com Terraform (deploy no AWS S3)

------------------------------------------------------------
## ✅ Tecnologias Utilizadas

- Next.js
- Tailwind CSS
- TypeScript
- Jest
- Cypress
- Storybook
- AWS S3 + Terraform

------------------------------------------------------------
## 🔗 Links Oficiais e Documentações

### Next.js
#### - Instalação e primeiros passos:
  https://nextjs.org/docs/app/getting-started/installation

#### - Testes com Jest (App Router):
  https://nextjs.org/docs/app/guides/testing/jest

### Testes com Cypress
#### - Cypress com Next.js (Pages Router):
  https://nextjs.org/docs/pages/guides/testing/cypress

### Storybook com Next.js
#### - Guia oficial:
  https://storybook.js.org/docs/get-started/frameworks/nextjs

------------------------------------------------------------
Feito com 💻 por Daniel Cintra