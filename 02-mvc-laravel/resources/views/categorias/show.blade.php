@extends('layouts.app')

@section('titulo', $categoria->nome)

@section('conteudo')

    <span class="badge">Categoria</span>

    <h1>{{ $categoria->nome }}</h1>

    <p class="sub">
        {{ $categoria->descricao }}
    </p>

    <h2>Produtos</h2>

    <div class="grid">

        @foreach ($produtos as $produto)

            <a class="card" href="/produtos/{{ $produto->id }}">

                <div class="emoji">
                    {{ $produto->emoji }}
                </div>

                <span class="cat">
                    {{ $produto->categoria }}
                </span>

                <p class="nome">
                    {{ $produto->nome }}
                </p>

                <p class="preco">
                    R$ {{ number_format($produto->preco, 2, ',', '.') }}
                </p>

            </a>

        @endforeach

    </div>

@endsection