<template>
  <th class="app-table-head">
    <div class="app-table-head__inner">
      <slot></slot>
    </div>
  </th>
</template>

<script setup></script>

<style scoped lang="scss">
.app-table-head {
  position: sticky;
  top: 0;
  background: $white;
  &__inner {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.left {
    & .app-table-head__inner {
      justify-content: flex-end;
    }
  }
}
</style>
<!--<table>-->
<!--<tr>-->
<!--  <th>Company</th>-->
<!--  <th>Contact</th>-->
<!--  <th>Country</th>-->
<!--</tr>-->
<!--<tr>-->
<!--  <td>Alfreds Futterkiste</td>-->
<!--  <td>Maria Anders</td>-->
<!--  <td>Germany</td>-->
<!--</tr>-->
<!--<tr>-->
<!--  <td>Centro comercial Moctezuma</td>-->
<!--  <td>Francisco Chang</td>-->
<!--  <td>Mexico</td>-->
<!--</tr>-->
<!--</table>-->
