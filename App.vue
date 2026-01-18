<script setup>
import { Badge, Button, Card, Avatar, Input } from './src'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">🎨 Dood UI</h1>
        <p class="text-xl opacity-90">A set of components and utilities for rapid UI development</p>
        <p class="mt-2 opacity-75">Built with Vue 3 + TailwindCSS</p>
        <div class="mt-6 flex gap-3">
          <Badge variant="success">Rebranded</Badge>
          <Badge variant="info">Framework Intact</Badge>
          <Badge>Ready to Use</Badge>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <!-- Success Card -->
      <Card class="mb-6">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-gray-800">✅ Rebranding Complete</h2>
            <Badge variant="success">Success</Badge>
          </div>
          <p class="text-gray-600 mb-4">
            Successfully rebranded from "Frappe UI" to "Dood UI" while maintaining 100% framework compatibility.
          </p>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="text-sm text-gray-500 mb-1">Previous Name</div>
              <div class="font-semibold text-gray-800">Frappe UI</div>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <div class="text-sm text-purple-600 mb-1">New Name</div>
              <div class="font-semibold text-purple-800">Dood UI</div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Components Demo -->
      <Card class="mb-6">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">🧩 Component Demo</h2>
          
          <div class="space-y-6">
            <!-- Buttons -->
            <div>
              <h3 class="font-semibold mb-3">Buttons</h3>
              <div class="flex gap-3 flex-wrap">
                <Button>Default Button</Button>
                <Button variant="solid">Solid Button</Button>
                <Button variant="subtle">Subtle Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            <!-- Badges -->
            <div>
              <h3 class="font-semibold mb-3">Badges</h3>
              <div class="flex gap-3 flex-wrap">
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            <!-- Input -->
            <div>
              <h3 class="font-semibold mb-3">Input Field</h3>
              <Input type="text" placeholder="Try typing here..." class="max-w-md" />
            </div>

            <!-- Avatars -->
            <div>
              <h3 class="font-semibold mb-3">Avatars</h3>
              <div class="flex gap-3">
                <Avatar label="DA" size="sm" />
                <Avatar label="DU" size="md" />
                <Avatar label="UI" size="lg" />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <!-- Repository Info -->
      <Card class="mb-6">
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">📦 Repository</h2>
          <div class="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            <div class="mb-2"><strong>GitHub:</strong> https://github.com/Meliodas98765/frappe-ui</div>
            <div class="mb-2"><strong>Branch:</strong> dood-rebrand</div>
            <div><strong>Status:</strong> ✅ Tested & Working</div>
          </div>
        </div>
      </Card>

      <!-- Usage -->
      <Card>
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">💻 Usage</h2>
          <p class="text-gray-600 mb-4">Add to your package.json:</p>
          <div class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre><code>{
  "dependencies": {
    "frappe-ui": "github:Meliodas98765/frappe-ui#dood-rebrand"
  }
}</code></pre>
          </div>
        </div>
      </Card>

      <!-- Footer -->
      <div class="text-center mt-12 text-gray-500">
        <p class="font-semibold">Dood UI - Built with ❤️ by Dood Apps</p>
        <p class="text-sm mt-2">Vue 3 • TailwindCSS • Headless UI</p>
      </div>
    </div>
  </div>
</template>
