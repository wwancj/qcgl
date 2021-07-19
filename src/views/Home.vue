<template>
  <div class="home">
    <div class="title">汽车管理</div>

    <div class="main">
      <div class="left">
        <div class="lefttop">智慧汽车</div>
        <div class="jg"></div>
        <div class="xx">
          <router-link to="/car">汽车管理</router-link>
        </div>
        <div class="xx">司机管理</div>
      </div>

      <div class="contain">
        <div class="mnav">
          <div id="daohang">
            <div>数据可视化</div>
            <div>综合查询</div>
            <div>应急处理</div>
            <div>数据采集</div>
            <div>服务管理</div>
            <div>专题展示</div>
          </div>

          <div id="user"> 
                  <div>
                    <div> user name</div>
                    <div>user Permissions</div>
                  </div>
                  <div>
                       <div id="userimg">
                  <img src="https://tse1-mm.cn.bing.net/th/id/R-C.fdba334358b173d8c6c100d34f1751dd?rik=taHsKmbNmB1mfw&riu=http%3a%2f%2fwww.gx8899.com%2fuploads%2fallimg%2f2018011510%2fgnlx20u02fw.jpg&ehk=kB2cZziaNO%2bVYtrs8GX%2fxpMbsKpF6obS1pRkB8sB%2fQM%3d&risl=&pid=ImgRaw" alt="" srcset="">
                       </div>
                  </div>
          </div>

        </div>


        <div id="view">
          <router-view>

          </router-view>
        </div>
      </div>
    </div>
    <!-- <button @click="ser">
      点我
    </button> -->
  </div>
</template>

<script>
import "../assets/imag/download.jpg";
import Car from './car.vue'
export default {
  name: "Home",
  components: {},
  methods: {
    ser() {
      this.$axios.get("/car/selectAll").then((data) => {
        console.log(data);
      });
    },
  },
};
</script>



<style  scoped>
* {
  padding: 0;
  margin: 0;
}
.home {
  overflow: hidden;
  background-color: rgb(102, 75, 167);
  width: 100%;
  height: 100vh;
}
.title {
  font-family: fangkuai;
  width: 80vw;
  /* margin-top: 40px ; */
  color: rgb(136, 115, 186);
  font-size: 50px;
  margin: 40px auto;
}
.main {
  overflow: hidden;
  width: 80vw;
  height: 80vh;
  background: saddlebrown;
  margin: 0px auto;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 6fr;
}

.left {
  /* width: 15%; */
  height: 100%;
  background: rgb(26, 32, 52);
}
.lefttop {
  width: 100%;
  height: 10%;
  background: rgb(43, 52, 80);
  color: rgb(238, 238, 241);
  font-size: 25px;
  line-height: 60px;
  text-align: center;
}
.jg {
  width: 100%;
  height: 20px;
  background: rgb(26, 32, 52);
  /* background: chartreuse; */
}
.xx {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: rgb(186, 189, 197);
}
.xx:hover {
  background: rgb(43, 52, 80);
}
.contain {
  background-image: url(../assets/imag/download.jpg);
  background-size: cover;
}
#daohang {
  display: flex;
  height: 80px;
  /* line-height: 80px; */
  text-align: center;
  width: 80%;
  align-items: center;
  justify-content: space-around;
  
  
}

#daohang>div{
  height: 30px;
  line-height: 30px;
  width: 126px;
  /* background: chocolate; */
  border-radius: 10px ;
  border: rgb(255,255,255) 2px solid;
 
  color: azure;
}
#daohang>div:hover{
   opacity: 0.5;
}
.mnav{
  display: flex;
}
#user{
  width: 270px;
  /* background: chocolate; */
   display: grid;
   grid-template-columns: 5fr 3fr;
}
#user>div:nth-child(1){
  text-align: right;
  margin-top: 20px;
  /* background-color: chartreuse; */
}
#userimg{
  border-radius: 50%;
  margin: 10px 10px;
  width: 60px;
  height: 60px;
  /* background: crimson; */
  overflow: hidden;
}
#userimg>img{
    width: 60px;
  height: 60px;
}


#view{
  border-radius: 20px;
  width: 97%;
  margin: 0 auto;
  height: 95%;
  background:rgb(253,253,254);
}
</style>