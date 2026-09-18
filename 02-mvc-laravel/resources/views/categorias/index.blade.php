@extends('layouts.app')

@section('titulo', 'Categorias')

@section('conteudo')

    <span class="badge">Categorias</span>

    <h1>📂 Categorias</h1>

    <div class="grid">

        @foreach ($categorias as $categoria)

            <a class="card" href="/categorias/{{ $categoria->id }}">

                <p class="nome">
                    {{ $categoria->nome }}
                </p>

                <p>
                    {{ $categoria->descricao }}
                </p>

            </a>

        @endforeach

    </div>

@endsection