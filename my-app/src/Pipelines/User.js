import { DataUpdatesFilter } from "./DataUpdatesFilter";
const { Pipeline } = require("@art-suite/art-pipelines");

export class User extends Pipeline {
  constructor() {
    super();
    this._records = { abc: { name: "Alice" } };
  }
}

User.filter(DataUpdatesFilter);
User.publicHandlers({
  get: request => request.pipeline._records[request.key],
  create: request => (request.pipeline._records[request.key] = request.data),
  update: request =>
    request.pipeline._records[request.key]
      ? (request.pipeline._records[request.key] = {
          ...request.pipeline._records[request.key],
          ...request.data,
        })
      : undefined,
});
