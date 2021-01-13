import askForInformation from './prompt';
import generateGRPCModels from './grpc';
import chalk from 'chalk';

const APP_NAME = 'gRPC Node Models Generator';
const APP_VERSION = '1.0.0';

const messages = {
  welcome: chalk.yellow(`Welcome to ${APP_NAME} ${APP_VERSION}`),
  working: chalk.yellow('We are building your models...'),
  success: chalk.greenBright('Your models were built correctly.'),
  error: chalk.redBright(
    'There was an error while building. Please see next lines to get more details'
  ),
};

const run = async (): Promise<void> => {
  console.log(messages.welcome);
  const { modelsPath, protoPath } = await askForInformation();
  try {
    console.log(messages.working);
    generateGRPCModels(protoPath, modelsPath);
    console.log(messages.success);
  } catch (error) {
    console.log(messages.error);
    throw error;
  }
};

export default run;
