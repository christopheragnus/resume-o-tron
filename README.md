# Make School Frontend Coding Challenge - Resume-o-Tron

Wow! We're so happy you want to work at Make School! 🙌 However, we want to review your skills to understand your level of expertise and whether you're a good fit for our team. Technically. You're already awesome.

We are looking for people that ❤️ GraphQL and are feeling right at home mutating and querying against GraphQL APIs.

For this reason, we've come up with the **Resume-o-Tron** challenge. Your task is to make a GraphQL API and populate it with your own resume. I know, rite? This is your time to shine, you can populate the CV with anything you want. The prettier the resume and your understanding of pleasing UIs, the better! We’re looking for clean code, pretty, mobile-responsive styling and error handling, and tests if you finish early

The first thing for you to do is to make the actual API, so here's some starter info: [GraphQL SDL](https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51).

```graphql
type Position {
  position: String!
  description: String!
  year: Int!
}

type Resume {
  # Add things like name, age, address, maybe a photo?
  # Up to you to decide.

  position: [Position]
}
```

After you've built and published your API, it's time to build the client for it. Your client should at the least do the following two things:

- Show your filled-in resume.
- Make it possible to add positions via a simple edit form.

The API client can be built in React and consume your own API. You can choose your own GraphQL API client and any JS frameworks you'd like but you should be able to tell us why you chose it. And have actual experience using the competitors in order to make an informed decision.

## The FAQ.

### But I can't make API's! That's backend! 

It could be, but it doesn't have to be. This challenge tests your FE coding skills. Please use Prisma.io to make the back-end for the API. You can choose to implement your own back-end implementation, but that won't count for the scoring of this challenge.

### Who will rate me?

Make School Engineers will rate you. Some will check on what you delivered and others will check on how you delivered it. They're all into quality, but also into seeing "how lazy you are" (read efficient) and how much you can deliver in a short timespan and your street-smartness.

### How will I be rated?

You'll be rated on your code quality and your commit style. The tools you use. How you write CSS (so avoid CSS frameworks), how product-oriented you are, how you write React. Less is more. Refactorability === Life. The runnability and installability of your code and if you can explain the WHY behind your choices. The way you raise a PR, the way you describe your code, etc.

### How long should this take me?

It should take about 2 hours. If it takes longer it doesn't mean you're bad, it might just mean that you not have taken all possible options into account. So plan ahead.

### How do I give my solution to Make School?

It's super easy! Just raise a pull request against master and we'll get a notification and we'll contact you!

Additionally, please answer the following questions in your pull request:

1. I chose this package manager because ... [insert-awesomeness-here]
2. I chose this GraphQL client because ... [insert-new-hotness-here]
3. I'm especially proud of ... [insert-super-thing-here]
4. I think this challenge is a ... [rating-out-of-5]
5. If there was one thing I could improve about GraphQL it would be ... [earth-shattering-feature]

Ready? Awesome! Let's get going! Hope to see you soon at Make School!
