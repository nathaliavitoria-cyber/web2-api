<?php

use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\CategoriaController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ProdutoController::class, 'index']);
Route::get('/produtos/{id}', [ProdutoController::class, 'show']);

Route::get('/categorias', [CategoriaController::class, 'index']);
Route::get('/categorias/{id}', [CategoriaController::class, 'show']);
