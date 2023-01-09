import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle = "posts";
  }
  async getHtml() {
    return `<p>게시글 보기</p>`;
  }
}
