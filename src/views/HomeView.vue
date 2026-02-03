<script lang="ts">
export default {
  name: 'HomeView',
}
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { http } from '../services/http'

type ApiState = 'idle' | 'loading' | 'success' | 'error'

interface ApiResponse<T> {
  success: boolean
  data: T
}

type Gender = 'male' | 'female' | 'other' | string

interface PassWebhookRow {
  id: string
  passId: string
  uniqueIdentifier: string
  createdOn: string
  passTemplate: string
  firstName: string
  lastName: string
  email: string
  phone: string
  birthDate: string
  gender: Gender
}

const state = ref<ApiState>('idle')
const errorMessage = ref<string | null>(null)
const items = ref<PassWebhookRow[]>([])

async function load() {
  state.value = 'loading'
  errorMessage.value = null

  try {
    const { data } = await http.get<ApiResponse<PassWebhookRow[]>>('/pass-webhook')
    items.value = data.data
    state.value = 'success'
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Ocurrió un error inesperado'
    errorMessage.value = message
    state.value = 'error'
  }
}

onMounted(load)
</script>

<template>
  <section class="space-y-4">
    <el-card shadow="never" class="border-white/10 bg-white/5">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 class="text-xl font-semibold text-white">Listado</h1>
        <p class="mt-1 text-sm text-white/70">
          Listado consumido desde API con <code class="rounded bg-white/10 px-1 py-0.5">axios</code> +
          TypeScript.
        </p>
      </div>

      <div class="flex items-center gap-2">
        <el-button type="primary" :loading="state === 'loading'" @click="load">
          Recargar
        </el-button>
      </div>
      </div>
    </el-card>

    <el-alert
      v-if="state === 'error'"
      title="Error al cargar el listado"
      :description="errorMessage ?? undefined"
      type="error"
      show-icon
    />

    <el-card shadow="never" class="border-white/10 bg-white/5">
      <el-table
        v-loading="state === 'loading'"
        :data="items"
        stripe
        style="width: 100%"
        empty-text="Sin datos"
      >
        <el-table-column prop="passId" label="Pass ID" width="100" />
        <el-table-column prop="createdOn" label="Creado" width="170" />
        <el-table-column prop="passTemplate" label="Template" min-width="220" />
        <el-table-column label="Nombre" min-width="200">
          <template #default="{ row }">
            {{ row.firstName }} {{ row.lastName }}
          </template>
        </el-table-column>
        <el-table-column prop="email" label="Email" min-width="240" />
        <el-table-column prop="phone" label="Teléfono" width="140" />
        <el-table-column prop="gender" label="Género" width="120" />
      </el-table>
    </el-card>
  </section>
</template>
