<template>
  <div class="list">
    {{ this.$route.params.classs }}
    <button type="submit" value="submit" @click="edit">Edit</button>
  </div>
</template>
<script>
export default {
    name: "List",
  data: function () {
   
    return {
      say: this.$route.params.classs,
    };
  },
  methods: {
    edit: function () {
      this.calc.id = 1;
      this.$router.push({
        name: "Edit",
        params: { class: this.calc, id: this.calc.id },
      });
    },
  },
  computed: {
    calc: function () {
      return this.$route.params.classs;
    },
  },
};
</script>