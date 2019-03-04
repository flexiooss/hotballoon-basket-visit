import {View, HtmlParams} from 'hotballoon'

export default class ViewMain extends View {
  /**
   *
   * @return {Element}
   */
  template() {
    return this.html('main#main',
      HtmlParams.withChildNodes([
        this.html('h2#subtitle.subtitle',
          HtmlParams.withText('Description')
        ),
        this.html('div#demo.demo',
          HtmlParams.withAttributes()
        )
      ])
    )
  }

  /**
   *
   * @return {Node}
   */
  getDemoDiv() {
    return this.nodeRef('demo')
  }

  resetDemoDiv() {
    if (this.nodeRef('demo').hasChildNodes()) {
      this.nodeRef('demo').removeChild(this.nodeRef('demo').firstChild)
    }
  }
}