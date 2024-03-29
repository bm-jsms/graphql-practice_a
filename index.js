import { ApolloServer, gql } from '@apollo/server';

const persons = [
	{
		name: 'John',
		phone: '123-456-7890',
		street: '1234 Main St',
		city: 'San Francisco',
		id: 1,
	},
	{
		name: 'Jane',
		phone: '123-456-7890',
		street: '1234 Main St',
		city: 'San Francisco',
		id: 2,
	},
	{
		name: 'Doe',
		phone: '123-456-7890',
		street: '1234 Main St',
		city: 'San Francisco',
		id: 3,
	},
];

const typeDefs = gql`
	type Person {
		name: String!
		phone: String!
		street: String!
		city: String!
		id: ID!
	}
	type Query {
		personCount: Int!
		allPersons: [Person!]!
		findPerson(name: String!): Person
	}
`;

const resolvers = {
	Query: {
		personCount: () => persons.length,
		allPersons: () => persons,
		findPerson: (root, args) => persons.find(p => p.name === args.name),
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
