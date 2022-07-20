<template>
     <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destinatario
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titulo
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mensaje
                </th>
              </tr>
            </thead>
            
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="e in emails" :key="e">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ e.destinatario }}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ e.titulo }}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{{ e.mensaje }}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button @click="delEmail(e.idcorreo)" class="text-indigo-600 hover:text-indigo-900">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from "../api/client"
export default {
  data:()=>({
    emails:[]
  }),
  mounted(){
    this.getEmail()
  },
  methods:{
    delEmail(id){
      client.delete("/api/email/delete/"+id).then(data=>{
        console.log(data)
        this.getEmail()
      })
    },
    getEmail(){
      client.get("api/email").then(data=>{
      this.emails=data["data"]
      console.log(this.emails) 
    })
    }
    
  }
}
</script>

<style scoped>
    
</style>
