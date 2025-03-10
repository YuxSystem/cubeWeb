# Cube Software - Landing Page

Landing page futurista para empresa de tecnologia especializada em desenvolvimento de sites, CRMs, aplicativos e automação.

![Cube Software](https://via.placeholder.com/1200x630?text=Cube+Software+Landing+Page)

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Implantação Automática no Coolify](#implantação-automática-no-coolify)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Desenvolvimento Local](#desenvolvimento-local)
- [Solução de Problemas](#solução-de-problemas)

## 🌟 Visão Geral

Este projeto é uma landing page moderna e interativa desenvolvida com Next.js, Tailwind CSS e Framer Motion. Apresenta animações avançadas, efeitos de paralaxe, e design responsivo para destacar os serviços de uma empresa de tecnologia.

## 💻 Tecnologias

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Lucide React](https://lucide.dev/) - Ícones
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI

## 🚀 Implantação Automática no Coolify

Este projeto está configurado para implantação automática no Coolify. Siga estas etapas:

### 1. Preparação

Certifique-se de que você tem:
- Uma conta no Coolify com acesso a um servidor configurado
- Git instalado em sua máquina local

### 2. Implantação no Coolify

1. **Faça login no seu painel do Coolify**

2. **Adicione um novo serviço**
   - Clique em "Add New Resource"
   - Selecione "Application"

3. **Conecte ao repositório Git**
   - Selecione seu provedor Git (GitHub, GitLab, etc.)
   - Autorize o Coolify a acessar seus repositórios, se necessário
   - Selecione o repositório que contém este projeto

4. **Configuração automática**
   - O Coolify detectará automaticamente que é um projeto Next.js através do arquivo `.coolify/config.yaml`
   - Ele usará o `Dockerfile` incluído para construir a aplicação
   - Não é necessário configurar manualmente os comandos de build ou start

5. **Implante o serviço**
   - Clique em "Deploy"
   - O Coolify irá construir e iniciar a aplicação automaticamente

6. **Configure o domínio (opcional)**
   - No painel do serviço, vá para a aba "Settings"
   - Configure o domínio personalizado, se necessário
   - Configure SSL/TLS para seu domínio

### Atualizações Automáticas

Para configurar atualizações automáticas:

1. No painel do Coolify, vá até o serviço
2. Acesse a aba "Settings"
3. Configure um webhook para implantação automática quando houver novos commits

## 📁 Estrutura do Projeto

