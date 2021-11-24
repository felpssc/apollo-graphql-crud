import User from '../../../models/User';

export default {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: async () => await User.find(),
    user: async (_, args) => await User.findById(args.id),
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    updateUser: async (_, { id, data }) => await User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete({ _id: id })),
  }
}