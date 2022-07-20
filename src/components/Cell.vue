<template>
  <div @click="onCellClick" class="cell">
    <span v-if="value !== ''">{{ value }}</span>
  </div>
</template>

<script>
export default {
  setup() {},
  props: {
    value: String,
  },
  methods: {

    onCellClick() {
      console.log('qui')
      this.$emit('click')
    }
  },
};
</script>

<style>
.cell {
  width: 128px;
  height: 128px;
  border: 2px solid rgb(75, 75, 75);
  font-size: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
</style>
