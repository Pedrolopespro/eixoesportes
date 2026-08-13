const whatsappNumber = '556184524410';
const message = 'Olá! Vim pelo catálogo da Eixo Esportes e gostaria de fazer um pedido.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

document.querySelectorAll('.whatsapp-link').forEach((link) => {
  link.href = whatsappUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const pages = document.querySelector('#catalog-pages');

for (let page = 1; page <= 11; page += 1) {
  const card = document.createElement('article');
  card.className = 'catalog-page';

  const image = document.createElement('img');
  image.src = `/catalogo/pagina-${String(page).padStart(2, '0')}.webp`;
  image.alt = `Página ${page} do catálogo Eixo Esportes`;
  image.loading = page <= 2 ? 'eager' : 'lazy';
  image.decoding = 'async';
  image.width = 1684;
  image.height = 1191;

  const action = document.createElement('a');
  action.className = 'page-action';
  action.href = whatsappUrl;
  action.target = '_blank';
  action.rel = 'noopener noreferrer';
  action.textContent = page === 1 ? 'Ver opções no WhatsApp' : 'Quero este produto';

  card.append(image, action);
  pages.append(card);
}
