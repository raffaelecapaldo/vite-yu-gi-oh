<template>
    <header>
      
       <div class="container-fluid py-2 mb-3">
        <div class="logo d-flex align-items-center">
         <img src="/img/logo.webp" alt="YuGiOh Logo">
         <h1 class="fs-3 ms-3">Yu-Gi-Oh API</h1>
        </div>
       </div>
    </header>
   </template>
   
   <script>
   
     export default {
      name:'AppHeader',

       
     }
   </script>
   
   <style lang="scss" scoped>
   .logo {
    img {
      width:200px;
    }
   }
   </style>