const { initArtEry } = require("@art-suite/art-ery-react-js");
import { PipelineClasses } from "./Pipelines";

export const { models, subscriptions, pipelines, pipelineRegistry } = initArtEry(PipelineClasses);
