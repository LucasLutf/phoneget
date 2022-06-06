<template>
  <nav class="navbar">
    <div class="navbar__container">
      <a href="/" id="navbar__logo">PHONEGET</a>
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span> <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a href="/" class="navbar__links" id="home-page">Início</a>
        </li>
        <li class="navbar__item">
          <a href="#about" class="navbar__links" id="about-page">Sobre</a>
        </li>

        <li class="btnlog">
          <section :to="{ name: 'login' }">
            <a href="/login" class="button" id="signup">Entrar</a>
          </section>
        </li>
        <li class="btncad">
          <section :to="{ name: 'login' }">
            <a href="/cadastro" class="button" id="signup">Cadastrar-se</a>
          </section>
        </li>
      </ul>
    </div>
  </nav>

  <div class="hero" id="home">
    <div class="hero__container">
      <h1 class="hero__heading">Compre seu <span>CELULAR!</span></h1>
      <p class="hero__description">Um novo conceito PHONEGET</p>
      <button class="main__btn"><a href="#">COMPRE AGORA</a></button>
    </div>
  </div>

  <div class="main" id="about">
    <div class="main__container">
      <div class="main__img--container">
        <div class="main__img--card">
          <img
            src="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="main__content">
        <h1>Seu celular está ruim?</h1>
        <h2>Temos muitas opções para você</h2>
        <p>Entre em contato para adquirir logo o seu</p>
        <button class="main__btn"><a href="#">PHONEGET</a></button>
      </div>
    </div>
  </div>
</template>

<style>
.btnlog {
  margin-right: 10px;
}
</style>
