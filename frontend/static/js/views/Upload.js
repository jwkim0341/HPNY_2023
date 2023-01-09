import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle = "upload";
  }
  async getHtml() {
    return `<p>게시글 작성</p>`;
  }
}
