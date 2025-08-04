import{_ as a,c as n,o as p,af as e}from"./chunks/framework.B0E2DVLT.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"posts/LINGO/LINGO学习.md","filePath":"posts/LINGO/LINGO学习.md"}'),t={name:"posts/LINGO/LINGO学习.md"};function l(i,s,o,r,c,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h3 id="一、lingo代码组成" tabindex="-1">一、LINGO代码组成 <a class="header-anchor" href="#一、lingo代码组成" aria-label="Permalink to &quot;一、LINGO代码组成&quot;">​</a></h3><p>注释：<code>！注释内容；</code> 代码组成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MODEL:</span></span>
<span class="line"><span>	SETS:</span></span>
<span class="line"><span>	集合段内容</span></span>
<span class="line"><span>	ENDSETS</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	DATA:</span></span>
<span class="line"><span>	数据段数据</span></span>
<span class="line"><span>	ENDDATA</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	约束段</span></span>
<span class="line"><span>END</span></span></code></pre></div><p>集合段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>行名称/1..n/：对应元素名称；</span></span>
<span class="line"><span>列名称/1..m/：对应元素名称；</span></span>
<span class="line"><span>link（行名称，列名称）/所用行列对数/:对应元素名称；</span></span></code></pre></div><p>数据段：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>元素名称 = 矩阵形式输入数据；</span></span></code></pre></div><p><strong>约束段</strong> : 一个增强自动化的部分，很复杂，下面将有大篇幅讲解</p><h3 id="二、lingo基本用法" tabindex="-1">二、LINGO基本用法 <a class="header-anchor" href="#二、lingo基本用法" aria-label="Permalink to &quot;二、LINGO基本用法&quot;">​</a></h3><h5 id="基础问题" tabindex="-1">基础问题 <a class="header-anchor" href="#基础问题" aria-label="Permalink to &quot;基础问题&quot;">​</a></h5><p>（1）LINGO 的数学规划模型包含目标函数、决策变量、约束条件三个要素。 （2）在LINGO 程序中，每一个语句都必须要用一个英文状态下的分号结束，一个语句可以分几行输入。 （3）LINGO 的注释以英文状态的！开始，必须以英文状态下的分号结束； （4）LINGO 的变量不区分字母的大小写，必须以字母开头，可以包含数字和下划线，不超过32 个字符。 （5）LINGO 程序中，只要定义好集合后，其他语句的顺序是任意的。 （6）LINGO 中的函数以“@”开头。 （7）LINGO 程序默认所有的变量都是非负的。 （8）LINGO 程序中&quot;&lt;&quot;或&quot;&gt;&quot;号与 &quot;&quot;或 &quot; &quot; 号功能相同。</p><h5 id="lingo-软件的基本语法-集合、数据、函数" tabindex="-1">LINGO 软件的基本语法：集合、数据、函数 <a class="header-anchor" href="#lingo-软件的基本语法-集合、数据、函数" aria-label="Permalink to &quot;LINGO 软件的基本语法：集合、数据、函数&quot;">​</a></h5><p>（显然，函数部分最困难，大多函数写在约束段）</p><p>[[函数]]：算数运算、逻辑运算、数学函数、<strong>变量界定函数</strong>(@free)、<strong>集循环函数</strong>(min \\max \\sum)</p><p><strong>LINGO 具有９种逻辑运算符：</strong><strong>· # not # 否定该操作数的逻辑值，＃not＃是一个一元运算符</strong><strong>· # eq # 若两个运算数相等，则为 true；否则为 flase</strong><strong>· # ne # 若两个运算符不相等，则为 true；否则为 flase</strong><strong>· # gt # 若左边的运算符严格大于右边的运算符，则为 true；否则为 flase</strong><strong>· # ge # 若左边的运算符大于或等于右边的运算符，则为 true；否则为 flase</strong><strong>· # lt # 若左边的运算符严格小于右边的运算符，则为 true；否则为 flase</strong><strong>· # le # 若左边的运算符小于或等于右边的运算符，则为 true；否则为 flase</strong><strong>· # and # 仅当两个参数都为 true 时，结果为 true；否则为 flase</strong><strong>· # or # 仅当两个参数都为 false 时，结果为 false；否则为 true</strong></p><p><strong>这些运算符的优先级由高到低为： 高 # not # # eq # # ne # # gt # # ge # # lt # # le #</strong><strong>低 # and # # or #</strong></p><p><strong>一般用于稀疏集合元素过滤写作@function（f (I) | I # gt # 5 : ……）</strong></p><h5 id="重要模型" tabindex="-1">[[重要模型]] <a class="header-anchor" href="#重要模型" aria-label="Permalink to &quot;[[重要模型]]&quot;">​</a></h5><h5 id="输入和输出函数" tabindex="-1">输入和输出函数 <a class="header-anchor" href="#输入和输出函数" aria-label="Permalink to &quot;输入和输出函数&quot;">​</a></h5><p>1．@file 函数 <strong>语法格式： @file(’filename’)， filename 是文件名，在 LINGO 中不允许嵌套调用@file 函数</strong></p><p>模型代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>model: </span></span>
<span class="line"><span>!6 发点 8 收点运输问题; </span></span>
<span class="line"><span>sets: warehouses/ @file(&#39;1_2.txt&#39;) /: capacity; </span></span>
<span class="line"><span>vendors/ @file(&#39;1_2.txt&#39;) /: demand; </span></span>
<span class="line"><span>links(warehouses,vendors): cost, volume; </span></span>
<span class="line"><span>endsets </span></span>
<span class="line"><span>!目标函数; </span></span>
<span class="line"><span>min=@sum(links: cost*volume); </span></span>
<span class="line"><span>!需求约束; </span></span>
<span class="line"><span>@for(vendors(J): </span></span>
<span class="line"><span>@sum(warehouses(I): volume(I,J))=demand(J)); </span></span>
<span class="line"><span>!产量约束; </span></span>
<span class="line"><span>@for(warehouses(I): </span></span>
<span class="line"><span>@sum(vendors(J): volume(I,J))&lt;=capacity(I));</span></span>
<span class="line"><span>!这里是数据; </span></span>
<span class="line"><span>data: capacity = @file(&#39;1_2.txt&#39;) ; </span></span>
<span class="line"><span>demand = @file(&#39;1_2.txt&#39;) ; </span></span>
<span class="line"><span>cost = @file(&#39;1_2.txt&#39;) ; </span></span>
<span class="line"><span>enddata end</span></span></code></pre></div><p>1_2.txt 文件内容： !warehouses 成员; WH1 WH2 WH3 WH4 WH5 WH6 ~ !vendors 成员; V1 V2 V3 V4 V5 V6 V7 V8 ~ !产量; 60 55 51 43 41 52 ~ !销量; 35 37 22 32 41 32 43 38 ~ !单位运输费用矩阵; 6 2 6 7 4 2 5 9 4 9 5 3 8 5 8 2 5 2 1 9 7 4 3 3 7 6 7 3 9 2 7 1 2 3 9 5 7 2 6 5 5 5 2 2 8 1 4 3</p><p>如果数据文件中没有记录结束标记（~），那么整个文件被看作单个记录。 当在模型中第一次调用@file 函数时，LINGO 打开数据文件，然后读取第一个记录；第二次 调用@file 函数时，LINGO 读取第二个记录等等。 文件的最后一条记录可以没有记录结束标记，当遇到文件结束标记时，LINGO 会读取最后一条记录，然后关闭文件。 如果最后一条记录也有记录结束标记，那么直到 LINGO 求解完当前模型后才关闭该文件。 当使用@file 函数时，可把记录的内容看作是替代模型中@file(’filename’)位置的文本。</p><p>2．@text 函数 <strong>作用：将结果输出为文本，语法为 @text(’：/filename’) ，即给出存储位置及文件名</strong></p><p>语法模型为：</p><div class="language-LINGO vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">LINGO</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>model: </span></span>
<span class="line"><span>sets: </span></span>
<span class="line"><span>days/mon..sun/: required,start; </span></span>
<span class="line"><span>endsets </span></span>
<span class="line"><span>data: !每天所需的最少职员数; </span></span>
<span class="line"><span>required = 20 16 13 16 19 14 12; </span></span>
<span class="line"><span>@text(&#39;d:\\out.txt&#39;)=days &#39;至少需要的职员数为&#39; start;</span></span>
<span class="line"><span>enddata </span></span>
<span class="line"><span>!最小化每周所需职员数; </span></span>
<span class="line"><span>min=@sum(days: start); </span></span>
<span class="line"><span>@for(days(J): </span></span>
<span class="line"><span>	@sum(days(I) | I # le # 5: </span></span>
<span class="line"><span>		start(@wrap(J+I+2,7))) &gt;= required(J)); </span></span>
<span class="line"><span>end</span></span></code></pre></div><p>结果：</p><p>MON 至少需要的职员数为 8.000000 TUE 至少需要的职员数为 2.000000 WED 至少需要的职员数为 0.000000 THU 至少需要的职员数为 6.000000 FRI 至少需要的职员数为 3.000000 SAT 至少需要的职员数为 3.000000 SUN 至少需要的职员数为 0.000000</p><p>3．@ole 函数 @OLE 是从 EXCEL 中引入或输出数据的接口函数，它是基于传输的 OLE 技术。 <a href="https://blog.csdn.net/Ruanes/article/details/108636375" target="_blank" rel="noreferrer">Lingo计算结果写入到excel__ole函数</a></p><p>4．@ranged(variable_or_row_name) 为了保持最优基不变，变量的费用系数或约束行的右端项允许减少的量。</p><p>5．@rangeu(variable_or_row_name) 为了保持最优基不变，变量的费用系数或约束行的右端项允许增加的量。</p><p>6．@status() 返回 LINGO 求解模型结束后的状态： 0 Global Optimum（全局最优） 1 Infeasible（不可行） 2 Unbounded（无界） 3 Undetermined（不确定） 4 Feasible（可行） 5 Infeasible or Unbounded（通常需要关闭“预处理”选项后重新求解模型，以确 定模型究竟是不可行还是无界） 6 Local Optimum（局部最优） 7 Locally Infeasible（局部不可行，尽管可行解可能存在，但是 LINGO 并没有找到 一个） 8 Cutoff（目标函数的截断值被达到） 9 Numeric Error（求解器因在某约束中遇到无定义的算术运算而停止） 通常，如果返回值不是 0、4 或 6 时，那么解将不可信，几乎不能用。 例 4.17</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>model: </span></span>
<span class="line"><span>min=@sin(x); </span></span>
<span class="line"><span>data: @text()=@status(); </span></span>
<span class="line"><span>enddata </span></span>
<span class="line"><span>end</span></span></code></pre></div><p>结果： ![[Pasted image 20240704152244.png]] 结果中的 6 就是@status()返回的结果，表明最终解是局部最优的。</p><p>7．@dual</p><p>@dual(variable_or_row_name) 返回变量的判别数（检验数）或约束行的对偶（影子） 价格（dual prices）。</p><h4 id="三、如何自我建立模型-理论问题" tabindex="-1">三、如何自我建立模型（理论问题） <a class="header-anchor" href="#三、如何自我建立模型-理论问题" aria-label="Permalink to &quot;三、如何自我建立模型（理论问题）&quot;">​</a></h4><p>基本问题</p><p>对偶问题</p><p>整数规划问题</p><p>实际应用</p>`,42)]))}const h=a(t,[["render",l]]);export{g as __pageData,h as default};
