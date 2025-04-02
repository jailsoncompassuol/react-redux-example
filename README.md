- Rodar na aws

1. modifique no package json o script dev para: `vite --host`
   a. isso vai dizer para o vite que ele pode ser acessado de qualquer host
2. Execute com o pm: `pm2 start "npm run dev" --name vite-app`
   a. isso vai fazer com que a aplicação fique rodando mesmo que você saia do terminal
