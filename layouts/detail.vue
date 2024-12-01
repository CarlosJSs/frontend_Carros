<template>
  <v-app>
    <header class="header">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <div class="header-container">
        <!-- Logo -->
        <div class="logo">
          <span>MORENT</span>
        </div>

        <!-- Barra de búsqueda -->
        <div class="search-bar">
          <i class="fas fa-search" /> <!-- Ícono de lupa -->
          <input type="text" placeholder="Search something here">
          <i class="fas fa-sliders-h" /> <!-- Ícono de configuración -->
        </div>

        <!-- Iconos a la derecha -->
        <div class="header-icons">
          <div class="icon">
            <i class="fas fa-heart" />
          </div>
          <div class="icon">
            <i class="fas fa-bell" />
            <span class="notification-dot" /> <!-- Punto de notificación -->
          </div>
          <div class="icon">
            <i class="fas fa-cog" />
          </div>
          <div class="icon user-avatar">
            <i class="fas fa-user-circle" />
          </div>
        </div>
      </div>
    </header>
    <main>
      <Nuxt />
    </main>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
/* Estilo general */
.header {
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  padding: 10px 3.2em;
  display: flex;
  justify-content: center;
  height: 7em;
  display: flex;
  align-items: center;
  padding-bottom: 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1.2em;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #1976d2;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 8px 15px;
  width: 400px;
}

.search-bar input {
  border: none;
  outline: none;
  margin-left: 10px;
  flex: 1;
  font-size: 14px;
}

.search-bar i {
  color: #888;
}

.header-icons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  color: #555;
  font-size: 18px;
  position: relative;
  cursor: pointer;
}

.icon:hover {
  background-color: #e0e0e0;
}

.notification-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
}

.user-avatar i {
  font-size: 28px;
}
</style>
