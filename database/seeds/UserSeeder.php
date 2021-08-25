<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->insert([
            'name' => 'admin',
            'display_name' => 'admin testing',
            'email' => 'laravel.test@gmail.com',
            'password' => \Hash::make('laravel-test'),
            'is_enable' => 'Yes',
            'created_at' => date('Y-m-d H:i:s'),
            'privilege_id' => 1,
        ]);
    }
}
