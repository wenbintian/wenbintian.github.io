<template>
  <div class="container">
    <el-row>
      <el-col :span="8"><div class="people_box"><ul>
        <li class="people_box_item" v-for="d1 in peopleList" :key="d1.id">
          <div class="people_box_tt">{{d1.name}}</div>
          <div class="people_box_ct" v-if="d1.children && d1.children.length"><ul>
            <li class="people_name" v-for="d2 in d1.children" :key="d2.id">
              <el-button @click="nameClickEvn(d2)" :type="d2 | filterButtonType" size="normal">{{d2.name}}</el-button>
            </li>
          </ul></div>
        </li>
        <li class="people_box_item">
          <div class="people_box_ct people_box_all"><ul>
            <li class="people_name">总共 <span class="people_name--all">{{allLength}}</span> 人，已选 <span class="people_name--all">{{activeList.length}}</span> 人</li>
          </ul></div>
        </li>
      </ul></div></el-col>
      <el-col :span="16"><div class="main_box">
        <ul>
          <li class="main_box_item" :style="{width:100/powLength+'%',height:100/powLength+'%'}" v-for="d in activeList" :key="d.id"><div
            class="main_box_item--inner"
          >{{d.name}}</div></li>
        </ul>
      </div></el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Luck',
    data () {
      return {
        //typeVal:1:正常  2:选中 3:不可用
        //type 1:代表一级（头部）  2:代表二级（人信息）
        peopleList: [
          {id:"1",name:"设计",type:"1",typeVal:"1",children:[
            {id:"1_1",name:"张某某",type:"2",typeVal:"1"},{id:"1_2",name:"陈某某",type:"2",typeVal:"1"},
            {id:"1_3",name:"张某某",type:"2",typeVal:"3"},{id:"1_4",name:"陈某某",type:"2",typeVal:"3"},
            {id:"1_5",name:"张某某",type:"2",typeVal:"1"},{id:"1_6",name:"陈某某",type:"2",typeVal:"1"},
            {id:"1_7",name:"张某某",type:"2",typeVal:"3"},{id:"1_8",name:"陈某某",type:"2",typeVal:"3"},
          ]},
          {id:"2",name:"前端",type:"1",typeVal:"1",children:[
            {id:"2_1",name:"黄某某",type:"2",typeVal:"1"},{id:"2_2",name:"彭某某",type:"2",typeVal:"1"}
          ]},
        ],
        allLength:0,//共多少人
        activeList:[],//当前参加的数据 array
        powLength:1,
      }
    },
    filters:{
      filterButtonType(d){
        let str = "";
        switch (d.typeVal){
          case "3":
            str="info";
            break;
          default:
            str="default";
        }
        return str;
      }
    },
    methods:{
      nameClickEvn(d){
        switch (d.typeVal){
          case "3":
            d.typeVal="1";
            break;
          default:
            d.typeVal="3";
        }
        this.dealPeopleNum();
      },
      dealPeopleNum(){
        let allL=0;
        this.activeList=[];
        for(let i=0,l=this.peopleList.length; i<l; i++){
          let d1=this.peopleList[i].children;
          if(!d1 || !d1.length) continue;
          for(let j=0,k=d1.length; j<k; j++){
            let d2 = d1[j];
            if(d2.typeVal=="1"){//选中的加加
              this.activeList.push(d2);
            }
            allL++;//总数加一
          }
        }
        this.allLength = allL;
        this.powLength = Math.ceil(Math.pow(this.activeList.length,0.5));
      }
    },
    mounted(){
      this.dealPeopleNum();
      window.onresize=function(){
        console.log("ssssss")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main_box{overflow: hidden; position: relative; height: 500px;}
  .main_box>ul{height: 100%;}
  .main_box_item{position: relative; float: left; box-sizing: border-box; padding: 6px;}
  .main_box_item--inner{background: #12AFE6; height: 100%; line-height: 100%;}

  .people_box{padding: 0 20px;}
  .people_box_item{border: 1px solid #ddd;}
  .people_box_item+.people_box_item{border-top: none;}
  .people_box_tt{padding-left: 5px; text-align: left; line-height: 30px; border-bottom: 1px solid #ddd; font-weight: bold;}
  .people_box_ct{overflow: hidden;}
  .people_name{float: left; padding: 5px;}
  .people_name--all{font-size: 18px; font-weight: bold; color: #3a8ee6;}
  .people_box_all{border-top: 2px solid #ddd;}
</style>
