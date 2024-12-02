<template>
  <v-app dark>
    <!-- Header a todo lo ancho -->
    <header class="header">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <div class="logo">
        MORENT
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Search something here">
        <i class="fas fa-link" />
      </div>
      <div class="header-icons">
        <i class="fas fa-heart" />
        <i class="fas fa-bell" />
        <i class="fas fa-cog" />
        <i class="fas fa-user-circle" />
      </div>
    </header>

    <!-- Contenedor principal que incluye el navigation-drawer y el contenido -->
    <div class="main-container">
      <v-navigation-drawer
        permanent
        app
        class="containerMenu"
      >
        <!-- Menú principal -->
        <v-list class="firstList">
          <div class="listTitle">
            MAIN MENU
          </div>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            class="itemOption"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <!-- Opciones en la parte inferior -->
        <v-list class="lastList">
          <v-list-item
            v-for="(item, i) in itemsBottom"
            :key="i"
            :to="item.to"
            router
            exact
            class="itemOption"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Contenido principal -->
      <v-main>
        <v-container class="myContainer">
          <Nuxt />
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home-variant-outline',
          title: 'Dashboard',
          to: '/admin'
        },
        {
          icon: 'mdi-car-outline',
          title: 'Add Car',
          to: '/admin/addCar'
        },
        {
          icon: 'mdi-chart-bar',
          title: 'Insight',
          to: '#'
        },
        {
          icon: 'mdi-wallet-bifold-outline',
          title: 'Reimburse',
          to: '#'
        },
        {
          icon: 'mdi-chat-processing-outline',
          title: 'Inbox',
          to: '#'
        },
        {
          icon: 'mdi-calendar-month-outline',
          title: 'Calendar',
          to: '#'
        }
      ],
      itemsSecond: [
        {
          icon: 'mdi-cog-outline',
          title: 'Settings',
          to: '#'
        },
        {
          icon: 'mdi-alert-circle-outline',
          title: 'Help & Center',
          to: '#'
        },
        {
          icon: 'mdi-briefcase-outline',
          title: 'Dark Mode',
          to: '#'
        }
      ],
      itemsBottom: [
        {
          icon: 'mdi-logout',
          title: 'LogOut',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  font-family: 'Plus Jakarta Sans';
}

.header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.8em;
  font-weight: 600;
  margin-left: 2em;
  color: #3563e9;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 3em;
  padding: .6em 2em;
  color: #3d5278;
  border: solid 1px rgba(195, 212, 233, .4);
  width: 30%;
}

.search-bar input {
  background: transparent;
  outline: none;
  margin-right: 1.2em;
  width: 100%;
}

.header-icons i {
  margin: 0 8px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #3d5278;
}

.main-container {
  display: flex;
  margin-top: 100px;
  height: calc(100vh - 100px) !important;
}

.v-main {
  padding-left: 310px !important;
  background-color: #f6f7f9;
  height: fit-content;
}

.containerMenu {
  width: 310px !important;
  background-color: white;
  margin-top: 100px;
  height: calc(100vh - 100px) !important;
  padding: 1em;
}

.myContainer {
  flex: 1;
  padding: 16px;
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: none !important;
}

.firstList {
  margin-bottom: 3em;
}

.lastList {
  position: absolute;
  bottom: 3vh;
}

.listTitle {
  color: rgba(148, 167, 201, 0.4);
  margin-bottom: 1em;
  font-weight: 600;
  font-size: 0.8em;
}

.itemOption {
  color: #90a3bf !important;
  margin-bottom: 4px;
}

.v-list .v-list-item--active {
  color: white !important;
  border-radius: 14px;
  border: 1px solid;
  background-color: #3563e9;
  font-weight: 400;
}

.v-list .v-list-item--active .v-icon {
  color: white !important;
}

.v-icon {
  color: #90a3bf !important;
}
</style>
