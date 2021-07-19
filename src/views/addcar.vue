<template>
  <div>
    <button @click="push">发布</button>
     <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">

    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
name:"Addcar",

    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      push(){
        this.$axios.post('/car/insert'
        ,{params:{  
           "carColoer":"黑色",
  "carEngineType":"v8",
  // "carId": 2,
  "carManufactureDate":"string",
  "carNumber":"赣a178845",
  "carStructure":"自动挡",
  "carTripNumber":"8888",
  "carYearlyCheckDate":"2020/2/29",
  "horseNumber":"111",
  "unitId":11

        }}
        ).then((data)=>{
console.log(data);
        })
      }
    }

}
</script>

<style>

</style>