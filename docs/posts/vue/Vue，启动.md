[[0、这个东西在电脑上是怎么运行的]]

废弃代码
```
  <div class="box">

    <div class="box-item">a  a a a a a a aa</div>

    <div class="box-item">a a a a   a</div>

    <div class="box-item">a a   a a a aa  a </div>

    <div class="box-item">a  a a a a a a aa</div>

    <div class="box-item">a a a a   a</div>

    <div class="box-item">a a   a a a aa  a </div>

    <div class="box-item">a  a a a a a a aa</div>

    <div class="box-item">a a a a   a</div>

    <div class="box-item">a a   a a a aa  a </div>

    <div class="box-item">a  a a a a a a aa</div>

    <div class="box-item">a a a a   a</div>

    <div class="box-item">a a   a a a aa  a </div>

  </div>

</template>

  

<style scoped>   /*只作用于当前组件*/

    .box{

        overflow: auto;

        white-space: nowrap;

    }

    .box-item{

        width: 100px;

        background-color: blueviolet;

        flex-shrink: 0;

        padding: 5px 8px;

        display: inline-block;

        margin: 0 5px;

    }

    .box::-webkit-scrollbar{

        display: none;

    }
```