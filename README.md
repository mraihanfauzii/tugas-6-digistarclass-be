# E-Commerce API with Item from FakeStoreAPI

## Role
Terdapat 2 role yang digabungkan dalam 1 model yaitu user, di model user terdapat role admin dan customer yang dapat dipilih saat registrasi dengan menuliskannya dibody "role": "admin", jika dikosongkan maka defaulnya akan terpilih sebagai customer. 

## Fitur

- **CRUD User**: Fitur hapus user dan get all user hanya dapat dilakukan oleh admin.
  
- **CRUD Item**: Fitur Create-Update-Delete hanya dapat dilakukan oleh User dengan Role Admin, User dengan Role Customer hanya dapat melakukan get all items dan get items by ID. Item dapat dibuat oleh admin yang kemudian tersimpan mongodb, saat get all item akan menggabungkan item dari 2 sumber yang berbeda yaitu memanggil item yang dibuat sebelumnya oleh admin yang tersimpan di mongodb dan akan men-get item dari FakeStoreAPI juga. 

- **CRUD Order/Transaksi**: Create-Read-Update Status dari Order/Transaksi dapat dilakukan oleh User dengan Role Admin maupun Customer, tetapi untuk men-delete Order/Transaksi hanya dapat dilakukan oleh admin. Pada body Order diperlukan memasukkan payment yang tersedia yaitu 'gopay', 'ovo', 'va_bca', 'va_mandiri', 'va_bri' dan perlu juga memasukkan pengiriman yang tersedia yaitu 'jne', 'gojek', 'grab' kemudian perlu memasukkan status transaksi juga yang mana ada 'Menunggu Konfirmasi', 'Menunggu Pembayaran', 'Menunggu Pengiriman', 'Pengiriman', 'Sampai di Tujuan', 'Selesai'], default: 'Menunggu Konfirmasi', jika status transaksi tidak diisi maka otomatis akan terpilih status "Menunggu Konfirmasi".

- **Response Lengkap**: Setiap CRUD yang dilakukan menghasilkan response yang lengkap sebagai contoh ketika User melakukan order maka muncul response barang yang dipesan, harga, quantity, total harga dari harga*quantity, payment method, address pembeli, delivery method, status transaksi, created by(id user yang melakukan pemesanan)

- **Collection Postman**: Terdapat Collection Postman yang dapat di import untuk melakukan CRUD User, Item, dan Order/Transaksi dengan contoh Body Request yang telah disediakan

## Pengaturan Lokal

### Prasyarat

- Node.js terinstal di mesin Anda.
- MongoDB berjalan secara lokal atau pada instansi cloud.
- Mengatur variabel lingkungan untuk rahasia JWT dan koneksi database.

### Langkah Instalasi

1. **Klon repositori:**
   ```bash
   git clone https://github.com/usernameanda/namarepositorianda.git
   cd namarepositorianda
   ```
2. **Install Dependency:**
   ```bash
   npm install
   ```
3. **Atur variabel lingkungan: Buat file .env di direktori utama dan tambahkan berikut ini::**
   ```bash
   MONGO_DB_URL=mongodb://localhost:27017/namadatabaseanda
   JWT_SECRET=jwtanda
   ```
4. **Jalankan aplikasi dengan masuk ke root project:**
   ```bash
   node server.js
   ```
Aplikasi akan berjalan pada port 7000

   
