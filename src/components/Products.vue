<template>
  <div　class="container">　
    <h1　class="mt-4">書籍一覧</h1>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal">追加書籍</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">ISBN</th>
          <th width="100">種別</th>
          <th　width="120">書籍名</th>
          <th width="100">書籍フリガナ</th>
          <th width="80">出版年月</th>
          <th width="120">著者名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td> {{ item.isbn13 }} </td>
          <td> {{ item.種別 }} </td>
          <td class="text-centered">
            {{ item.書籍名}}}
          </td>
          <td class="text-centered">
            {{ item.書籍フリガナ}}
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
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title"></label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                      v-model="tempProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                      v-model="tempProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                      v-model="tempProduct.price">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                    v-model="tempProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery';

  export default {
    data() {
      return {
        products: [],
        tempProduct: {
        }
      };
    },
    methods: {
      getbooks(){
        const api = "http://127.0.0.1:3000/api/v1/books";
        const vm = this;
        this.$http.get(api).then((response) => {
          console.log(response);
          vm.products = response.data
        });
      },
      openModal(){
        $('#productModal').modal('show')
      },
      updateProduct(){
        const api = "";
        const vm = this;
        this.$http.post(api, {
          "data": vm.tempProduct
        }).then((response) => {
          console.log(response.data);
        });
      },
    },
    created(){
      this.getbooks();
    }
  }

</script>
