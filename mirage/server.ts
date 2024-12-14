import { createServer, Response } from 'miragejs';

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api';

      this.post('/execute', (schema, request) => {
        const { language, code } = JSON.parse(request.requestBody);

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
          output: `Hello, world!\nExecuted in language: ${language}`,
        };
      });

      this.get('/task.json', () => {
        return {
          id: 1,
          title: 'Print Hello World',
          description:
            "Write a program that prints 'Hello, world!' to the standard output.",
          initial_code: {
            python: '# Write your code here...\nprint("Hello, world!")',
            javascript:
              '// Write your code here...\nconsole.log("Hello, world!");',
            go: '// Write your code here...\npackage main\nimport "fmt"\nfunc main() {\n\tfmt.Println("Hello, world!")\n}',
          },
          test_cases: [{ input: null, expected_output: 'Hello, world!' }],
        };
      });
    },
  });

  return server;
}
