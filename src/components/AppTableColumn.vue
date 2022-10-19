<template>
  <td class="app-table-column">
    <div class="app-table-column__inner">
      <slot></slot>
    </div>
  </td>
</template>

<script></script>

<style scoped lang="scss">
.app-table-column {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding: 5px 10px;
    height: 45px;
  }
  &.left {
    & .app-table-column__inner {
      justify-content: flex-start;
    }
  }
}
</style>
