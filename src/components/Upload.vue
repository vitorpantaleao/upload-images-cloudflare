<template>
  <h1>{{ title }}</h1>
  <!-- input upload -->
  <input type="file" ref="fileInput" @change="uploadImage" id="fileInput" />
  <!-- image preview -->
  <br> <br><br><br>
  <img :src="image" alt="preview" v-if="image" width="500" />

  <br><br><br>
  <button @click="image = ''" v-if="image">Clear</button>
  <button v-if="image" @click="submit">Submit</button>
</template>

<script setup>
  import { ref } from 'vue'

  defineProps({
    title: String,
  })

  const image = ref('')
  const fileInput = ref(null)

  const uploadImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      image.value = e.target.result
    }
  }

  const submit = () => {
    var myHeaders = new Headers()
    myHeaders.append("Authorization", "Bearer 4SquOG40e5a3n-MF6xwykTdEFp500grc4PIrEcvU")
    myHeaders.append("Cookie", "__cflb=0H28vgHxwvgAQtjUGUFqYFDiSDreGJnUvKcJikQ153s; __cfruid=ee8c8d39dfec7ffcc63bc41588dec86af2e760e3-1683747360")
    myHeaders.append("Allow-Control-Allow-Origin", "*")

    var fileInput = document.getElementById("fileInput")
    var formdata = new FormData()
    formdata.append("file", fileInput.files[0], "/C:/Users/Adm/Documents/git-1.png")

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    }

    fetch("https://api.cloudflare.com/client/v4/accounts/38c6c30b24b28abcd062e1f2dc82e964/images/v1/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }
</script>
