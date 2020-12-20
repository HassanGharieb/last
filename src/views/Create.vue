<template>
  <div class="creat">
    <h1>This is an Create page</h1>
    <form @submit.prevent="validateform">
      <div class="error-list">
        <div class="error" v-for="error in formerrrors" :key="error">
          {{ error }}
        </div>
      </div>

      <label>Name</label>
      <input type="text" v-model="name" />

      <br />
      <label>Dev</label>
      <select v-model="dev" >
        <option
          :value="devision"
          v-for="(devision, index) in devisions"
          :key="index"
        >
          {{ devision.name }}
        </option>
      </select>

      <br />
      <label>Grade</label>
      <select v-model="gra">
        <option :value="grad" v-for="(grad, index) in arr" :key="index">
          {{ grad.name }}
        </option>
      </select>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Create",

  data: function () {
    return {
      devisions: [{id:1,name:"dev1"}, {id:2,name:"dev2"}],
      grade1: [{id:1,name:"a1",devision_id:1},{id:2,name:"a2",devision_id:1},
       {id:3,name:"a3",devision_id:1},
       {id:4,name:"a4",devision_id:2},{id:5,name:"a5",devision_id:2}, {id:6,name:"a6",devision_id:2}],
      arr:[],
      formerrrors: [],
      dev: null,
      gra: null,
      name:null,
    };
  },
   methods:{
    validateform:function(e) {
        this.formerrrors = [];//empty errors
      if(!this.name) {
          this.formerrrors.push("class name can't be empty");
      }
      if(!this.dev) {
          this.formerrrors.push("devisions can't be empty");
      }
      if(!this.gra) {
          this.formerrrors.push("grades can't be empty");
      }
      //no error
      if(!this.formerrrors.length){
     
      var classs = {
       dev: this.dev,
      gra: this.gra,
      name:this.name,
      }
      console.log(classs )
      this.$router.push({name:'List',params:{class:classs}});
      return true;
      }
      

            e.preventDefault();
    },
    
  
  },
 watch:{
   dev(val){
     var dev=val.id;
     this.arr=this.grade1.filter(el =>el.devision_id === dev);
   }
 }
   
     
  
};
</script>
<style scoped lang="scss">
select {
  height: 25px;
  width: 200px;
  margin: 20px 0 0;
  padding: 0;
}
input {
  height: 20px;
  width: 200px;
  margin: 20px 0 0;
  padding: 0;
}
</style>