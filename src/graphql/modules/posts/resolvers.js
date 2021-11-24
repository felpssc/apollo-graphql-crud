import Post from '../../../models/Post';
import User from '../../../models/User'

export default {
  Post: {
    author: async (post) => await User.findById(post.author),
  },
  Query: {
    posts: async () => await Post.find(),
    post: async (_, args) => await Post.findById(args.id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { data }) => Post.findByIdAndUpdate(data.id, data, { new: true }),
    deletePost: async (_, { id }) => !!(Post.findByIdAndDelete(id)),
  }
}