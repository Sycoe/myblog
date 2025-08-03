# 第一题

UML图

![[2A5D525FE5CEB3DBC7600ACC0DA3517F.png]]
### Container.h

```cpp
#ifndef CONTAINER_H
#define CONTAINER_H

class Container 
{
	public:
	    virtual double getVolume() = 0;
	    virtual double getArea() = 0;
};

#endif
```

### Sphere.h

```cpp
#ifndef SPHERE_H
#define SPHERE_H

#include "Container.h"

class Sphere : public Container 
{
	private:
	    double radius;
	public:
	    Sphere(double r) : radius(r) {}
	    double getVolume();
	    double getArea();
};

#endif
```

### Cylinder.h

```cpp
#ifndef CYLINDER_H
#define CYLINDER_H

#include "Container.h"

class Cylinder : public Container 
{
	private:
	    double radius;
	    double height;
	public:
	    Cylinder(double r, double h) : radius(r), height(h) {}
	    double getVolume();
	    double getArea();
};

#endif
```

### Cube.h

```cpp
#ifndef CUBE_H
#define CUBE_H

#include "Container.h"

class Cube : public Container 
{
	private:
	    double side;
	public:
	    Cube(double s) : side(s) {}
	    double getVolume();
	    double getArea();
};

#endif
```

### Cylinder.cpp

```cpp
#include "Cylinder.h"
#include <cmath>

double Cylinder::getVolume() 
{
    return 3.14 * pow (radius, 2) * height;
}

double Cylinder::getArea() 
{
    return 2 * 3.14 * radius * (radius + height);
}
```

### Cube.cpp

```cpp
#include "Cube.h"
#include <cmath>

double Cube::getVolume() 
{
    return pow(side, 3);
}

double Cube::getArea() 
{
    return 6 * pow(side, 2);
}
```
### Sphere.cpp

```cpp
#include "Sphere.h"
#include <cmath>

double Sphere::getVolume() 
{
    return (4.0 / 3.0) * 3.14 * pow(radius, 3);
}

double Sphere::getArea() 
{
    return 4 * 3.14 * pow(radius, 2);
}
```
### main.cpp

```cpp
#include "Sphere.h"
#include "Cylinder.h"
#include "Cube.h"
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<Container*> containers;
    containers.push_back(new Sphere(5.0));
    containers.push_back(new Cylinder(5.0, 10.0));
    containers.push_back(new Cube(5.0));

    vector<Container*>::iterator it;
    for (it = containers.begin(); it != containers.end(); ++it) 
	{
        cout << "Volume: " << (*it)->getVolume() << " , Area: " << (*it)->getArea() << endl;
        delete *it;
    }

    return 0;
}
```

根据主函数中的测试数据，运行结果如下

![[Pasted image 20231203182700.png]]
# 第二题

```cpp
#include <iostream>
#include <cstdlib>
using namespace std;

class Matrix 
{
	private:
	    int row, col;
	    float* data;
	
	public:
	    Matrix(int r, int c) : row(r), col(c) 
		{
	        data = new float[row * col];
	    }
	
	    // 析构函数，释放数据内存
	    ~Matrix() 
		{
	        delete[] data;
	    }
	
	    Matrix operator + (const Matrix& m) 
		{
	        Matrix result(row, col);
	        for (int i = 0; i < row * col; i++) 
			{
	            result.data[i] = data[i] + m.data[i];
	        }
	        return result;
	    }
	
	    // 用于填充随机数的函数
	    void randomPopulate() 
		{
	        for (int i = 0; i < row * col; i++) 
			{
	            data[i] = static_cast<float>(rand()) / static_cast<float>(RAND_MAX);
	        }
	    }
	
	    friend ostream& operator<<(ostream& os, const Matrix& m);
	};
	
	ostream& operator<<(ostream& os, const Matrix& m) 
	{
	    for (int i = 0; i < m.row; i++) 
		{
	        for (int j = 0; j < m.col; j++) 
			{
	            os << m.data[i * m.col + j] << " ";
	        }
	        os << endl;
	    }
	    return os;
}
```

# 第三题

### Student.h
```cpp
#ifndef _STUDENT_H
#define _STUDENT_H
 
#include<iostream>
#include<fstream>
#include<string>
#include<cstdlib>
#include<vector>
#include<iomanip>
using namespace std;
 
class Student
{
    public:
        Student();
        Student(string name,char sex,int number,double score);
        static double get_average();
        friend void student_info_parser(string file_name, vector<Student> &students);
        friend ostream & operator<<(ostream &, const Student &);
    private:
        string name;
        char sex;
        string number;
        double score;
        static int totalCount;
        static double totalScore;
};
 
#endif
```
### Student.cpp

```cpp
#include"Student.h"
using namespace std;
 
Student::Student(){}
 
Student::Student(string name,char sex,int number,double score)
    {
	 this->name=name;
	 this->sex=sex;
	 this->number=number;
	 this->score=score;
	}
 
double Student::get_average()
    {
	 return totalScore/totalCount;
	}
 
//静态成员变量初始化
int Student::totalCount=0;
double Student::totalScore=0;
 
ostream & operator<<(ostream &os, const Student &stu)
{
    os<<setiosflags(ios::left)<<setw(10)<<stu.name<<' '
	  <<setw(6)<<stu.sex<<' '
      <<setw(15)<<stu.number<<' '
	  <<setw(8)<<stu.score;
    return os;
}
 
void student_info_parser( string file_name, vector <Student> & students )
{
    fstream fstrm;
    Student stu;
    fstrm.open("student_info.txt",ios::in);
    if(!fstrm) 
	{ 
	 printf("Open Error\n");
	} 
    while(fstrm>>stu.name)
    {
        fstrm>>stu.sex;
        fstrm>>stu.number;
        fstrm>>stu.score;
        students.push_back(stu);
        stu.totalCount+=1;
        stu.totalScore+=stu.score;
    }
    cout<<"the number of student is "<<stu.totalCount<<endl;
    fstrm.close();
}
```
### main.cpp

```cpp
#include"Student.h"
#include"Student.cpp"
using namespace std;
 
int main()
{
    Student stu;
    vector <Student> students;
    student_info_parser("students.txt",students);
    //从容器类中格式化输出学生信息
    for(int i=0;i<students.size();i++)
    {
	 cout<<students[i]<<endl;
	}
    cout << "The average score is " << Student::get_average() << endl;

    return 0;
}
```

student_info.txt

![[Pasted image 20231203183541.png]]

根据文档中的测试数据，运行结果如下

![[Pasted image 20231203183357.png]]

# 第四题

```cpp
#include <cstdio>
#include <cstdlib>
#include <ctime>
#include <iostream>
#include <iomanip>

using namespace std;

int main() 
{
    // 初始化随机数生成器
    srand(time(0));

    double A[8][8];
    for (int i = 0; i < 8; ++i)
        for (int j = 0; j < 8; ++j)
            A[i][j] = (double)rand() / RAND_MAX;

    FILE* fout01_txt = fopen("fout01.txt", "w");
    for (int i = 0; i < 8; ++i) 
	{
        for (int j = 0; j < 8; ++j)
            fprintf(fout01_txt, "%.2f ", A[i][j]);
        fprintf(fout01_txt, "\n");
    }
    fclose(fout01_txt);

    FILE* fout01_dat = fopen("fout01.dat", "wb");
    for (int i = 0; i < 8; ++i)
        for (int j = 0; j < 8; ++j)
            fwrite(&A[i][j], sizeof(double), 1, fout01_dat);
    fclose(fout01_dat);

    FILE* fin = fopen("fout01.dat", "rb");
    double B[4][6];
    for (int i = 0; i < 4; ++i)
        for (int j = 0; j < 6; ++j)
            fread(&B[i][j], sizeof(double), 1, fin);
    fclose(fin);

    for (int i = 0; i < 4; ++i) 
	{
        for (int j = 0; j < 6; ++j)
            cout << fixed << setprecision(2) << B[i][j] << ' ';
        cout << '\n';
    }

    return 0;
}
```

根据随机生成的测试数据，运行结果如下

![[Pasted image 20231203183750.png]]

# 第五题

只记录两个频繁遇到并且新出现的问题，忘记初始化，忘记声明，没有打开文件等问题，不予记录。

#### 1.关于报错“#error This file requires compiler and library support for the \”

该报错会弹出一个超长的warning文件

原因是代码中使用了较新版本的 C++ 特性，但未获得编译器的支持

解决方案如下图

![[Pasted image 20231203185145.png]]

#### 2.在读取需要自己输入内容的文件内容时出现的问题（不解释修改代码的办法

（1）输入文件名时，与代码不匹配

解决方法：对应好输入的文件名称，修改即可

（2）所输入格式与代码可读格式不匹配

解决方法：修改文件，大多是字符不符的问题，将文件中的中文去掉，调整格式即可。

其他的解决方法：拒绝手动，采取随机数自动生成。（但有一定局限性，若不只是数字，则还是要注意以上问题）


##### 总体思考：

这次的C++练习让我深刻体会到面向对象编程的强大之处。通过类的继承和多态性，代码更加灵活可扩展，处理文件操作和异常使我对C++的实际应用有了更深认识。在不断调试中，我学到了更多解决问题的方法。这次实践锻炼了我的逻辑思维和问题解决能力，为今后更复杂的项目打下了基础。
