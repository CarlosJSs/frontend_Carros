<template>
  <div class='dashboard-menu'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Navegación principal -->
    <div class='menu-section'>
      <h4>Main Menu</h4>
      <ul class='menu-list'>
        <li v-for='item in mainMenu' :key='item.name' :class='{ active: item.active }'>
          <i :class='item.icon'></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <!-- Preferencias -->
    <div class='preferences-section'>
      <h4>Preferences</h4>
      <ul class='menu-list'>
        <li v-for='item in preferences' :key='item.name'>
          <i :class='item.icon'></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardMenu',
  data () {
    return {
      mainMenu: [
        { name: 'Dashboard', icon: 'fa-solid fa-house', active: false },
        { name: 'Car Rent', icon: 'fa-solid fa-car', active: false },
        { name: 'Insight', icon: 'fa-solid fa-chart-line', active: false },
        { name: 'Reimburse', icon: 'fa-solid fa-wallet', active: false },
        { name: 'Inbox', icon: 'fa-solid fa-envelope', active: false },
        { name: 'Calendar', icon: 'fa-solid fa-calendar', active: false }
      ],
      preferences: [
        { name: 'Settings', icon: 'fa-solid fa-gear' },
        { name: 'Help & Center', icon: 'fa-regular fa-circle-question' },
        { name: 'Dark Mode', icon: 'fa-solid fa-moon' },
        { name: 'Log Out', icon: 'fa-solid fa-right-from-bracket' }
      ]
    }
  }
}
</script>

<style scoped>
.dashboard-menu {
  width: 250px;
  height: 100vh;
  background-color: #f8f9fb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #ddd;
}

.menu-section,
.preferences-section {
  margin-bottom: 20px;
}

h4 {
  font-size: 14px;
  color: #9a9a9a;
  margin-bottom: 10px;
}

.menu-list {
  list-style: none;
  padding: 0;
}

.menu-list li {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.menu-list li.active,
.menu-list li:hover {
  background-color: #007bff;
  color: #fff;
}

.menu-list li i {
  font-size: 18px;
  margin-right: 10px;
  color: #007bff;
}

.menu-list li.active i,
.menu-list li:hover i {
  color: #fff;
}

.menu-list li span {
  font-size: 16px;
}
</style>
