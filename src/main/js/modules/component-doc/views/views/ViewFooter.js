import {View, e} from '@flexio-oss/hotballoon'
import * as demoComponentPackage from '../../../../../../../package.json'
import '../../assets/css/normalize.css'
export default class ViewFooter extends View {
  /**
   *
   * @returns {Element}
   */
  template() {
    return this.html(
      e('footer#footer')
        .childNodes(

          this.html(
            e('div#version')
              .text('HotBalloon-machine-operating-manual [version : ' + demoComponentPackage.version + ']')),

          this.html(
            e('div#github')
              .text('github : ' + demoComponentPackage.repository))
        )
    )
  }
}
