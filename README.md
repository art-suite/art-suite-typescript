# Art-Suite-Typescript MonoRepo

This monorepo tunes the ArtSuite to work wonderfully for TypeScript users.

The first focus is: [ArtEryReactJs](#arteryreactjs)

# ArtEryReactJs

> Goal: Create ReactJs apps, with REST APIs, and [Prisma](https://www.prisma.io) based back-ends - in radically less code than ever seen before.

Sub Goals:

- ReactJs support
  - ArtPipelines (client-side)
  - ArtModels
- Prisma support (server-side art-pipelines)
  - other ORMs easily added
- OpenAPI (automatically, fully generated from art-pipelines)
- Pluggable Transport layer
  - Drop-in support for GraphQL (2 lines of code to convert from REST to GraphQL - or to support both!)

### Benefits

Basically, it you should only need to create one, small file per DB-Table for your entire stack. The API, server, client, PrismaSchema, OpenAPI definition should all be managed by ArtEry.

And, while this is a 'low-code' solution, it is also powerfully extensible. ArtPipelines provides a superior platform for developing data pipelines compared to the status quo. With far less code you can implement far more capable systems.
