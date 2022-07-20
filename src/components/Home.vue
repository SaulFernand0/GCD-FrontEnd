<template>
<div class= "h-screen w-screen flex">
  <aside class="relative bg-sidebar w-2/12 hidden sm:block shadow-xl">
    <div class="p-6">
      <router-link
        to="/list"
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >MENU</router-link
      >
      <button
        class="
          w-full
          bg-white
          cta-btn
          font-semibold
          py-2
          mt-5
          rounded-br-lg rounded-bl-lg rounded-tr-lg
          shadow-lg
          hover:shadow-xl
          hover:bg-gray-300
          flex
          items-center
          justify-center
        "
      >
      <router-link
        to="/upload"
      >
      <i class="fas fa-plus mr-3"></i>
        Nuevo Archivo
      </router-link>
      </button>
    </div>

    <nav class="text-white text-base font-semibold pt-3">
      <router-link
        to="/list"
        class="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
      >
        <i class="fas fa-tachometer-alt mr-3"></i>
        Inicio
      </router-link>

      <router-link
        to="/upload"
        class="
          flex
          items-center
          text-white
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-sticky-note mr-3"></i>
        Subir Archivo
      </router-link>

      <router-link
        to="/email"
        class="
          flex
          items-center
          text-white
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-table mr-3"></i>
        Enviar Correo
      </router-link>

      <router-link
        to="/login"
        class="
          flex
          items-center
          text-white
          opacity-75
          hover:opacity-100
          py-4
          pl-6
          nav-item
        "
      >
        <i class="fas fa-table mr-3"></i>
        Salir
      </router-link>
    </nav>
  </aside>
  <div class="h-full w-10/12"><router-view></router-view></div>
  </div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Karla:400,700&display=swap");
.font-family-karla {
  font-family: karla;
}
.bg-sidebar {
  background: #7b1038;
}
.cta-btn {
  color: #7b1038;
}
.upgrade-btn {
  background: #440c21;
}

.active-nav-link {
  background: #440c21;
}
.nav-item:hover {
  background: #440c21;
}

</style>