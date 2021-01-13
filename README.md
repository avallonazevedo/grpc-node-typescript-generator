# gRPC Node TypeScript Models Generator

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/avallonazevedo/grpc-node-typescript-generator/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/avallonazevedo/grpc-node-typescript-generator/blob/main/LICENSE)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)


This library uses the `grpc_node_tools` tools to automatically generate the GRPC models based on the protos.

----
### Setup

Using the library is extremely simple. You can simply run:

```text
grpc-node-typescript-generator
```

And answer the two questions about the location of your `.proto` files and where your` models` should be generated.

The easiest way is to create a script in your `package.json`. Example:

```javascript
"scripts": {
  "build:proto": "grpc-node-typescript-generator --protoPath assets/protos --modelsPath assets/models"
}
```

And be happy!