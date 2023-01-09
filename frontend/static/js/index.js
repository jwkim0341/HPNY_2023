const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('해피뉴이어') },
    { path: '/upload', view: () => console.log('게시글 작성') },
    { path: '/post/:id', view: () => console.log('게시글 보기') },
  ];

  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
  console.log(match.route.view());
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault(); // a tag 이동 막아줌
      history.pushState(null, '', e.target.href);
      router();
    }
  });
  router();
});
