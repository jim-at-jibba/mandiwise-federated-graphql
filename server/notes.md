# Notes

## Key concepts in federated schemas

- _Entities:_ These are types that can be referenced and extended by another service; in other words, they are the connection points of our federated graph.

- _Keys:_ We declare an entity by adding the @key directive to a type definition.

- _External type extensions:_ We can extend a type defined in a different service and add new fields to it using the extend type syntax. We can then use a combination of the @key and @external directives to connect the original type and the type extension.

- _Extending Query and Mutation types:_ We also use the extend type syntax to define the Query and Mutation root queries in each service, and we don’t need to define their base types in any schema because Apollo will handle this at the gateway level.
