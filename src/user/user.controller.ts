// Mengimpor decorator dari NestJS untuk membangun RESTful controller
import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';

// Mengimpor UserService (yang berisi logika bisnis) dan tipe data User
import { UserService, User } from './user.service';

// Mendeklarasikan controller dengan prefix route '/user'
// Jadi endpoint-nya nanti seperti: GET /user, GET /user/:id, POST /user
@Controller('user')
export class UserController {
  // Constructor melakukan dependency injection terhadap UserService
  // Ini membuat kita bisa menggunakan method dari UserService di dalam controller
  constructor(private readonly userService: UserService) {}

  // HTTP GET ke endpoint /user
  // Menjalankan method findAll() di service untuk mengambil semua user
  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  // HTTP GET ke endpoint /user/:id (dengan parameter path)
  // Mengambil id dari parameter URL dan konversi ke number (karena awalnya string)
  // Lalu memanggil service.findById untuk mendapatkan data user dengan ID tersebut
  @Get(':id')
  findById(@Param('id') id: string): User {
    const user = this.userService.findById(+id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  // HTTP POST ke endpoint /user
  // Mengambil data body dari request dan dipastikan memiliki tipe Omit<User, 'id'>
  // Artinya, user hanya mengirim name dan email (tanpa id, karena akan di-generate otomatis)
  // Lalu diproses oleh service.create()
  @Post()
  crete(@Body() body: Omit<User, 'id'>): User {
    return this.userService.create(body);
  }
}
