     <template>
  <div class="hello">
   <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#BIODATA">Biodata</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Cerita Singkat">Cerita Singkat</a>
      </li>
    </ul>
  </div>
</nav>

<div id="Biodata" class="container-fluid bg-success text-white" style="padding:100px 20px;">
  <h1>Biodata</h1>
  <p>Nama                   : Sherdian Djunaidi</p>
  <p>Tempat, Tanggal Lahir  : Palembang 12 Maret 2003</p>
  <p>Hobby                  : Main Game, Olahraga, Nonton</p>
  <p>Alamat                 : Jl Tembok Baru No 423</p>
  <p>Agama                  : Buddha</p>
  <p>Main hero              :Luffy</p>
 <div class="container mt-3">
  <h2>One Piece</h2>          
  <img src="dian.jpg" class="rounded" width="100" height="70"> 
</div>
</div>

<div id="Cerita Singkat" class="container-fluid bg-warning" style="padding:100px 20px;">
  <h1>Cerita Singkat</h1>
  <p> Halo Nama Saya Sherdian Saya Mengambil Jurusan Teknik informatika Di Universitas MDP Palembang Dan Saya Sekarang Sudah Semester 3</p>
  
  
</div>
 
</body>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>