<template>
  <div>
    <van-cell title="搜索历史">
      <template #extra>
        <van-icon
          name="delete-o"
          v-if="!isEdit"
          @click="isEdit = true"
        ></van-icon>
        <div v-else>
          <span @click="$store.commit('SET_HISTORIES', [])">删除全部</span
          >&nbsp;
          <span @click="isEdit = false">完成</span>
        </div>
      </template>
    </van-cell>

    <van-cell
      :title="item"
      v-for="item in histories"
      :key="item"
      @click="!isEdit && $emit('SET_HISTORIES', item)"
    >
      <template #extra>
        <van-icon
          name="close"
          v-if="isEdit"
          @click="
            $store.commit(
              'SET_HISTORIES',
              histories.filter((i) => i !== item)
            )
          "
        ></van-icon>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isEdit: false
    }
  },
  computed: {
    ...mapState(['histories'])
  }
}
</script>

<style scoped lang="less">
.van-icon-delete-o {
  margin: auto;
}
</style>
