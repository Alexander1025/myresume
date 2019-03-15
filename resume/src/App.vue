<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider
            :trigger="null"
            collapsible
            v-model="collapsed"
            width="300"
        >
            <a-icon
                class="trigger"
                style="color:white;fontSize:28px;"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="()=> collapsed = !collapsed"
            />
            <div class="logo" >
                <img src="http://www.zhoujizhi.com/static/img/logo.5990b69.png" alt="">
            </div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
                <a-menu-item
                    key="1"
                >
                    <a-icon type="user" />
                    <span>周锦智</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="phone" />
                    <span>13660110112</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="book" />
                    <span>75641895@qq.com</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="man" />
                    <span>男</span>
                </a-menu-item>
                <a-menu-item key="5">
                    <a-icon type="fire" />
                    <span>24岁</span>
                </a-menu-item>
                <a-menu-item key="6">
                    <a-icon type="pushpin" />
                    <span>广东广州</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff'}">
                <div>
                    <a-row>
                        <a-col class="head" :span="24">
                            <img src="./static/education.png" alt="">
                            教育经历
                        </a-col>
                    </a-row>
                    <a-row class="cont">
                        <a-col class="imglist" :offset="4" :span="10">
                            <img src="./static/huoju.jpg" alt="">
                            <div>
                                中山火炬职业技术学院
                                <br>
                                移动互联网&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;2016年毕业
                            </div>
                        </a-col>
                        <a-col class="imglist" :span="10">
                            <img src="./static/huashi.jpg" alt="">
                            <div>
                                华南师范大学
                                <br>
                                国际金融管理&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;2017年毕业
                            </div>
                        </a-col>
                    </a-row>


                    <a-row>
                        <a-col class="head" :span="24">
                            <img src="./static/project.png" alt="">
                            项目经历
                        </a-col>
                    </a-row>
                    <a-row class="cont conttext">
                        <a-col :offset="2" :span="22">
                            <p>个人项目</p>
                            <div class="text">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="colored7d31"><a href="http://www.zhoujizhi.com/">个人博客</a></span>，前端使用js的vue框架，后台使用node的express，使用ubuntu系统在腾讯云上部署的项目。博客中每个页面的、功能的设计到美工到实现都是独立完成。博客适配pc端与手机端。<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="colored7d31"><a href="http://todo.zhoujizhi.com/">todo应用</a></span>，除了todo功能，还有自定义主题，自定义任务颜色等功能。其中在todo首页任务列表优化那里遇到了小问题，就是任务可以水平滑动，任务列表可以垂直滑动，两个方向是可以同时滑动的，这样体验非常不好，解决的办法就是判断移动的位置与按下的位置来决定允许滑动方向。<br>
                            </div>

                            <p>广东蓝莎信息科技有限公司  2016 - 2019</p>
                            <div class="text">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司只有一个前端，负责全公司的产品、官网的前端开发。<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="colored7d31">灵猫御医健康平台</span>，基于vue框架的项目，有<span class="colored7d31">在线预约</span>、<span class="colored7d31">诊断</span>（<span class="colored7d31">图文</span>）、<span class="colored7d31">个人档案</span>等。其中遇到了比较有代表性的问题:医生列表太长，加载较慢，滑动不流畅。优化思路:异步分页加载，按需显示在页面上，通过页数只显示当前页面医生，滑动到底部再请求，再将不需要的去除。后续优化解决回滚问题，<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="colored7d31">西牛汇</span>，基于jquery的项目，是一个O2O平台。其中遇到了比较有代表性的问题:入驻商家可以在百度地图上显示出来，首先是定位问题，gps经纬度要转换成百度地图经纬度，其次是按照距离在地图上标注商家位置，一开始没有优化，通过经纬度、两点的直线计算距离，这个方法需要大量的计算，导致进入地图会卡顿，有的手机会出现内存不足、微信闪退，后续解决办法是想到了用相似的经纬度查找，例如23.13777，113.278341，就将23.13***，113.27****的在百度地图上标注出来。<br><br><br>
                            </div>
                        </a-col>
                    </a-row>


                    <a-row>
                        <a-col class="head" :span="24">
                            <img src="./static/skill.png" alt="">
                            职业技能
                        </a-col>
                    </a-row>
                    <a-row class="cont conttext">
                        <a-col :offset="2" :span="22">
                            &nbsp;&nbsp;&nbsp;&nbsp;1、熟练运用Javascript语言，较深入了解<span class="colored7d31">原型链</span>、<span class="colored7d31">es6继承</span>、<span class="colored7d31">执行上下文</span>、<span class="colored7d31">闭包</span>、<span class="colored7d31">面向对象编程</span>等。对Js的细节有较深度的探究，例如window的isNaN与es6新增的Number类上的isNaN等。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;2、熟悉Javascript框架，如<span class="colored7d31">vue</span>、<span class="colored7d31">vuex</span>、<span class="colored7d31">vue-router</span>、<span class="colored7d31">jquery</span>，主题框架有<span class="colored7d31">antd</span>。了解过微信小程序。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;3、熟悉html、css，能够处理不同浏览器的问题，能手写符合<span class="colored7d31">语义化</span>、<span class="colored7d31">SEO</span>良好的页面。熟悉<span class="colored7d31">屏幕适配</span>与基于<span class="colored7d31">css的动画</span>编写。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;4、掌握node与sql，linux的ubuntu系统操作。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;5、熟悉git版本控制，熟练使用chrome，firebug，微信开发者工具等调试工具，熟练使用VScode、Sublime Text编辑软件。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;6、有良好的编程习惯，从代码缩进、命名规范，到git提交规范，都是严格按照要求执行。<br><br><br>
                        </a-col>
                    </a-row>


                    <a-row>
                        <a-col class="head" :span="24">
                            <img src="./static/evaluate.png" alt="">
                            自我评价
                        </a-col>
                    </a-row>
                    <a-row class="cont conttext">
                        <a-col :offset="2" :span="22">
                            &nbsp;&nbsp;&nbsp;&nbsp;态度积极、头脑灵活、思维活跃，与人相处友善，举止优雅。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;热爱前端，喜欢coding，享受调试成功后的快乐。自学能力强，并钻研到底。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;个人git账号在对上一年有400多次提交，git地址: <span class="colored7d31"><a href="https://github.com/Alexander1025">https://github.com/Alexander1025</a></span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;活跃于前端技术网站，如segmentfault、掘金、极客时间等，时刻关注行业发展，有行业分析能力。<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;爱打篮球，有保持健身、锻炼<br><br><br>
                        </a-col>
                    </a-row>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'app',
    components: {
        // HelloWorld
    },
    data(){
        return {
            collapsed: true
        }
    },
    mounted:function (){
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?7711aeaf51eb9ba61722d44b48977043";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }
}
</script>

<style>
    .logo img{
        width: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #components-layout-demo-custom-trigger{
        min-height: 100vh;
    }
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        background: #f9f9f9;
        margin: 16px;
    }
    .cont{
        padding: 20px 0;
    }
    .conttext{
        font-size: 16px;
        line-height: 30px;
    }
    .text{
        padding-left: 3%;
    }
    .colored7d31{
        color:#ed7d31;
    }
    .head{
        border-bottom: 1px dashed #ed7d31;
        line-height: 60px;
        font-size: 18px;
        color: #ed7d31;
    }
    .head img{
        height: 40px;
        margin-left: 3%;
        margin-right: 2%;
    }
    .imglist{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }
    .imglist img{
        height: 70px;
    }
    .imglist div{
        white-space:nowrap;
    }
</style>
