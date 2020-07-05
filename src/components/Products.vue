<template>
  <div　class="container">　
    <h1　class="mt-4">書籍一覧</h1>
    <div class="text-right mt-4 mb-4">
      <button class="btn btn-primary" @click="openModal">追加書籍</button>
    </div>
     <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="検索:ISBN" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="bookModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">書籍追加</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-8">
                <input type="hidden" v-bind:value="tempbook.id=lastId">
                <div class="form-group">
                  <input type="date" class="form-control" id="title" placeholder="入力日" v-model="tempbook.入力日">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="category" placeholder="書籍名"
                      v-model="tempbook.書籍名">
                </div>
                  <div class="form-group col-md-6">
                    <input type="unit" class="form-control" id="unit" placeholder="洋書" v-model="tempbook.洋書">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input type="unit" class="form-control" id="origin_price" placeholder="種別"
                      v-model="tempbook.種別">
                  </div>
                  <div class="form-group col-md-6">
                    <input type="unit" class="form-control" id="price" placeholder="分類内通番"
                      v-model="tempbook.分類内通番">
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" id="description" placeholder="寄贈"
                    v-model="tempbook.寄贈">
                </div>
              <hr>
                <div class="form-group">
                  <input type="text" class="form-control" id="content" placeholder="ラベル出力済フラグ"
                    v-model="tempbook.ラベル出力済フラグ">
                </div>
                 <div class="form-group">
                  <input type="text" class="form-control" id="content" placeholder="購入価格"
                    v-model="tempbook.購入価格">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
            <button type="button" class="btn btn-primary" @click="createBook">追加</button>
          </div>
        </div>
      </div>
    </div>
    <!-- listTable -->
    <listTable :books="books" />
  </div>

</template>

<script>
import $ from "jquery";
import listTable from "./listTable"

export default {
  components:{
    listTable
  },
  data() {
    return {
      books: [],
      lastId: "",
      tempbook: {},
      sendBook: [],
    };
  },
  methods: {
    getbooks() {
      const api = "http://127.0.0.1:3000/api/v1/books";
      const vm = this;
      this.$http.get(api).then(response => {
        console.log(response);
        vm.books = response.data;
        vm.lastId = response.data[response.data.length - 1].id + 1;
      });
    },
    openModal() {
      $("#bookModal").modal("show");
    },
    createBook() {
      const api = "http://127.0.0.1:3000/api/v1/books";
      const vm = this;
      vm.sendBook.push(vm.tempbook);
      this.$http
        .post(
          api,
          {
            data: vm.tempbook,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "SUCCESS") {
            $("#bookModal").modal("toggle");
            alert("追加成功");
          } else {
            alert("追加失敗");
          }
        });
    },
  },
  created() {
    this.getbooks();
  },
};
</script>
