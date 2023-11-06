"use strict"
let Caf = require('caffeine-script-runtime');
Caf.defMod(module, () => {return Caf.importInvoke(["ArtModelSubscriptionsMixin", "BaseObject", "objectWith", "models", "Error", "Object", "isPlainObject", "isString", "formattedInspect", "useState", "useEffect", "lowerCamelCase", "PipelineRegistry", "ArtConfig", "defineModelsForAllPipelines"], [global, require('react'), require('art-class-system'), require('art-standard-lib'), require('@art-suite/art-models'), require('@art-suite/art-pipelines'), require('@art-suite/art-pipeline-models')], (ArtModelSubscriptionsMixin, BaseObject, objectWith, models, Error, Object, isPlainObject, isString, formattedInspect, useState, useEffect, lowerCamelCase, PipelineRegistry, ArtConfig, defineModelsForAllPipelines) => {let SubscriptionObject, makeSubscriberHook, getSubscriptionHooks, registerClasses; SubscriptionObject = Caf.defClass(class SubscriptionObject extends ArtModelSubscriptionsMixin(BaseObject) {constructor(setSubscriptionState) {super(...arguments); this.setSubscriptionState = setSubscriptionState; this._state = {};};}, function(SubscriptionObject, classSuper, instanceSuper) {this.prototype.setState = function(key, value) {return this.setSubscriptionState(this._state = objectWith(this._state, key, value));};}); makeSubscriberHook = function(modelName) {if (!models[modelName]) {throw new Error(`invalid model name: \${JSON.stringify(modelName)}. Valid models names: ${Caf.toString(Object.keys(models).join(", "))}`);}; return (key) => {let props, initialModelRecord, model, subscriptionState, setSubscriptionState; if (isPlainObject(key)) {props = key; initialModelRecord = props[modelName]; model = models[modelName]; key = initialModelRecord ? model.toKeyString(initialModelRecord) : props[modelName + "Id"];} else {if (!isString(key)) {throw new Error(`Expecting first argument to be a key (string) or props (plain-object). Got: ${Caf.toString(formattedInspect(key))}`);};}; ([subscriptionState, setSubscriptionState] = useState({})); useEffect(() => {let subscriptionObject; (subscriptionObject = new SubscriptionObject(setSubscriptionState)).subscribe({modelName, key, initialModelRecord, stateField: modelName}); return () => subscriptionObject.unsubscribeAll();}, [key]); return subscriptionState;};}; getSubscriptionHooks = function(models) {return Caf.object(models, (v, name) => makeSubscriberHook(name), null, null, (v, name) => lowerCamelCase(`use ${Caf.toString(name)}`));}; registerClasses = function(PipelineClasses, pipelineRegistry) {return Caf.each2(PipelineClasses, (PipelineClass) => {PipelineClass.registry(pipelineRegistry); return PipelineClass.postCreateConcreteClass({});});}; return {initArtEry: function(PipelineClasses) {let pipelineRegistry, models, subscriptions, pipelines; global.pipelineRegistry = pipelineRegistry = new PipelineRegistry; ArtConfig.configure(); registerClasses(PipelineClasses, pipelineRegistry); pipelineRegistry.session.loadSession(); return {models: models = global.models = defineModelsForAllPipelines(pipelineRegistry), subscriptions: subscriptions = getSubscriptionHooks(models), pipelines: pipelines = global.pipeline = pipelineRegistry.pipelines, pipelineRegistry};}};});});
//# sourceMappingURL=ArtEryReactJs.js.map
