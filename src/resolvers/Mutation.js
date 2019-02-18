const Mutation = {
  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createUser({data: {...args}})
    return user;
  },

  async createSeries(parent, args, ctx, info) {
    // TODO: Check if they are logged in
    const series = await ctx.db.mutation.createSeries({ data: {...args} }, info)
    console.log(series)
    return series;
  }
};

module.exports = Mutation;