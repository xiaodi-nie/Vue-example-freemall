<template>
  <div>
      <nav-header></nav-header>
    <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">Home</a>
        <span>Address</span>
      </nav>
    </div>
  </div>
  <!-- confirm address -->
  <div class="checkout-page">
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path class="path1"
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z">
          </path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1"
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z">
          </path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path class="path1"
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z">
          </path>
          <path class="path2"
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z">
          </path>
          <path class="path3"
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z">
          </path>
          <path class="path4"
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z">
          </path>
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="checkout-addr">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>Check Out</span></h2>
        </div>
        <!-- process step -->
        <div class="check-step">
          <ul>
            <li class="cur">Confirm Address</li>
            <li>Order Summary</li>
            <li>Payment</li>
            <li>Confirm Order</li>
          </ul>
        </div>
  
        <!-- address list -->
        <div class="page-title-normal checkout-title">
          <h2><span>Shipping Address</span></h2>
        </div>
        <div class="addr-list-wrap">
          <div class="addr-list">
            <ul>
              <li  v-bind:class="{'check':checkedIndex == index}" v-for="(item,index) in addressFilter" :key="item.addressId" @click="checkedIndex = index">
                <dl>
                  <dt>{{item.userName}}</dt>
                  <dd class="address">{{item.streetName}}</dd>
                  <dd class="tel">{{item.tel}}</dd>
                </dl>
                <div class="addr-opration addr-del">
                  <!-- Delete Address -->
                  <a href="javascript:;" class="addr-del-btn" @click="delAddressConfirm(item.addressId)">
                    <svg class="icon icon-del">
                      <use xlink:href="#icon-del"></use>
                    </svg>
                  </a>
                </div>
                <div class="addr-opration addr-set-default">
                  <a href="javascript:;" class="addr-set-default-btn" @click="setDefault(item.addressId)" v-if="!item.isDefault"><i>Set as Default</i></a>
                </div>
                <br>
                <div class="addr-opration addr-default" v-if="item.isDefault">Default Address</div>
              </li>
  
              <li class="addr-new">
                <div class="add-new-inner">
                  <i class="icon-add">
                    <svg class="icon icon-add">
                      <use xlink:href="#icon-add"></use>
                    </svg>
                  </i>
                  <p>Add New Address</p>
                </div>
              </li>
            </ul>
          </div>
  
          <div class="shipping-addr-more">
            <a class="addr-more-btn up-down-btn" href="javascript:;" @click="expand" v-bind:class="{'open':limit>3}">
              {{listControl}}
              <i class="i-up-down">
                <i class="i-up-down-l"></i>
                <i class="i-up-down-r"></i>
              </i>
            </a>
          </div>
        </div>
  
        <!-- shipping method-->
        <div class="page-title-normal checkout-title">
          <h2><span>Shipping Method</span></h2>
        </div>
        <div class="shipping-method-wrap">
          <div class="shipping-method">
            <ul>
              <li class="check">
                <div class="name">Standard Shipping</div>
                <div class="price">Free Shipping</div>
                <div class="shipping-tips">
                  <p>Once shipped, item(s) should arrive within 7 business days.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="next-btn-wrap">
          <a class="btn btn--m btn--red" href="javascript:;" @click="next">Next</a>
        </div>
      </div>
    </div>
  </div>
  <modal v-bind:mdShow="modalConfirm" @close="modalConfirm=false">
      <template v-slot:message>
          <p>Are you sure you want to check out?</p>
      </template>
      
      <template v-slot:btnGroup>
          <a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm=false">Cancel</a>
      </template>
      
  </modal>
  <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from './../components/Header.vue'
import NavFooter from './../components/Footer.vue'
import Modal from './../components/Modal.vue'
export default {
  name: 'addr',//don't use 'address' as name as it is reserved
  data(){
      return {
        checkedIndex:0,
        addressList:[],
        limit:3,
        listControl:'More',
        modalConfirm:false
      }
  },
  components:{
      NavHeader,
      NavFooter,
      Modal
  },
  computed:{
    addressFilter(){
      return this.addressList.slice(0,this.limit);
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      this.axios.get('/mock/address.json').then((response)=>{
        let res = response.data;
        this.addressList = res.data;
        res.data.forEach((item,index) => {
          if(item.isDefault){
            this.checkedIndex = index;
          }
        });
      })
    },
    expand(){
      if(this.limit == 3){
        this.limit = this.addressList.length;
        this.listControl = 'Collapse';
      }else{
        this.limit = 3;
        this.listControl = 'More';
      }
    },
    setDefault(addressId){
      this.addressList.map((item)=>{
        if(addressId == item.addressId){
          item.isDefault = true;
        }else{
          item.isDefault = false;
        }
      })
    },
    delAddressConfirm(addressId){
      this.addressList.map((item,index)=>{
        if(addressId == item.addressId){
          this.addressList.splice(index,1);//start from index, delete one item from list
        }
      })
    },
    next(){
      this.modalConfirm = true;
    }
  }
}
</script>

