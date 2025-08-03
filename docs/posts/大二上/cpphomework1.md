# 第一题
#### 1、下载软件

进入Visual Studio官网([https://visualstudio.microsoft.com/](https://link.zhihu.com/?target=https%3A//visualstudio.microsoft.com/))后，选择下载Windows版，并选择Community 2022 社区版本进行下载。

![[(4F}HU8LYG}7(UHN]YOG`AE.png]]
#### 2、安装

双击 .exe 文件，安装vs

![[T0X7[55U$C%BCC{X@}Q%6V9.png]]

###### 双击后，跳出以下界面

![[P4RFUY{3TOE}4E8)~%4TK}6.png]]

勾选 **使用c++桌面开发**

![[{S`0[L53{ANA`G(ENCKA386.png]]

在 **安装位置** 处选择适合的文件夹，而后点击 **安装** ，等待片刻（安装时间会依据网速、电脑设备等因素会不固定，大约20分钟，可以在此期间休息一会）


###### 3、运行测试程序

安装成功后，点击启动。

![[{(EHJX5OSRHI%8Q8CE7(1WL.png]]

会弹出初始界面

![[创建新项目.png]]

选择创建 **控制台应用** 

![[$()GK)((B5TLNQVGP(G7%ST.png]]

经历 **下一步** 后，选好存储位置，创建项目

![[))8)9F{H90~GD`NTJUCB{[N.png]]

这是默认的测试程序，点击**F5**，若弹出以下黑框，则证明**安装成功**✿✿ヽ(°▽°)ノ✿

![[R1@YJYGNP)~YUF[V$]{4AO7.png]]

# 第二题

```cpp
#include <stdio.h>
#include <iostream>
#include <algorithm>
#include <cstdlib>
#include <cmath>
using namespace std;
void Combine(int* a, int low, int mid, int hight)  //合并函数
{
	int* b = new int[hight - low + 1];  // new 一个辅助函数
	int i = low, j = mid + 1, k = 0;
	while (i <= mid && j <= hight)
	{
		if (a[i] <= a[j])  //从小到大存入 b 数组
		{
			b[k++] = a[i++];
		}
		else
		{
			b[k++] = a[j++];
		}
	}// 序列结束后，将另一序列剩余的数补入 b 数组
	while (i <= mid)
	{
		b[k++] = a[i++];
	}
	while (j <= hight)
	{
		b[k++] = a[j++];
	}
	k = 0;  //从顺序数组 b 的第一个数开始传送
	for (int i = low; i <= hight; i++)  //将 b 数组的值传递给数组 a
	{
		a[i] = b[k++];
	}
	delete[]b;     // 对辅助数组空间进行释放
}
void mergesort(int* a, int low, int hight) //合并排序
{
	if (low < hight)
	{
		int mid = (low + hight) / 2;
		//确保 low , mid , mid+1 , hight 的顺序正确 
		mergesort(a, low, mid);
		mergesort(a, mid + 1, hight);
		Combine(a, low, mid, hight);//合并
	}
}
int main()
{
	int n, a[100];
	cout << "请输入数列中的元素个数 n 为：" << endl;
	cin >> n;
	cout << "请依次输入数列中的元素：" << endl;
	for (int i = 0; i < n; i++)
	{
		cin >> a[i];
	}
	mergesort(a, 0, n - 1);
	cout << "归并排序结果" << endl;
	for (int i = 0; i < n; i++)
	{
		cout << a[i] << " ";
	}
	cout << endl;
	return 0;
}
```

# 第三题

```cpp
#include <iostream>
#include <cmath> 
using namespace std;
bool primeNumber(int n)
{
	for (int i = 2; i < sqrt(n)+1; i++) //循环判断是否能整除 
	{
		if (n%i == 0)    //可以，则不是素数 
			return false;
	}
	return true;
}
int main()
{
	int x;
	cout<<"请输入一个整数：";
	cin >> x;
	if (x<2)    //素数从2开始
	{
		cout << x << "不是素数" ;
		return 0;
	}	
	if (primeNumber(x)) cout << x << "是素数" ;
	else cout << x << "不是素数" ;
	return 0;
}
```

# 第四题

菲波那切数列的定义：F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) (n > 1)

```cpp
#include<iostream>
#include<cstdio>
using namespace std;
int Fibo(int n)
{
	if(n==1)//停止的条件 
	{
		return 0;
	}
	else if(n==2)//停止的条件 
	{
		return 1;
	}
	else 
	{
		return Fibo(n-2)+Fibo(n-1);//递归关系式 
	}
}
int main()
{
	cout<<"请输入一个整数：";
	int n;
	cin>>n;
	cout<<Fibo(n); //输出结果 
	return 0;
}
```

#### Q1:递归调用下，最大能计算到第多少项？  
  
最大递归深度取决于编译器和操作系统的设置，一般来说在几万到几十万之间，栈空间是有限的，如果超过了系统允许的范围，就会出现"stack overflow"。故，使用递归的形式计算菲波那切数列第n项，在C++中最大能计算到第几万到几十万项（具体取决于编译器和操作系统)，如果修改了最大递归深度，可能能计算到更多项（但也有限制)。 

#### Q2:分析程序继续求解的原因
   
程序继续求解的原因是因为它遵循了递归的定义和规则，递归调用的原因是菲波那切数列的定义。为了计算 F(n)，我们需要知道 F(n-1) 和 F(n-2)，即不断地把问题分解成更小的子问题，直到达到基本情况（n = 0 或 n = 1）或者超出了栈空间限制。

# 第五题

```cpp
#include <iostream>
#include <cmath>
using namespace std;
class Complex 
{
	private:
	    double x; // 实部
	    double y; // 虚部
	
	public:
	    Complex(double real, double imag) : x(real), y(imag) {}
	
	    double getx() const 
		{
	        return x;
	    }
	
	    double gety() const 
		{
	        return y;
	    }
	
	    void Display() const 
		{
	        cout << x;
	        if (y >= 0)          //符号输入
	            cout << "+";
	        cout << y << "i";
	    }
	
	    double Abs() const       //求模
		{
	        return sqrt(x * x + y * y);
	    }
	
	    Complex Minus(const Complex& other) const //减法
		{
	        return Complex(x - other.x, y - other.y);
	    }
	
	    Complex Multiply(const Complex& other) const //乘法
		{
	        return Complex(x * other.x - y * other.y, x * other.y + y * other.x);
	    }
};

int main() 
{
    Complex z1(1.4, -2.3);
    Complex z2(-3.5, 2.7);

    cout << "|z1|: " << z1.Abs()<< endl;

    cout << "z1 - z2: ";
    (z1.Minus(z2)).Display();
    cout << endl;

    cout << "z1 * z2: ";
    (z1.Multiply(z2)).Display();
    cout << endl;

    return 0;
}
```