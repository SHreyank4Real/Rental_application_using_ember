import { Server } from '@miragejs/server';
import { getModels } from './ember-data';
import { hasEmberData } from './utils/ember-data';

export { defaultPassthroughs } from '@miragejs/server';

/**
  @hide
*/
export default class EmberServer extends Server {

  constructor(options) {
    // Merge models from autogenerated Ember Data models with user defined models
    if (hasEmberData && options.discoverEmberDataModels) {
      options.models = Object.assign({}, getModels(), options.models);
    }

    super(options);
  }

}