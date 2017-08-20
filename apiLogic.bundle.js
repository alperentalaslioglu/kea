webpackJsonp([4],{887:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function c(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return m});var r=t(9),s=t.n(r),i=t(295),l=t.n(i),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),p={keaUsage:t(987),keaPath:t(988),keaConstants:t(989),keaActions:t(990),keaReducers:t(991),keaSelectors:t(992),keaConnect:t(993),keaSagas:t(994),keaStart:t(995),keaStop:t(996),keaTakeEvery:t(997),keaTakeLatest:t(998),keaWorkers:t(999)},m=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),u(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"api-scene"},s.a.createElement("h2",null,s.a.createElement("code",null,"kea(options)")),s.a.createElement("p",null,"Create a new kea ",s.a.createElement("strong",null,"logic store")," and connect it to redux."),s.a.createElement("h3",null,"Usage"),s.a.createElement("p",null,"Here is a complete example with all the options available. See below for further explanations."),s.a.createElement(l.a,{className:"javascript"},p.keaUsage),s.a.createElement("h3",null,"Options"),s.a.createElement("h4",null,"path: ",s.a.createElement("code",null,"() => []")),s.a.createElement("p",null,"Give a name to the logic store and register it in a certain location in your application's Redux tree."),s.a.createElement(l.a,{className:"javascript"},p.keaPath),s.a.createElement("h4",null,"constants: ",s.a.createElement("code",null,"() => []")),s.a.createElement("p",null,"Create constants that can be used in other parts of the logic store."),s.a.createElement(l.a,{className:"javascript"},p.keaConstants),s.a.createElement("h4",null,"actions: ",s.a.createElement("code",null,"({ path, constants }) => ({})")),s.a.createElement("p",null,"Define action creators"),s.a.createElement(l.a,{className:"javascript"},p.keaActions),s.a.createElement("h4",null,"reducers: ",s.a.createElement("code",null,"({ path, constants, actions }) => ({})")),s.a.createElement("p",null,"Define the structure and logic of your reducers"),s.a.createElement(l.a,{className:"javascript"},p.keaReducers),s.a.createElement("h4",null,"selectors: ",s.a.createElement("code",null,"({ path, constants, actions, selectors }) => ({})")),s.a.createElement("p",null,"Define selectors, which are only recomputed when their input changes"),s.a.createElement(l.a,{className:"javascript"},p.keaSelectors),s.a.createElement("h4",null,"connect: ",s.a.createElement("code",null,"{}")),s.a.createElement("p",null,"Fetch actions and selectors/props from other logic stores."),s.a.createElement(l.a,{className:"javascript"},p.keaConnect),s.a.createElement("h4",null,"start: ",s.a.createElement("code",null,"function * () ","{}")),s.a.createElement("p",null,"Saga that is started whenever the saga exported from this component starts"),s.a.createElement(l.a,{className:"javascript"},p.keaStart),s.a.createElement("h4",null,"stop: ",s.a.createElement("code",null,"function * () ","{}")),s.a.createElement("p",null,"Saga that is started whenever the saga exported from this component is cancelled"),s.a.createElement(l.a,{className:"javascript"},p.keaStop),s.a.createElement("h4",null,"takeEvery: ",s.a.createElement("code",null,"({ actions }) => ({})")),s.a.createElement("p",null,"Run the following workers every time the action is dispatched"),s.a.createElement(l.a,{className:"javascript"},p.keaTakeEvery),s.a.createElement("h4",null,"takeLatest: ",s.a.createElement("code",null,"({ actions }) => ({})")),s.a.createElement("p",null,"Run the following workers every time the action is dispatched, cancel the previous worker if still running"),s.a.createElement(l.a,{className:"javascript"},p.keaTakeLatest),s.a.createElement("h4",null,"workers: ",s.a.createElement("code",null,"{}")),s.a.createElement("p",null,"An object of workers which you may reference in other sagas."),s.a.createElement(l.a,{className:"javascript"},p.keaWorkers),s.a.createElement("h4",null,"sagas: ",s.a.createElement("code",null,"[]")),s.a.createElement("p",null,"Array of sagas that get exported with this component's saga"),s.a.createElement(l.a,{className:"javascript"},p.keaSagas))}}]),n}(r.Component)},987:function(e,n){e.exports="// scenes/my-random-scene/logic.js\nimport { kea } from 'kea'\n\nimport otherLogic from './other-logic.js'\n\nexport default kea({\n  connect: {\n    actions: [\n      otherLogic, [\n        'firstAction',\n        'secondAction as renamedAction'\n      ]\n    ],\n\n    props: [\n      otherLogic, [\n        'firstProp',\n        'secondProp as renamedProp',\n        '* as allProps'\n      ],\n      // select from any redux tree node\n      (state) => state.somethingThatResolvesToAnObject, [\n        'variable',\n        'otherVariable'\n      ]\n    ]\n  },\n\n  path: () => ['scenes', 'myRandomScene', 'index'],\n\n  constants: () => ['STRING', 'OTHER_STRING'],\n\n  actions: ({ path, constants }) => ({\n    actionWithStaticPayload: 'payload value',\n    anotherActionWithAStaticPayload: { thisIs: 'that' },\n    simpleAction: true,\n\n    actionWithDynamicPayload: (id) => ({ id }),\n    actionWithManyParameters: (id, message) => ({ id, message }),\n    actionWithObjectInput: ({ id, message }) => ({ id, message })\n  }),\n\n  reducers: ({ actions, path, constants }) => ({\n    reducerKey: [defaultValue, propType, /* optional options: { persist: true }, */ {\n      // operations\n      [actions.simpleAction]: (state, payload) => state + payload.value // return the new state,\n      [actions.complexAction]: (state, payload) => {\n        // do more things in the block\n        return state + payload.value\n      },\n      [actions.noStateUsed]: (_, payload) => payload.value,\n      [actions.setToTrue]: () => true,\n      [actions.clearSomething]: () => false,\n      \"ANY_OTHER_ACTION_TYPE\": (state, payload, meta) => 'do whatever you want'\n    }],\n\n    constantDefault: [constants.OTHER_STRING, PropTypes.string, {\n      [actions.clearSomething]: () => constants.STRING,\n      [actions.someOtherAction]: (_, payload) => payload.value\n    }]\n  }),\n\n  selectors: ({ path, constants, actions, selectors }) => ({\n    selectorName: [\n      () => [selectors.inputSelector1, selectors.inputSelector2],\n      (input1, input2) => createOutput(input),\n      returnPropType\n    ],\n\n    computedValue: [\n      () => [selectors.reducerKey, selectors.constantDefault],\n      (reducerKey, constantDefault) => {\n        return complicatedOperation(reducerKey, constantDefault)\n      },\n      PropTypes.object\n    ]\n  }),\n\n  // saga functions\n\n  start: function * () {\n    // saga started or component mounted\n    console.log(this)\n  },\n\n  stop: function * () {\n    // saga cancelled or component unmounted\n  },\n\n  takeEvery: ({ actions, workers }) => ({\n    [actions.simpleAction]: function * () {\n      // inline worker\n    },\n    [actions.actionWithDynamicPayload]: workers.dynamicWorker\n  }),\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.actionWithStaticPayload]: function * () {\n      // inline worker\n    },\n    [actions.actionWithManyParameters]: workers.dynamicWorker\n  }),\n\n  workers: {\n    * dynamicWorker (action) {\n      const { id, message } = action.payload // if from takeEvery/takeLatest\n      // reference with workers.dynamicWorker\n    },\n    longerWayToDefine: function * () {\n      // another way to define a worker\n    }\n  },\n\n  sagas: [saga1, saga2]\n})\n\n// index.js\nimport myRandomSceneLogic from 'scenes/my-random-scene/logic'\n"},988:function(e,n){e.exports="// Input\npath: () => ['scenes', 'myRandomScene', 'logicMountPoint']\n\n// Output\nmyRandomSceneLogic.path == ['scenes', 'myRandomScene', 'logicMountPoint']\n"},989:function(e,n){e.exports="// Input\nconstants: () => ['STRING', 'OTHER_STRING']\n\n// Output\nmyRandomSceneLogic.constants == { STRING: 'STRING', OTHER_STRING: 'OTHER_STRING' }\n"},990:function(e,n){e.exports="// Input\nactions: ({ path, constants }) => ({\n  actionWithStaticPayload: 'payload value',\n  anotherActionWithAStaticPayload: { thisIs: 'that' },\n  simpleAction: true,\n\n  actionWithDynamicPayload: (id) => ({ id }),\n  actionWithManyParameters: (id, message) => ({ id, message }),\n  actionWithObjectInput: ({ id, message }) => ({ id, message })\n})\n\n// Output\nmyRandomSceneLogic.actions == {\n  actionWithStaticPayload: () => ({ type: '...', payload: { value: 'payload value' } }),\n  anotherActionWithAStaticPayload: () => ({ type: '...', payload: { thisIs: 'that' } }),\n  simpleAction: () => ({ type: '...', payload: { value: true } }),\n\n  actionWithDynamicPayload: (id) => ({ type: '...', payload: { id } }),\n  actionWithManyParameters: (id, message) => ({ type: '...', payload: { id, message } }),\n  actionWithObjectInput: ({ id, message }) => ({ type: '...', payload: { id, message } })\n}\n"},991:function(e,n){e.exports="// Input\nreducers: ({ actions, path, constants }) => ({\n  reducerKey: [defaultValue, propType, /* optional options: { persist: true }, */ {\n    // operations\n    [actions.simpleAction]: (state, payload) => state + payload // return the new state,\n    [actions.complexAction]: (state, payload) => {\n      // do more things in the block\n      return state + payload\n    },\n    [actions.noStateUsed]: (_, payload) => payload.value,\n    [actions.setToTrue]: () => true,\n    [actions.clearSomething]: () => false,\n    \"ANY_OTHER_ACTION_TYPE\": (state, payload, meta) => 'do whatever you want'\n  }],\n\n  constantDefault: [constants.OTHER_STRING, PropTypes.string, {\n    [actions.clearSomething]: () => constants.STRING,\n    [actions.someOtherAction]: (_, payload) => payload.value\n  }]\n})\n\n// Output\nmyRandomSceneLogic.reducers == {\n  reducerKey: (initialState = defaultValue, action) => /* ... */,\n  constantDefault: (initialState = constants.OTHER_STRING, action) => /* ... */,\n}\nmyRandomSceneLogic.reducer == combineReducers(reducers)\n"},992:function(e,n){e.exports="// Input\nselectors: ({ path, constants, actions, selectors }) => ({\n  selectorName: [\n    () => [selectors.inputSelector1, selectors.inputSelector2],\n    (input1, input2) => createOutput(input),\n    returnPropType\n  ],\n\n  computedValue: [\n    () => [selectors.reducerKey, selectors.constantDefault],\n    (reducerKey, constantDefault) => {\n      return complicatedOperation(reducerKey, constantDefault)\n    },\n    PropTypes.object\n  ]\n})\n\n// Output\nmyRandomSceneLogic.selectors == {\n  // all reducer keys first,\n  reducerKey: (state) => state.scenes.myRandomScene.index.reducerKey,\n  constantDefault: (state) => state.scenes.myRandomScene.index.constantDefault,\n\n  // other defined selectors\n  selectorName: (state) => memoizedSelectorForSelectorName(state),\n  computedValue: (state) => memoizedSelectorForComputedValue(state)\n}\n\nmyRandomSceneLogic.selector == (state) => ({\n  reducerKey: state.scenes.myRandomScene.index.reducerKey,\n  constantDefault: state.scenes.myRandomScene.index.constantDefault,\n  selectorName: memoizedSelectorForSelectorName(state),\n  computedValue: memoizedSelectorForComputedValue(state)\n})\n"},993:function(e,n){e.exports="// Input\nconnect: {\n  actions: [\n    otherLogic, [\n      'firstAction',\n      'secondAction as renamedAction'\n    ]\n  ],\n\n  props: [\n    otherLogic, [\n      'firstProp',\n      'secondProp as renamedProp',\n      '* as allProps'\n    ],\n    // select from any redux tree node\n    (state) => state.somethingThatResolvesToAnObject, [\n      'variable',\n      'otherVariable'\n    ]\n  ]\n}\n\n// Output\nmyRandomSceneLogic.actions == {\n  firstAction: otherLogic.actions.firstAction,\n  renamedAction: otherLogic.actions.secondAction\n}\n\nmyRandomSceneLogic.selectors == {\n  firstProp: otherLogic.selectors.firstProp,\n  renamedProp: otherLogic.selectors.secondProp,\n  allProps: otherLogic.selector,\n  variable: state.somethingThatResolvesToAnObject.variable,\n  otherVariable: state.somethingThatResolvesToAnObject.otherVariable\n}\n"},994:function(e,n){e.exports="// Input\nsagas: [saga1, saga2]\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  yield fork(saga1)\n  yield fork(saga2)\n\n  // start() ...\n}\n"},995:function(e,n){e.exports="// Input\nstart: function * () {\n  // saga started or component mounted\n  console.log(this)\n}\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // saga started or component mounted\n  console.log(this)\n  // => { actions, workers, path, key, get: function * (), fetch: function * () }\n}\n"},996:function(e,n){e.exports="// Input\nstop: function * () {\n  // saga cancelled or component unmounted\n}\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  try {\n    // start()\n  } finally {\n    if (cancelled()) {\n      // saga cancelled or component unmounted\n    }\n  }\n}\n"},997:function(e,n){e.exports="// Input\ntakeEvery: ({ actions, workers }) => ({\n  [actions.simpleAction]: function * () {\n    // inline worker\n  },\n  [actions.actionWithDynamicPayload]: workers.dynamicWorker\n})\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // pseudocode\n  yield fork(function * () {\n    yield [\n      takeEvery(actions.simpleAction.toString(), function * () {\n        // inline worker\n      }.bind(this)),\n      takeEvery(actions.actionWithDynamicPayload.toString(), workers.dynamicWorker.bind(this))\n    ]\n  })\n}\n"},998:function(e,n){e.exports="// Input\ntakeLatest: ({ actions, workers }) => ({\n  [actions.simpleAction]: function * () {\n    // inline worker\n  },\n  [actions.actionWithDynamicPayload]: workers.dynamicWorker\n})\n\n// Output\nmyRandomSceneLogic.saga == function * () {\n  // pseudocode\n  yield fork(function * () {\n    yield [\n      takeLatest(actions.simpleAction.toString(), function * () {\n        // inline worker\n      }.bind(this)),\n      takeLatest(actions.actionWithDynamicPayload.toString(), workers.dynamicWorker.bind(this))\n    ]\n  })\n}\n"},999:function(e,n){e.exports="// Input\nworkers: {\n  * dynamicWorker (action) {\n    const { id, message } = action.payload // if from takeEvery/takeLatest\n    // reference with workers.dynamicWorker\n  },\n  longerWayToDefine: function * () {\n    // another worker\n  }\n}\n\n// Output\nmyRandomSceneLogic.workers == {\n  dynamicWorker: function (action) *\n    const { id, message } = action.payload // if from takeEvery/takeLatest\n    // reference with workers.dynamicWorker\n  }.bind(myRandomSceneLogic),\n\n  longerWayToDefine: function () * {\n    // another worker\n  }.bind(myRandomSceneLogic)\n}\n"}});