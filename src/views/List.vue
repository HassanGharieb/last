<template>
  <div class="list">
    <blog />
    <h1>name: {{ calc.name }}</h1>
    <h1>dev:{{ calc.dev.name }}</h1>
    <h1>grad:{{ calc.gra.name }}</h1>
    
    <button type="submit" value="submit" @click="edit" class="btn btn-primary">
      Edit
    </button>
  </div>
</template>
<script>
import blog from "@/components/blog.vue"
export default {
    name: "List",
   components: {
    blog
  },
   
  data: function () {
   
    return {
      say: this.$route.params.class,
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
      return this.$route.params.class;
    },
  },
  
};
</script>