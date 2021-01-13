# gRPC Node TypeScript Models Generator

This library uses the `grpc_node_tools` tools to automatically generate the GRPC models based on the protos.

----
## Setup

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