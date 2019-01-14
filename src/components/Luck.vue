<template>
  <div ref="container" class="container">
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
      <el-col :span="16">
        <div class="main_box" :style="{height: mainBoxHeight}">
        <ul>
          <li class="main_box_item"
              :style="{width:100/powLength+'%',height:100/powLength+'%',
                left:d.isBeginFlag ? (100/powLength)*(((index+1)%powLength||powLength)-1)+'%' : '0',
                top:d.isBeginFlag ? (100/powLength)*(Math.ceil((index+1)/powLength)-1)+'%' : '0'}"
              v-for="(d,index) in activeList" :key="d.sourceId">
            <div class="main_box_item--inner" @click="mainItemEvn(d)"
                 :class="{rotate_class:d.beginFlag,bg_shadow:d.isBeginFlag,selected:d.selected}"><span v-if="d.selected" class="el_icon el-icon-circle-check select_name"><span>{{d.name}}</span></span><span v-else class="el_icon el-icon-star-on"><span>请选择</span></span></div></li>
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
        peopleList: [],
        allLength:0,//共多少人
        activeList:[],//当前参加的数据 array
        powLength:1,
        mainBoxHeight:"auto",
      }
    },
    filters:{
      filterButtonType(d){
        let str = "";
        switch (d.typeVal){
          case "3":
            str="info";
            break;
          case "1":
            str="primary";
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
        this.sourceList=[];//参与人员的源数据
        for(let i=0,l=this.peopleList.length; i<l; i++){
          let d1=this.peopleList[i].children;
          if(!d1 || !d1.length) continue;
          for(let j=0,k=d1.length; j<k; j++){
            let d2 = Object.assign({},d1[j],{beginFlag:false,selected:false,sourceId:Math.random()*999999,isBeginFlag:false});
            if(d2.typeVal=="1"){//选中的加加
              this.sourceList.push(d2);
            }
            allL++;//总数加一
          }
        }
        this.allLength = allL;
        this.powLength = Math.ceil(Math.pow(this.sourceList.length,0.5));

        var tempArr = [];
        //对参与人员的数据进行随机分配
        for(let i=0;i<this.sourceList.length;){
          let random = Math.round(Math.random()*(this.sourceList.length-1));//抽取 0 到 length-1 的随机数
          this.activeList.push(Object.assign({},this.sourceList[random]));//添加到页面盒子上
          tempArr.push(this.activeList.length-1);
          this.sourceList.splice(random,1);//将已经添加的移除掉
        }

        //进行动画的分发
        this.activeTimer && clearInterval(this.activeTimer);
        this.activeTimer = setInterval(()=>{
          if(!tempArr.length){
            clearInterval(this.activeTimer);
            return;
          }
          let random = Math.round(Math.random()*(tempArr.length-1));//抽取 0 到 length-1 的随机数
          this.activeList[tempArr[random]].isBeginFlag = true;//设置对应要移动的方块
          tempArr.splice(random,1);//将已经添加的移除掉
        },100);

        localStorage.setItem("LuckSourceArr",JSON.stringify(this.peopleList));
      },
      mainItemEvn(d){
        if(!d.isBeginFlag) return;
        d.beginFlag = true;
        setTimeout(()=>{
          d.beginFlag=false;
          d.selected = true;
        },1200);
      }
    },
    mounted(){
      var a = [
        {id:"1",name:"设计-男",type:"1",typeVal:"1",children:[
          {id:"1_1",name:"陈永杰",type:"2",typeVal:"3"},{id:"1_2",name:"姚鑫",type:"2",typeVal:"1"},
          {id:"1_3",name:"陈杰",type:"2",typeVal:"1"},{id:"1_4",name:"易剑芸",type:"2",typeVal:"1"},
          {id:"1_5",name:"叶志勇",type:"2",typeVal:"1"},{id:"1_6",name:"林志华",type:"2",typeVal:"1"}
        ]},
        {id:"2",name:"设计-女",type:"1",typeVal:"1",children:[
          {id:"2_1",name:"张琪媛",type:"2",typeVal:"1"},{id:"2_2",name:"易艳君",type:"2",typeVal:"1"},{id:"2_3",name:"陈丽丽",type:"2",typeVal:"1"}
        ]},
        {id:"3",name:"前端-男",type:"1",typeVal:"1",children:[
          {id:"3_1",name:"田文滨",type:"2",typeVal:"1"},{id:"3_2",name:"骆至坤",type:"2",typeVal:"1"},
          {id:"3_3",name:"黄剑昆",type:"2",typeVal:"1"},{id:"3_4",name:"刘宏",type:"2",typeVal:"1"},{id:"3_5",name:"张弛",type:"2",typeVal:"1"}
        ]},
        {id:"4",name:"前端-女",type:"1",typeVal:"1",children:[
          {id:"4_1",name:"刘洪南",type:"2",typeVal:"1"},{id:"4_2",name:"李凌燕",type:"2",typeVal:"1"},
          {id:"4_3",name:"陈梅秀",type:"2",typeVal:"1"},{id:"4_4",name:"李曼",type:"2",typeVal:"1"}
        ]},
      ];
      var t = localStorage.getItem("LuckSourceArr");
      if(t){
        t=JSON.parse(t);
      }
      this.peopleList = t || a;
      this.dealPeopleNum();
      var _sel = this;
      //设置盒子的高度
      this.mainBoxHeight = _sel.$refs.container.getBoundingClientRect().height*0.9+"px";
      window.onresize=function(){
        _sel.mainBoxHeight = _sel.$refs.container.getBoundingClientRect().height*0.9+"px";
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{width: 1242px; margin: 0 auto; height: 100%; box-sizing: border-box; padding-top: 20px;}
  .main_box{margin-top: 0px; position: relative; height: 500px; margin-right:2%;
    background: -webkit-linear-gradient(#D1EFFC, #e9ebf7); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#D1EFFC, #e9ebf7); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#D1EFFC, #e9ebf7); /* Firefox 3.6 - 15 */
    background: linear-gradient(#D1EFFC, #e9ebf7); /* 标准的语法 */
  }
  .main_box>ul{height: 100%;}
  .main_box_item{  position: absolute; box-sizing: border-box; padding: 6px; transition: all 1s; transform: rotate(360deg);}
  .main_box_item--inner{position: relative; background: #00A3E7; height: 100%; line-height: 100%; border-radius: 4px; cursor: pointer;}
  .main_box_item--inner.rotate_class{animation: rotate 1s linear infinite;}
  .main_box_item--inner.bg_shadow{box-shadow: 0 0 20px 0 rgba(46, 61, 73, 0.5);}
  .main_box_item--inner .el_icon{color: #e8bb3b; font-size: 36px; position: absolute; left: 50%; margin-left: -36px; margin-top: -36px; top: 50%; width: 72px; text-align: center;}
  .main_box_item--inner .el_icon span{font-size: 24px; display: block; line-height: 35px;}
  .main_box_item--inner.selected{background: #00A3E7;}
  .main_box_item--inner .select_name{color: #fff;}
  .people_box{padding: 0 20px 0 0;}
  .people_box_item{border: 1px solid #ddd;}
  .people_box_item+.people_box_item{border-top: none;}
  .people_box_tt{padding-left: 5px; text-align: left; line-height: 30px; border-bottom: 1px solid #ddd; font-weight: bold;}
  .people_box_ct{overflow: hidden;}
  .people_name{float: left; padding: 5px;}
  .people_name--all{font-size: 18px; font-weight: bold; color: #3a8ee6;}
  .people_box_all{border-top: 2px solid #ddd; padding: 6px 2px;}
  .btn_box{ border: 1px solid #ddd; margin-right: 20px; padding: 10px; margin-top: 10px; text-align: left; }
  @keyframes rotate
  {
    from{-webkit-transform: rotateY(0deg)}
    to{-webkit-transform: rotateY(360deg)}
  }

</style>
