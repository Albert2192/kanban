<?php

namespace Database\Seeders;

use App\Models\Tareas;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $tarea = new Tareas();
        $tarea->nombre = "Primer Tarea";
        $tarea->descripcion = "Esta es una descipcion de prueba 1";
        $tarea->asignado = "John Doe";
        $tarea->save();

        $tarea = new Tareas();
        $tarea->nombre = "Segunda Tarea";
        $tarea->descripcion = "Esta es una descipcion de prueba 2";
        $tarea->asignado = "Jane Doe";
        $tarea->save();
    }
}
