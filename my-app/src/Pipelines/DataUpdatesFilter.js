const { Filter } = require("@art-suite/art-pipelines");

export class DataUpdatesFilter extends Filter {}

DataUpdatesFilter.location("client");
DataUpdatesFilter.after({
  all: response =>
    response.tap(response => {
      const { pipeline, key, data } = response;
      if (response.isUpdateRequest) pipeline.dataUpdated(key || pipeline.toKeyString(data), data);
      if (response.isDeleteRequest) pipeline.dataDeleted(key || pipeline.toKeyString(data), data);
    }),
});
