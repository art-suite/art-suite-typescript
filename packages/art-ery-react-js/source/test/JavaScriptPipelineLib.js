const { Pipeline } = require("@art-suite/art-pipelines");

module.exports = {
  createJavaScriptPipeline: () => {
    class User extends Pipeline {
      constructor() {
        super();
        this._records = { abc: { name: "Alice" } };
      }
    }

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
    return User;
  },
};
