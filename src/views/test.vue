<template>
  <div>
    测试用

    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" placeholder="Enter your username">
    </div>
    <button @click="zhangsan"></button>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" placeholder="Enter your password">
    </div>

    <button @click="handleLogin">Login</button>
  </div>
  
</template>

<script>
export default {
  name: "Test",

  data() {
    return {
      token: ''
    };
  },

  created(){
    this.token = window.localStorage.getItem('token')
  },

  methods: {
    
    handleLogin(){
      debugger
      if(this.username == "admin"){
        this.admin();
      }
      else if(this.username == "zhangsan"){
        this.zhangsan();
      }
      else{
        this.lisi();
      }
    },
    admin() {
      window.localStorage.setItem('token', '');
      let token = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAA_6tWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNDe0MDSxNDa31FEqLU4t8kwBikGYeYm5qUAtiSm5mXlKtQCoYAipQgAAAA.JMmb-JFSP25CAGeeVjoohzB5pBGrT19r5tv-4wmPK2GIPweSpPH4TQm4bNFsZpyYlG-fy0ExrE3r0Coi7FCUEA'
      window.localStorage.setItem('token', token);
      this.token = window.localStorage.getItem('token')
    },

    zhangsan() {
      window.localStorage.setItem('token', '');
      let token = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAA_6tWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNDc0tzQxNzIz1lEqLU4t8kxRsoIy8xJzU4FaqjIS89KLE_OUagF9_37XRQAAAA.qQi02bqVHptIv7nVYi_zyRs8wA-244dYle7h4t70AH9GJtCn4HLvbJIx3x6X399ZIpJ7eQegod01TGTCzVQGMA'
      window.localStorage.setItem('token', token);
      this.token = window.localStorage.getItem('token')
    },

    lisi() {
      window.localStorage.setItem('token', '');
      let token = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAA_6tWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNDe0MDSxNDY20VEqLU4t8kxRsoIy8xJzU4FacjKLM5VqATD3M_BBAAAA.vHsMGV9m7Flsw1rBNm-oW1NXvEC68SDh7FpyWYZqiF8mMFoo7ENgDrU2I6CE2KgaQkpYyKcvD8J-bgLexSptzQ'
      window.localStorage.setItem('token', token);
      this.token = window.localStorage.getItem('token')
    }
  }
}
</script>
