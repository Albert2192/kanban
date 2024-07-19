<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::resource('tareas', 'Api\V1\TareasController');
    Route::post('tareas/{id}', 'Api\V1\TareasController@update');
    Route::delete('tareas/{id}', 'Api\V1\TareasController@destroy');
});
