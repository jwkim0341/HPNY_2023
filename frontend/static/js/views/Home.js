import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle = "20HPNY23";
  }
  async getHtml() {
    return `<p>게시글 목록 입니다.</p>`;
  }
}
