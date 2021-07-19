<template>
<div>
      <div class="a">
    <div v-for="item in car" :key="item.carId">


 <span>
       车的id:{{ item.carId }}
 </span>

 <span style="margin-left:20px">
      类型:{{ item.carEngineType }}
 </span>
 <span  style="margin-left:20px">
 颜色:{{
        item.carColoer
      }}
 </span>
 <span style="margin-left:20px">
     {{ item.carStructure }}
 </span>

 <p></p>
 <span  style="">
        制造时间:{{ item.carManufactureDate }}
 </span>
 <span style="margin-left:40px">
       年检时间：{{ item.carYearlyCheckDate }}
 </span>
 <br>
 <span style="margin-left:20px">
    {{
        item.carNumber
      }}
 </span>
     
  
  汽车编号：{{
        item.carTripNumber
      }}
       horseNumber：{{
        item.horseNumber
      }}
      单位id:{{ item.unitId }}

      <br>
<el-divider content-position="right"></el-divider>
      <div id="b">
         选中 <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>


  <el-button
    plain
    @click="sanchu">
    删除
  </el-button>


      </div>
    </div>

    <!-- <div v-for="item in car" :key="item.carId">
      车的id:{{ item.carId }} 汽车类型：{{ item.carEngineType }} 汽车颜色：{{
        item.carColoer
      }}
      汽车制造时间：{{ item.carManufactureDate }} 车牌号：{{
        item.carNumber
      }}
      汽车结构：{{ item.carStructure }} 汽车编号：{{
        item.carTripNumber
      }}
      汽车年检时间：{{ item.carYearlyCheckDate }} horseNumber：{{
        item.horseNumber
      }}
      单位id:{{ item.unitId }}
    </div>
    <div v-for="item in car" :key="item.carId">
      车的id:{{ item.carId }} 汽车类型：{{ item.carEngineType }} 汽车颜色：{{
        item.carColoer
      }}
      汽车制造时间：{{ item.carManufactureDate }} 车牌号：{{
        item.carNumber
      }}
      汽车结构：{{ item.carStructure }} 汽车编号：{{
        item.carTripNumber
      }}
      汽车年检时间：{{ item.carYearlyCheckDate }} horseNumber：{{
        item.horseNumber
      }}
      单位id:{{ item.unitId }}
    </div> -->

  </div>

  <div id="add">
     <Addcar/>
  </div>
</div>

</template>

<script>
import Addcar from './addcar.vue'
export default {
  name: "Car",
  components: {
      Addcar
  },
  data() {
    return {
      car: [],
      //删除-
       value: true
    };
  },
  methods: {
       sanchu() {

         this.$axios.delete('/car/deleteById',{params:{id:2}}).then((data)=>{console.log(data);})
        // this.$axios({
        //   mounted:"delete",
        //   url:"/car/deleteById",
        //   data:{
        //     id:2
        //   }
        // })
        this.$notify({
          title: '删除成功',
        //   message: '删除成功',
          type: 'success'
        });
      },
  },
  mounted() {
    this.$axios.get("/car/selectAll").then((data) => {
      console.log(data);
      this.car = data.data;
    });
  },
};
</script>

<style scoped>
.a{
  display: flex;
  justify-content: space-around;
  /* grid-template-columns:400px 400px 400px  ; */
  /* column-gap: 30px; */
}
.a>div{
    margin-top: 20px;
    width: 30%;
    background-color: rgb(222,231,243);
     box-shadow:8px 5px 14px #333333;
     border-radius: 10px;
}
p{
    margin: 0;
}
#b{
    width: 100%;
    height: 40px;
    background: rosybrown;
}
#add{
    position: absolute;
    top: 880px;
}
</style>