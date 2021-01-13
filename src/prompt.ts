import inquirer, { Question } from 'inquirer';
import { AskForInformationResponse } from './types';

/**
 * CLI prompt
 */
const askForInformation = (): AskForInformationResponse => {
  const questions: Question[] = [
    {
      name: 'protoPath',
      type: 'input',
      message:
        'Please provide the directory where your proto files are located:',
      validate: input => (input.length ? true : 'Please provide a valid path'),
    },
    {
      name: 'modelsPath',
      type: 'input',
      message:
        'Please provide the directory where your gRPC models must be generated:',
      validate: input => (input.length ? true : 'Please provide a valid path'),
    },
  ];
  const response = inquirer.prompt(questions) as unknown;
  return response as AskForInformationResponse;
};

export default askForInformation;
