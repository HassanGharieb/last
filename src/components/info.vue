<template>
  <div class="container">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(validateform)">
        <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
          <!-- <div class="error-list">
        <div class="error" v-for="error in formerrrors" :key="error">
          {{ error }}
        </div>
      </div> -->

          <div class="mb-2 row">
            <label class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" v-model="name" />
              <span>{{ errors[0] }}</span>
            </div>
          </div>
        </ValidationProvider>
        <br />
        <ValidationProvider name="dev" rules="required" v-slot="{ errors }">
          <div class="mb-2 row">
            <label class="col-sm-2 col-form-label">Dev</label>
            <div class="col-sm-10">
              <select v-model="dev">
                <option
                  :value="devision"
                  v-for="(devision, index) in devisions"
                  :key="index"
                >
                  {{ devision.name }}
                </option>
              </select>
              <span>{{ errors[0] }}</span>
            </div>
          </div>
        </ValidationProvider>
        <br />
        <ValidationProvider name="gra" rules="required" v-slot="{ errors }">
          <div class="mb-2 row">
            <label class="col-sm-2 col-form-label">Grade</label>
            <div class="col-sm-10">
              <select v-model="gra">
                <option :value="grad" v-for="(grad, index) in arr" :key="index">
                  {{ grad.name }}
                </option>
              </select>
              <span>{{ errors[0] }}</span>
            </div>
          </div>
        </ValidationProvider>
        <br />
        <div style="float: right">
          <input type="submit" value="Submit" class="btn btn-primary" />
        </div>
        <div style="flot: left">
          <button @click="back" class="btn btn-primary">Cancel</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "Create",

  data: function () {
    return {
      devisions: [
        { id: 1, name: "dev1" },
        { id: 2, name: "dev2" },
      ],
      grade1: [
        { id: 1, name: "a1", devision_id: 1 },
        { id: 2, name: "a2", devision_id: 1 },
        { id: 3, name: "a3", devision_id: 1 },
        { id: 4, name: "a4", devision_id: 2 },
        { id: 5, name: "a5", devision_id: 2 },
        { id: 6, name: "a6", devision_id: 2 },
      ],
      arr: [],
      formerrrors: [],
      dev: null,
      gra: null,
      name: null,
    };
  },
  methods: {
    validateform: function (e) {
      this.formerrrors = []; //empty errors
      /* if (!this.name) {
        this.formerrrors.push("class name can't be empty");
      }
      if (!this.dev) {
        this.formerrrors.push("devisions can't be empty");
      }
      if (!this.gra) {
        this.formerrrors.push("grades can't be empty");
      } */
      //no error
      if (!this.formerrrors.length) {
        var classs = {
          dev: this.dev,
          gra: this.gra,
          name: this.name,
        };
        console.log(classs);
        this.$router.push({ name: "List", params: { class: classs } });
        return true;
      }

      e.preventDefault();
    },
    back: function () {
      this.$router.push({ name: "List" });
    },
    created() {
      // const id = this.$route.params.id;
      const classs = this.$route.params.class;
      this.name = classs.name;
      this.dev = classs.dev;
      this.gra = classs.gra;
    },
  },
  watch: {
    dev(val) {
      var dev = val.id;
      this.arr = this.grade1.filter((el) => el.devision_id === dev);
    },
  },
};
</script>
<style scoped lang="scss">
select {
  height: 25px;
  width: 100%;
  margin: 20px 0 0;
  padding: 0;
}
input {
  height: 25px;
  width: 100%;
  margin: 20px 0 0;
  padding: 0;
}
form {
  background-color: #e6d5d5;
  margin: 50px auto;
  font-family: Raleway;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}
label {
  color: black;
  text-align: left;
  margin: 20px 0 0;
  padding: 0;
}
span {
  color: red;
  text-align: left;
}
button {
  height: 25px;
  width: 50px;
  margin: 20px 0 0;
  padding: 0;
}
</style>