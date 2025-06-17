// Mengimpor decorator Injectable dari NestJS
// Menandakan bahwa class ini adalah service yang dapat di-*inject* ke komponen lain (seperti controller)
import { Injectable } from '@nestjs/common';

// Mendefinisikan tipe data User dengan tiga properti:
// - id: number (ID unik user)
// - name: string (nama user)
// - email: string (email user)
export type User = { id: number; name: string; email: string };

// Memberi anotasi @Injectable agar service ini bisa digunakan via dependency injection
@Injectable()
export class UserService {
  // Data user disimpan sementara di memori, seolah-olah ini adalah database kecil
  // Properti ini bersifat private agar hanya bisa diakses dari dalam class ini
  private users: User[] = [
    { id: 1, name: 'Matt', email: 'matt@gmail.com' },
    { id: 2, name: 'Neo', email: 'neo@gmail.com' },
  ];

  // Method untuk mengambil semua user
  // Mengembalikan seluruh isi array users
  findAll(): User[] {
    return this.users;
  }

  // Method untuk mencari satu user berdasarkan ID
  // Jika user ditemukan, kembalikan objek user; jika tidak, kembalikan undefined
  findById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  // Method untuk menambahkan user baru ke daftar users
  // Parameternya bertipe Omit<User, 'id'>, artinya hanya menerima name dan email (tanpa id)
  // Omit<T, K> adalah utilitas TypeScript untuk menghapus properti K dari tipe T
  // Tujuannya: user tidak boleh mengatur ID sendiri, karena akan dibuat otomatis oleh sistem
  create(user: Omit<User, 'id'>): User {
    // Membuat user baru dengan ID auto-increment dari panjang array users
    const newUser = { id: this.users.length + 1, ...user };

    // Menambahkan user baru ke array
    this.users.push(newUser);

    // Mengembalikan user baru yang sudah ditambahkan
    return newUser;
  }
}
