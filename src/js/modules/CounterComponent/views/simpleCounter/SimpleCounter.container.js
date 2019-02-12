'use strict'
import {
  ViewStoresParameters,
  ViewContainer,
  ViewParameters,
  ViewEventListenerFactory
} from 'hotballoon'
import { default as Main, MainSimpleStores, INCREMENT_EVENT, DECREMENT_EVENT, ADD_NUMBER_EVENT } from './CounterSimple.view'

import '../../assets/css/style.css'
import {CounterAddNumberPayload} from '../../actions/CounterAddNumberPayload'
import {CounterAddNumberAction} from '../../actions/CounterAddNumberAction'

const COUNT_STORE = 'RESULT_STORE'

const MAIN_SIMPLE_VIEW = Symbol('MAIN_SIMPLE_VIEW')

export class SimpleCounterContainer extends ViewContainer {
  /**
   * @override
   */
  registerViews() {
    this.addView(
      Main.create(
        new ViewParameters(MAIN_SIMPLE_VIEW, this),
        new MainSimpleStores(
          this.store(COUNT_STORE)
        )
      )
    )
    this._handleEvents()
  }

  _handleEvents() {
    this.view(MAIN_SIMPLE_VIEW).on(
      ViewEventListenerFactory
        .listen(INCREMENT_EVENT)
        .callback((payload) => {
          this.dispatchAction(
            CounterAddNumberAction.withPayload(
              new CounterAddNumberPayload(1, this.componentContext())
            )
          )
        }).build()
    )

    this.view(MAIN_SIMPLE_VIEW).on(
      ViewEventListenerFactory
        .listen(DECREMENT_EVENT)
        .callback((payload) => {
          this.dispatchAction(
            CounterAddNumberAction.withPayload(
              new CounterAddNumberPayload(-1, this.componentContext())
            )
          )
        }).build()
    )

    this.view(MAIN_SIMPLE_VIEW).on(
      ViewEventListenerFactory
        .listen(ADD_NUMBER_EVENT)
        .callback((payload) => {
          this.dispatchAction(
            CounterAddNumberAction.withPayload(
              new CounterAddNumberPayload(payload.value, this.componentContext())
            )
          )
        }).build()
    )
  }
}

/**
 * @extends ViewStoresParameters
 */
export class SimpleCounterContainerStores extends ViewStoresParameters {
  /**
   *
   * @param {Store} counterStore
   */
  constructor(counterStore) {
    super()
    this.setStore(COUNT_STORE, counterStore)
  }
}
