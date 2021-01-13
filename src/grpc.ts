import path from 'path';
import shelljs from 'shelljs';
import { existsSync, mkdirSync } from 'fs';
import rimraf from 'rimraf';

const generateGRPCModels = (protoPath: string, modelsPath: string): void => {
  const PROTO_DIR = path.join(__dirname, protoPath);
  const MODEL_DIR = path.join(__dirname, modelsPath);
  const PROTOC_GEN_TS_PATH = path.join(
    __dirname,
    '../node_modules/.bin/protoc-gen-ts'
  );

  const existsProtoDir = existsSync(PROTO_DIR);
  const existsModelDir = existsSync(MODEL_DIR);
  if (!existsProtoDir)
    throw new Error(
      `We can't find the ${PROTO_DIR} or it's not a valid path. Please try again.`
    );

  if (!existsModelDir) {
    mkdirSync(MODEL_DIR);
  }

  rimraf.sync(`${MODEL_DIR}/*`);

  const command =
    'grpc_tools_node_protoc ' +
    `--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" ` +
    `--grpc_out="${MODEL_DIR}" ` +
    `--js_out="import_style=commonjs,binary:${MODEL_DIR}" ` +
    `--ts_out="${MODEL_DIR}" ` +
    `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`;

  shelljs.exec(command);
};

export default generateGRPCModels;
