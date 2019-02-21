import {ViewStoresParameters} from 'hotballoon'

/**
 * @extends ViewStoresParameters
 */
export class CounterContainerStoresParameters extends ViewStoresParameters {
  /**
   *
   * @param {StoreInterface} counterStore
   */
  constructor(counterStore) {
    super()
    this.__counterStore = this.validate(counterStore)
  }

  /**
   *
   * @return {HandlerCounterStore}
   */
  get counterStore() {
    return this.__counterStore
  }
}
