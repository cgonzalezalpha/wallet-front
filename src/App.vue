<script setup lang="ts">
import { ref } from 'vue'
import HomeView from './views/HomeView.vue'

const active = ref('home')

function onMenuSelect(key: string) {
  active.value = key
}
</script>

<template>
  <el-container class="min-h-screen">
    <el-header class="admin-topbar !h-auto !p-0">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <div class="flex items-center gap-3">
          <span
            class="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_10px_35px_rgba(59,130,246,0.25)]"
          />
          <div class="leading-tight">
            <div class="text-sm font-semibold text-white">Alpha Wallet</div>
            <div class="text-xs text-white/55">Admin</div>
          </div>
        </div>

        <div class="flex-1" />

        <el-menu
          mode="horizontal"
          :ellipsis="false"
          :default-active="active"
          background-color="transparent"
          text-color="rgba(255,255,255,0.72)"
          active-text-color="#60a5fa"
          class="admin-menu"
          @select="onMenuSelect"
        >
          <el-menu-item index="home">Home</el-menu-item>
          <el-menu-item index="reportes" disabled>Reportes</el-menu-item>
          <el-menu-item index="config" disabled>Config</el-menu-item>
        </el-menu>

        <div class="hidden items-center gap-2 sm:flex">
          <el-tag type="info" effect="dark">Demo</el-tag>
        </div>
      </div>
    </el-header>

    <el-main class="!p-0">
      <div class="mx-auto max-w-6xl px-4 py-5">
        <HomeView />
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.admin-topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 14, 28, 0.72);
  backdrop-filter: blur(12px);
}

.admin-menu {
  border-bottom: 0;
}
</style>
