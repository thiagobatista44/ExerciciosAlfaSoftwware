<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Home extends Controller
{
    public function Index(){

   

        return view ('home');
    }

    public function Count(){

        $pessoas = DB::table('pessoas as p')
        ->leftJoin('contas as c' , 'c.idPessoa' ,'p.id')
        ->get();

        $contas = DB::table('pessoas as p')
        ->leftJoin('contas as c' , 'c.idPessoa' ,'p.id')
        ->whereNotNull('c.idPessoa')
        ->get();
   
           return view ('Count', compact('pessoas' , 'contas'));
       }

       public function Movement(){

        $pessoas =  DB::table('pessoas as p')
        ->leftJoin('contas as c' , 'c.idPessoa' ,'p.id')
        ->whereNotNull('c.idPessoa')
        ->distinct()
        ->get(['p.cpf', 'p.nome']);

      

        $contas = DB::table('pessoas as p')
        ->leftJoin('contas as c' , 'c.idPessoa' ,'p.id')
        ->whereNotNull('c.idPessoa')
        ->get();

      
           return view ('Movement', compact('pessoas' , 'contas'));
       }
    
}
