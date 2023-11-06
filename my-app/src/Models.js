import { initArtEry } from "./ArtEryInit";
import { PipelineClasses } from "./Pipelines";

export const { models, subscriptions, pipelines, pipelineRegistry } = initArtEry(PipelineClasses);
