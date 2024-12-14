// mirage/server.js
import { createServer, Model, Response } from 'miragejs';

export function makeServer() {
  const server = createServer({
    models: {
      codeExecution: Model,
    },

    routes() {
      this.namespace = 'api';

      this.post('/execute', (schema, request) => {
        const { code, language } = JSON.parse(request.requestBody);

        if (code.includes('error')) {
          return new Response(400, {}, { message: 'Syntax Error in code' });
        } else {
          return { output: `Executed ${language} code successfully!` };
        }
      });
    },
  });

  return server;
}
