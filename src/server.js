import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

const startServer = ({ typeDefs, resolvers }) => {

  mongoose.connect('mongodb://0.0.0.0:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('🔌 Connected to MongoDB');
  }).catch(err => console.log(err));
  
  const server = new ApolloServer({ typeDefs, resolvers });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

export { startServer };