### 一、LINGO代码组成

注释：`！注释内容；`
代码组成：
```
MODEL:
	SETS:
	集合段内容
	ENDSETS
	
	DATA:
	数据段数据
	ENDDATA
	
	约束段
END
```
集合段：
```
行名称/1..n/：对应元素名称；
列名称/1..m/：对应元素名称；
link（行名称，列名称）/所用行列对数/:对应元素名称；
```
数据段：
```
元素名称 = 矩阵形式输入数据；
```
**约束段** : 一个增强自动化的部分，很复杂，下面将有大篇幅讲解

### 二、LINGO基本用法
##### 基础问题
（1）LINGO 的数学规划模型包含目标函数、决策变量、约束条件三个要素。
（2）在LINGO 程序中，每一个语句都必须要用一个英文状态下的分号结束，一个语句可以分几行输入。
（3）LINGO 的注释以英文状态的！开始，必须以英文状态下的分号结束；
（4）LINGO 的变量不区分字母的大小写，必须以字母开头，可以包含数字和下划线，不超过32 个字符。
（5）LINGO 程序中，只要定义好集合后，其他语句的顺序是任意的。
（6）LINGO 中的函数以“@”开头。
（7）LINGO 程序默认所有的变量都是非负的。
（8）LINGO 程序中"<"或">"号与 ""或 " " 号功能相同。

##### LINGO 软件的基本语法：集合、数据、函数
（显然，函数部分最困难，大多函数写在约束段）

[[函数]]：算数运算、逻辑运算、数学函数、**变量界定函数**(@free)、**集循环函数**(min \max \sum)

**LINGO 具有９种逻辑运算符：** 
 **· # not # 否定该操作数的逻辑值，＃not＃是一个一元运算符**
 **· # eq # 若两个运算数相等，则为 true；否则为 flase**
 **· # ne # 若两个运算符不相等，则为 true；否则为 flase** 
 **· # gt # 若左边的运算符严格大于右边的运算符，则为 true；否则为 flase**
 **· # ge # 若左边的运算符大于或等于右边的运算符，则为 true；否则为 flase**
 **· # lt # 若左边的运算符严格小于右边的运算符，则为 true；否则为 flase** 
 **· # le # 若左边的运算符小于或等于右边的运算符，则为 true；否则为 flase** 
 **· # and # 仅当两个参数都为 true 时，结果为 true；否则为 flase** 
 **· # or # 仅当两个参数都为 false 时，结果为 false；否则为 true** 
 
 **这些运算符的优先级由高到低为： 高 # not #   # eq #  # ne #  # gt #  # ge #  # lt #  # le #** 
                            **低 # and #  # or #**

**一般用于稀疏集合元素过滤写作@function（f (I) | I # gt # 5 : ……）**

##### [[重要模型]]


##### 输入和输出函数
1．@file 函数
**语法格式： @file(’filename’)， filename 是文件名，在 LINGO 中不允许嵌套调用@file 函数**

模型代码如下： 
```
model: 
!6 发点 8 收点运输问题; 
sets: warehouses/ @file('1_2.txt') /: capacity; 
vendors/ @file('1_2.txt') /: demand; 
links(warehouses,vendors): cost, volume; 
endsets 
!目标函数; 
min=@sum(links: cost*volume); 
!需求约束; 
@for(vendors(J): 
@sum(warehouses(I): volume(I,J))=demand(J)); 
!产量约束; 
@for(warehouses(I): 
@sum(vendors(J): volume(I,J))<=capacity(I));
!这里是数据; 
data: capacity = @file('1_2.txt') ; 
demand = @file('1_2.txt') ; 
cost = @file('1_2.txt') ; 
enddata end 
```
1_2.txt 文件内容：
!warehouses 成员; 
WH1 WH2 WH3 WH4 WH5 WH6 ~ 
!vendors 成员; 
V1 V2 V3 V4 V5 V6 V7 V8 ~ 
!产量; 
60 55 51 43 41 52 ~ 
!销量; 
35 37 22 32 41 32 43 38 ~ 
!单位运输费用矩阵; 
6 2 6 7 4 2 5 9
4 9 5 3 8 5 8 2
5 2 1 9 7 4 3 3 
7 6 7 3 9 2 7 1 
2 3 9 5 7 2 6 5 
5 5 2 2 8 1 4 3 

如果数据文件中没有记录结束标记（~），那么整个文件被看作单个记录。
当在模型中第一次调用@file 函数时，LINGO 打开数据文件，然后读取第一个记录；第二次 调用@file 函数时，LINGO 读取第二个记录等等。
文件的最后一条记录可以没有记录结束标记，当遇到文件结束标记时，LINGO 会读取最后一条记录，然后关闭文件。
如果最后一条记录也有记录结束标记，那么直到 LINGO 求解完当前模型后才关闭该文件。
当使用@file 函数时，可把记录的内容看作是替代模型中@file(’filename’)位置的文本。

2．@text 函数 
**作用：将结果输出为文本，语法为 @text(’：/filename’) ，即给出存储位置及文件名**

语法模型为：
```LINGO
model: 
sets: 
days/mon..sun/: required,start; 
endsets 
data: !每天所需的最少职员数; 
required = 20 16 13 16 19 14 12; 
@text('d:\out.txt')=days '至少需要的职员数为' start;
enddata 
!最小化每周所需职员数; 
min=@sum(days: start); 
@for(days(J): 
	@sum(days(I) | I # le # 5: 
		start(@wrap(J+I+2,7))) >= required(J)); 
end 
```

结果：

 MON 至少需要的职员数为        8.000000
 TUE 至少需要的职员数为        2.000000
 WED 至少需要的职员数为        0.000000
 THU 至少需要的职员数为        6.000000
 FRI 至少需要的职员数为        3.000000
 SAT 至少需要的职员数为        3.000000
 SUN 至少需要的职员数为        0.000000

3．@ole 函数
@OLE 是从 EXCEL 中引入或输出数据的接口函数，它是基于传输的 OLE 技术。
[Lingo计算结果写入到excel__ole函数](https://blog.csdn.net/Ruanes/article/details/108636375)

4．@ranged(variable_or_row_name) 为了保持最优基不变，变量的费用系数或约束行的右端项允许减少的量。

5．@rangeu(variable_or_row_name) 为了保持最优基不变，变量的费用系数或约束行的右端项允许增加的量。 

6．@status() 
返回 LINGO 求解模型结束后的状态： 
0 Global Optimum（全局最优） 
1 Infeasible（不可行） 
2 Unbounded（无界） 
3 Undetermined（不确定）
4 Feasible（可行） 
5 Infeasible or Unbounded（通常需要关闭“预处理”选项后重新求解模型，以确 定模型究竟是不可行还是无界） 
6 Local Optimum（局部最优） 
7 Locally Infeasible（局部不可行，尽管可行解可能存在，但是 LINGO 并没有找到 一个） 
8 Cutoff（目标函数的截断值被达到） 
9 Numeric Error（求解器因在某约束中遇到无定义的算术运算而停止） 
通常，如果返回值不是 0、4 或 6 时，那么解将不可信，几乎不能用。
例 4.17 
```
model: 
min=@sin(x); 
data: @text()=@status(); 
enddata 
end 
```
结果： 
![[Pasted image 20240704152244.png]]
结果中的 6 就是@status()返回的结果，表明最终解是局部最优的。

7．@dual 

@dual(variable_or_row_name)
返回变量的判别数（检验数）或约束行的对偶（影子） 价格（dual prices）。
#### 三、如何自我建立模型（理论问题）

基本问题

对偶问题

整数规划问题

实际应用

