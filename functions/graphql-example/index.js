import { graphql, buildSchema } from 'graphql';
import λ from 'apex.js';

export default λ(e => {
  let schema = buildSchema(`
    type Query {
      hello: String
    }
  `);

  let root = {
    hello: () => 'Hello World!'
  };

  return graphql(schema, e.query, root);
});
