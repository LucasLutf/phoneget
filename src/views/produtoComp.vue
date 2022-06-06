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
  <div class="pdt1" style="width: 18rem">
    <img
      src="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png"
      class="img-1"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <br />
  <div class="pdt1 d-flex" style="width: 18rem">
    <img
      src="https://files.tecnoblog.net/wp-content/uploads/2021/09/iphone-13-produto-2-700x700.png"
      class="img-1"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Iphone 13</p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
</template>

<style>
.btnlog {
  margin-right: 10px;
}

.pdt1 {
  padding: 50px;
  margin-left: 100px;
  width: 100px;
}

.img-1 {
  width: 170px;
  padding: 10px;
}

.card-body {
  border-color: black;
}
</style>
