<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3>下面这个组件的总人数为：{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    ...mapState(['sum','school','subject','personList']),


    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    ...mapGetters(['bigSum'])
  },
  methods: {
    // 亲自写的
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    // 用mapMutations 生产  若需要参数，则在模板那就应该进行传参
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
  },
  mounted() {
    console.log("Count", this);
    // const x = mapState({sum:'sum',school:'school',subject:'subject'})
  },
};
</script>
<style scoped>
button {
  margin-left: 15px;
}
</style>
