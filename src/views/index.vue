<template>
  <div>
    <div class="container">
      <div @click="navigateToApply()">
        <button>我的测试任务审批</button>
      </div>
      <div @click="switchAccount()">
        <button>切换账号</button>
      </div>
      <van-collapse v-model="activeNames">
        <van-collapse-item
          v-for="(item,key) in list"
		  :key="key"
          :title="item.name"
          :name="item.key">
          <van-row>      
            <van-col v-for="template in item.testTemplateList" :key="template.id" span="6">
              <button style="width: 200px; height: 50px; background-color: orange;" @click="apply(template.id)">{{template.name}}</button>
            </van-col>
          </van-row>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>

</template>

<script>
import api from '@/api/test'
export default {
  name: "process",

  data() {
    return {
      list: [],
      activeNames: [0,1,2,3,4]
    };
  },

  created(){
    this.fetchData();
  },

  methods: {
    switchAccount(){
      this.$router.push({ path: '/test/'});
    },
      navigateToApply() {
       this.$router.push({ path: '/list/'});
     },
    fetchData() {
      api.findProcessType().then(response => {
        console.log(response.data);
        this.list = response.data;
        //全部展开
        this.activeNames = []
        this.list.forEach((item,index) => {
          this.activeNames.push(index)
        })
      });
    },

    apply(id) {
      this.$router.push({ path: '/apply/'+id })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 50px;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }
    span {
      font-size: 12px;
      padding: 8px 4px;
      text-align: center;
    }
  }
}
.container {
  padding: 20px 16px;
  background-color: #f5f7f9;
  min-height: 100vh;

  .van-nav-bar__content {
    background-color: #007bff; /* 更改导航栏背景色 */
    color: white; /* 文本颜色 */
  }

  button {
    width: 100%;
    padding: 10px 0;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
    background-color: #007bff; /* 统一按钮背景色 */
    color: white; /* 按钮文本颜色 */
    font-size: 14px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0056b3; /* 按钮悬停时的背景色 */
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 8px;
    }

    span {
      font-size: 14px;
      text-align: center;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
