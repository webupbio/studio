# 🚀 Guia Rápido de Deploy - GitHub Pages

## Passo a Passo (Método Mais Simples)

### 1. Criar Conta no GitHub
- Acesse [github.com](https://github.com)
- Clique em "Sign up" e crie sua conta gratuita

### 2. Criar Novo Repositório
- Clique no botão **"+"** no canto superior direito
- Selecione **"New repository"**
- Nome do repositório: `upbio-website` (ou qualquer nome)
- Marque: **Public** ✅
- Clique em **"Create repository"**

### 3. Upload dos Arquivos
Na página do repositório criado:

1. Clique em **"uploading an existing file"**
2. Arraste todos os arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - A pasta `assets/` com a logo

3. Ou clique em **"choose your files"** e selecione todos
4. Escreva uma mensagem: "Initial commit"
5. Clique em **"Commit changes"**

### 4. Ativar GitHub Pages

1. No repositório, clique em **"Settings"** (engrenagem)
2. No menu lateral esquerdo, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **"Save"**

### 5. Seu Site Está no Ar! 🎉

Aguarde 1-2 minutos e seu site estará disponível em:

```
https://seu-usuario.github.io/upbio-website
```

Exemplo: Se seu usuário GitHub é `joaosilva`, o link será:
```
https://joaosilva.github.io/upbio-website
```

---

## 📱 Domínio Personalizado (Opcional)

Se você tem um domínio próprio (ex: `www.upbio.com`):

1. Na seção **GitHub Pages** em Settings
2. Campo **"Custom domain"**, digite: `www.upbio.com`
3. Clique em **"Save"**
4. No seu provedor de domínio (GoDaddy, Registro.br, etc.):
   - Crie um registro CNAME apontando para: `seu-usuario.github.io`

---

## 🔧 Atualizando o Site

Para atualizar o conteúdo:

1. No repositório GitHub, clique no arquivo que deseja editar
2. Clique no ícone de lápis (✏️) "Edit"
3. Faça suas alterações
4. Clique em **"Commit changes"**
5. O site será atualizado automaticamente em 1-2 minutos

---

## 📋 Checklist Final

Antes de publicar, verifique:

- [ ] Todos os links do Instagram (@upbio.pro) estão corretos
- [ ] A logo está carregando corretamente
- [ ] Todos os textos estão em inglês
- [ ] Os preços dos planos estão corretos ($57, $77, $97)
- [ ] As imagens do portfolio estão carregando
- [ ] O badge "RECOMMENDED" aparece no plano Pro

---

## 💡 Dicas

- **Teste localmente**: Abra o `index.html` no navegador antes de fazer upload
- **Otimize imagens**: Use imagens comprimidas para carregamento rápido
- **Use HTTPS**: GitHub Pages oferece HTTPS gratuito automaticamente
- **SEO**: Edite as meta tags no `<head>` do `index.html` para melhor SEO

---

## 🆘 Problemas Comuns

### Site não aparece (404)
- Aguarde 2-3 minutos após ativar o GitHub Pages
- Verifique se o arquivo se chama exatamente `index.html`
- Verifique se o repositório é **Public**

### Logo não aparece
- Certifique-se que a pasta `assets` foi enviada
- Verifique se o caminho no HTML está correto: `assets/upbio-logo.png`

### Design quebrado
- Verifique se `style.css` e `script.js` foram enviados
- Verifique se os nomes dos arquivos estão corretos

---

## 📞 Suporte

Instagram: [@upbio.pro](https://instagram.com/upbio.pro)

**Boa sorte com seu site! 🚀**
