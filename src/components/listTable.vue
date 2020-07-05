<template>
<table class="table mt-4">
      <thead>
        <tr>
          <th width="120">ID</th>
          <th width="120">ISBN</th>
          <th width="100">種別</th>
          <th　width="120">書籍名</th>
          <th width="100">出版社名</th>
          <th width="80">出版年月</th>
          <th width="120">著者名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books" :key="item.id">
          <td> {{ item.id }} </td>
          <td> {{ item.isbn13 }} </td>
          <td> {{ item.種別 }} </td>
          <td class="text-centered">
            {{ item.書籍名}}
          </td>
          <td class="text-centered">
            {{ item.出版社名}}
          </td>
           <td class="text-centered">
            {{ item.出版年月}}
          </td>
          <td class="text-centered">
            {{ item.著者名}}
          </td>
        </tr>
      </tbody>
    </table>
</template>
<script>
export default {
  props:{books:Array},
  methods:{
   
  }
}
</script>