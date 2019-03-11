<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed"
            width="300"
        >
            <a-icon
                class="trigger"
                style="color:white;fontSize:28px;"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
            />
            <br>
            <div class="logo" >
                <img src="http://www.zhoujizhi.com/static/img/logo.5990b69.png" alt="">
            </div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item
                    key="1"
                >
                    <a-icon type="user" />
                    <span>nav 1啊实打实的</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="upload" />
                    <span>nav 3</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff'}">
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data(){
    return {
        collapsed: true
    }
  }
}
</script>

<style>
.logo img{
    width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#components-layout-demo-custom-trigger{
    min-height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
