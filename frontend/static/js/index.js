import Home from "./views/Home.js";
import Posts from "./views/Posts.js";
import Upload from "./views/Upload.js";
import NotFound from "./views/NotFound.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/upload", view: Upload },
    { path: "/post/:id", view: Posts },
  ];

  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
    const page = new NotFound();
    document.querySelector("#app").innerHTML = await page.getHtml();
  } else {
    const page = new match.route.view();
    document.querySelector("#app").innerHTML = await page.getHtml();
  }
};

window.addEventListener("popstate", router);

const navigationTo = (url) => {
  history.pushState(null, "", url);
  router(); //rendering
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // a tag 이동 막아줌
      navigationTo(e.target.href);
    }
  });
  router();
});
