// Mengimpor decorator yang digunakan untuk membuat GraphQL resolver di NestJS
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

// Mengimpor service dan type User dari user.service
// Di sini, 'User as UserType' hanya aliasing untuk membedakan dengan User dari user.model
import { UserService, User as UserType } from './user.service';

// Mengimpor class User yang didefinisikan sebagai GraphQL ObjectType dari user.model.ts
import { User } from './user.model';

// Menandai bahwa class ini adalah GraphQL Resolver untuk tipe User
@Resolver(() => User)
export class UserResolver {
  // Dependency Injection terhadap UserService
  // Supaya resolver bisa memakai logic yang ada di service (seperti findAll, findById, create)
  constructor(private readonly userService: UserService) {}

  // GraphQL Query: users
  // Akan menghasilkan list (array) dari objek User
  // Sama dengan `query { users { id name email } }`
  @Query(() => [User])
  users() {
    // Memanggil method findAll dari UserService
    return this.userService.findAll();
  }

  // GraphQL Query: user(id)
  // Mengambil parameter `id` dari query dan mencari user berdasarkan ID
  // Sama dengan `query { user(id: 1) { name email } }`
  @Query(() => User)
  user(@Args('id') id: number) {
    // Menjalankan method findById pada UserService
    return this.userService.findById(id);
  }

  // GraphQL Mutation: createUser
  // Menggunakan Args untuk menerima parameter input dari client (name dan email)
  // Sama dengan: 
  // mutation {
  //   createUser(name: "Matt", email: "matt@gmail.com") {
  //     id
  //     name
  //     email
  //   }
  // }
  @Mutation(() => User)
  createUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ) {
    // Memanggil create pada UserService dengan data input
    return this.userService.create({ name, email });
  }
}
