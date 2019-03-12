'use strict'
import {ViewContainer, ViewParameters, ViewEventListenerBuilder} from 'hotballoon'
import { default as Main, INPUT_NUMBER_EVENT, INPUT_OPERATOR_EVENT, INPUT_RESULT_EVENT } from './views/ViewCalculator'

import '../../assets/css/style.css'
import {ActionNumberInput} from '../../actions/ActionNumberInput/ActionNumberInput'
import {ActionOperatorInput} from '../../actions/ActionOperatorInput/ActionOperatorInput'
import {StoreContainer} from '../StoreContainer'

const CALCULATOR_VIEW = Symbol('CALCULATOR_VIEW')

export class ContainerCalculator extends ViewContainer {
  /**
   *
   * @param {ViewContainerParameters} viewContainerParameters
   * @param {StoreContainer} storeContainer
   * @param {ActionContainer} actionContainer
   */
  constructor(viewContainerParameters, storeContainer, actionContainer) {
    super(viewContainerParameters)
    this.__stores = storeContainer
    this.__actions = actionContainer
    this.__registerViews()
  }

  /**
   *
   * @private
   */
  __registerViews() {
    this.addView(
      new Main(
        new ViewParameters(CALCULATOR_VIEW, this),
        new StoreContainer(this.__stores.resultStore)
      )
    )
    this.__handleEvents()
  }

  __handleEvents() {
    this.view(CALCULATOR_VIEW).on(
      ViewEventListenerBuilder
        .listen(INPUT_NUMBER_EVENT)
        .callback((payload) => {
          this.__actions.actionNumberInput.dispatch(
            new ActionNumberInput(payload.number)
          )
        }).build()
    )

    this.view(CALCULATOR_VIEW).on(
      ViewEventListenerBuilder
        .listen(INPUT_OPERATOR_EVENT)
        .callback((payload) => {
          this.__actions.actionOperatorInput.dispatch(
            new ActionOperatorInput(payload.operator)
          )
        }).build()
    )

    this.view(CALCULATOR_VIEW).on(
      ViewEventListenerBuilder
        .listen(INPUT_RESULT_EVENT)
        .callback((payload) => {
          this.__actions.actionOperatorInput.dispatch(
            new ActionOperatorInput(payload.operator)
          )
        }).build()
    )
  }
}
