import { createServer, Response } from 'miragejs';
import task from '../public/api/task.json';

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api';

      this.post('/execute', (schema, request) => {
        const { code } = JSON.parse(request.requestBody);

        if (code.toLowerCase().includes('error')) {
          return new Response(
            400,
            {},
            {
              status: 'error',
              error: 'SyntaxError: Unexpected token',
            }
          );
        }

        return {
          status: 'success',
          output: code,
        };
      });

      this.get('/task.json', () => {
        return task;
      });

      this.passthrough();
    },
  });

  return server;
}
