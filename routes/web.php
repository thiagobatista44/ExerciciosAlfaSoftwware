<?php

date_default_timezone_set('America/Sao_Paulo');

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContatoController;
use App\Http\Controllers\Home;
use App\Http\Controllers\PessoaController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('login');
});


Route::GET('login', [AuthController::class, 'login'])->name('login');
Route::post('login', [AuthController::class, 'authenticate']);


Route::get('NewContact', [ContatoController::class, 'create'])->name('NewContact');
Route::post('logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware(['auth:web'])->group(function () {
    Route::get('/home', [Home::class, 'Index'])->name('home');

    Route::post('/CreatePessoas', [PessoaController::class, 'store'])->name('pessoas.store');
    Route::get('/listarPessoas', [PessoaController::class, 'index'])->name('listarPessoas');
    Route::get('/listarPessoasDetalhada', [PessoaController::class, 'indexDetalhe'])->name('listarPessoasDetalhada');
    Route::post('/deletePerson', [PessoaController::class, 'destroy'])->name('detetar.pessoa');
   


});



