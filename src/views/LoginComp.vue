<template>
  <body>
    <div class="container">
      <h1 style="margin-bottom: 15px">Login</h1>
      <input type="E-mail" placeholder="E-mail" />
      <br /><br />
      <input type="password" placeholder="Senha" />
      <br /><br />
      <section :to="{ name: 'login' }">
        <a href="/" class="button" id="signup">Entrar</a>
      </section>
    </div>
  </body>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #008cff;
}
.container {
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 80px;
  border-radius: 15px;
  color: #fff;
}
input {
  padding: 15px;
  border: none;
  outline: none;
  font-size: 15px;
}
button {
  background-color: dodgerblue;
  border: none;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  color: white;
  font-size: 15px;
}
button:hover {
  background-color: deepskyblue;
  cursor: pointer;
}
</style>
