export default class {
  constructor() {
    document.title = "404 Not Found";
  }
  async getHtml() {
    return `<p>Error: 404 Not Found</p>`;
  }
}
