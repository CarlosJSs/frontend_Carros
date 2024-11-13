<template>
  <header class="header">
    <div class="logo">MORENT</div>

    <!-- Barra de búsqueda con icono de enlace -->
    <div class="search-bar">
      <input type="text" placeholder="Search something here" />
      <i class="fas fa-link"></i> <!-- Ícono de enlace -->
    </div>
    <!-- Iconos en el lado derecho -->
    <div class="header-icons">
      <i class="fas fa-heart"></i> <!-- Ícono de corazón -->
      <i class="fas fa-bell"></i> <!-- Ícono de notificación -->
      <i class="fas fa-cog"></i> <!-- Ícono de configuración -->
      <i class="fas fa-user-circle"></i> <!-- Ícono de usuario -->
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  width: 300px;
}
.search-bar input {
  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
}
.search-bar i {
  color: #888;
  padding-left: 5px;
}
.header-icons i {
  margin-left: 15px;
  font-size: 20px;
  color: #555;
  cursor: pointer;
}
</style>
