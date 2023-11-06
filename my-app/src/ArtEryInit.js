export const { initArtEry } = require("@art-suite/art-ery-react-js");
// import { useState, useEffect } from "react";
// const { BaseObject } = require("art-class-system");
// const { lowerCamelCase } = require("art-standard-lib");
// const { ArtModelSubscriptionsMixin } = require("@art-suite/art-models");
// const { defineModelsForAllPipelines } = require("@art-suite/art-pipeline-models");
// const { PipelineRegistry } = require("@art-suite/art-pipelines");

// export const makeSubscriberHook = modelName => key => {
//   if (!models[modelName])
//     throw new Error(
//       `invalid model name: ${JSON.stringify(modelName)}. Valid models names: ${Object.keys(
//         models
//       ).join(", ")}`
//     );
//   let initialModelRecord;
//   if (key && typeof key !== "string") {
//     const props = key;
//     initialModelRecord = props[modelName];
//     const model = models[modelName];
//     key = initialModelRecord ? model.toKeyString(initialModelRecord) : props[modelName + "Id"];
//   }
//   const [subscriptionState, setSubscriptionState] = useState({});
//   useEffect(() => {
//     class SubscriptionObject extends ArtModelSubscriptionsMixin(BaseObject) {
//       constructor() {
//         super();
//         this._state = {};
//       }
//       setState(key, value) {
//         this._state[key] = value;
//         setSubscriptionState({ ...this._state });
//       }
//     }
//     const subscriptionObject = new SubscriptionObject();
//     subscriptionObject.subscribe({ modelName, key, stateField: modelName, initialModelRecord });
//     return () => subscriptionObject.unsubscribeAll();
//   }, [key]);
//   return { ...subscriptionState };
// };

// const getSubscriptionHooks = models => {
//   const subscriptions = {};
//   Object.keys(models).forEach(
//     name => (subscriptions[lowerCamelCase(`use ${name}`)] = makeSubscriberHook(name))
//   );
//   return subscriptions;
// };

// export const initArtEry = PipelineClasses => {
//   const pipelineRegistry = new PipelineRegistry();
//   PipelineClasses.forEach(PipelineClass => {
//     PipelineClass.registry(pipelineRegistry);
//     PipelineClass.postCreateConcreteClass({});
//   });
//   const { pipelines } = pipelineRegistry;
//   global.pipelineRegistry = pipelineRegistry;
//   global.pipelines = pipelines;

//   // configure ArtConfig
//   ArtConfig.configure();

//   // load session
//   pipelineRegistry.session.loadSession();

//   const models = (global.models = defineModelsForAllPipelines(pipelineRegistry));
//   const subscriptions = getSubscriptionHooks(models);
//   return { models, subscriptions, pipelines, pipelineRegistry };
// };
