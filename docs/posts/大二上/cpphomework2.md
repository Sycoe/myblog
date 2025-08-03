# 第一题

类的声明
```cpp
#ifndef RECTANGLE_H
#define RECTANGLE_H

class Rectangle 
{
private:
    double width;
    double height;

public:
    Rectangle(); // 不带形参的构造函数
    Rectangle(double w, double h); // 带形参的构造函数
    void setwh(double w, double h); // 更改矩形的宽度和高度
    double getw() const; // 获取矩形的宽度
    double geth() const; // 获取矩形的高度
    double getArea() const; // 返回矩形的面积
    double getPerimeter() const; // 返回矩形的周长
};

#endif

```

类的实现

```cpp
#include "rectangle.h"

Rectangle::Rectangle() : width(1.0), height(1.0) {}  // 默认构造函数

Rectangle::Rectangle(double w, double h) : width(w), height(h) {}  // 带形参的构造函数

void Rectangle::setwh(double w, double h) 
{
    width = w;
    height = h;
}

double Rectangle::getw() const 
{
    return width;
}

double Rectangle::geth() const 
{
    return height;
}

double Rectangle::getArea() const 
{
    return width * height;
}

double Rectangle::getPerimeter() const 
{
    return 2 * (width + height);
}

```

测试
```cpp
#include <iostream>
#include "rectangle.h"
using namespace std;

int main() 
{
    Rectangle R1(4, 40);
    Rectangle R2(3.5, 35.9);
    
	// 属性输出
    cout << "R1的宽度：" << R1.getw() << endl;
	cout<< "高度：" << R1.geth() << endl;
    cout << "R1的面积：" << R1.getArea() << endl;
	cout<< "周长：" << R1.getPerimeter() << endl;

    cout << "R2的宽度：" << R2.getw() << endl;
	cout<< "高度：" << R2.geth() << endl;
    cout << "R2的面积：" << R2.getArea() << endl;
	cout<< "周长：" << R2.getPerimeter() << endl;

    return 0;
}
```

运行结果

![[H`S88KLC~Z`2RXVD~PAOM1C.png]]
# 第二题

```cpp
#include <iostream>
using namespace std;

class Score {
private:
    float math;
    float eng;

public:
    Score(float mathScore, float engScore) : math(mathScore), eng(engScore) {}

    void show() const {
        cout << "数学成绩: " << math << endl;
		cout << "英语成绩: " << eng << endl;
    }
};

class Student 
{
	private:
	    int stuid;
	    Score mark;
	
	public:
	    Student(int studentID, float mathScore, float engScore) : stuid(studentID), mark(mathScore, engScore) {}
	
	    void stushow() const 
		{
	        cout << "学号: " <<stuid << endl ;
			cout << "成绩：" << endl ;
	        mark.show();
	    }
};

int main() 
{
    Student student(2017007, 98, 85);
    student.stushow();

    return 0;
}
```

运行结果

![[PSV2@I]3]4]T%LZ`Y~72~E1.png]]
# 第三题

```cpp
#include <iostream>
using namespace std;

class Rectangle2D 
{
private:
    double x;
    double y;
    double width;
    double height;

public:
    Rectangle2D() : x(0.0), y(0.0), width(1.0), height(1.0) {}

    Rectangle2D(double x, double y, double width, double height)
        : x(x), y(y), width(width), height(height) {}

    double getArea() const    //面积 
	{
        return width * height;
    }
//bool值判断，true返回1，false返回0 
    bool contains(double px, double py) const  //判断给定点是否在矩形内 
	{
        return (px >= x - width / 2 && px <= x + width / 2 &&
                py >= y - height / 2 && py <= y + height / 2);
    }

    bool contains(const Rectangle2D &r) const  //判断给定矩形是否在当前矩形内 
	{
        double rX1 = r.x - r.width / 2;
        double rX2 = r.x + r.width / 2;
        double rY1 = r.y - r.height / 2;
        double rY2 = r.y + r.height / 2;

        return (rX1 >= x - width / 2 && rX2 <= x + width / 2 &&
                rY1 >= y - height / 2 && rY2 <= y + height / 2);
    }

    bool overlaps(const Rectangle2D &r) const  //判断矩形是否有重叠 
	{
        double rX1 = r.x - r.width / 2;
        double rX2 = r.x + r.width / 2;
        double rY1 = r.y - r.height / 2;
        double rY2 = r.y + r.height / 2;

        return !(rX1 > x + width / 2 || rX2 < x - width / 2 ||
                 rY1 > y + height / 2 || rY2 < y - height / 2);
    }
};

int main() 
{
    Rectangle2D r1(2, 2, 5.4, 4.8);
    Rectangle2D r2(4, 5, 10.6, 3.3);
    Rectangle2D r3(3, 5, 2.2, 5.5);

    cout << "r1的面积: " << r1.getArea() << endl;
    cout << "r1.contains(3, 3): " << r1.contains(3, 3) << endl;
    cout << "r1.contains(r2): " << r1.contains(r2) << endl;
    cout << "r1.overlaps(r3): " << r1.overlaps(r3) << endl;

    return 0;
}
```

运行结果

![[ET[9(E5P`(AT}1]Z_EK~792.png]]

# 第四题

```cpp
#include <iostream>
#include <string>
using namespace std;

class Employee 
{
protected:
    string name;
    string addr;
    string city;
    string zip;

public:
    Employee(const string &n, const string &a, const string &c, const string &z)
        : name(n), addr(a), city(c), zip(z) {}

    void ChangeName(const string &newName) 
    {
        name = newName;
    }

    void Display() const 
    {
         cout << "姓名: " << name << endl;
         cout << "地址: " << addr << endl;
         cout << "省市: " << city << endl;
         cout << "邮编: " << zip << endl;
    }
};

int main() 
{
    Employee emp("kk", "No. 9", "xian", "12345");

    emp.Display();

    emp.ChangeName("sun");

    cout << "修改后的信息：" <<  endl;
    emp.Display();

    return 0;
}
```

运行结果

![[ENHH$~SF}MWBMJ076TK4%AS.png]]
# 第五题

```cpp
#include <iostream>
#include <string>
using namespace std;

class Person //声明基类
{
public:
    Person(int id,  string name) : id_(id), name_(name) {}
    virtual void display() const 
	{
         cout << "学号: " << id_ << endl;
		 cout << "姓名: " << name_ << endl;
    }
private:
    int id_;
    string name_;
};

class Student : public Person //声明公用派生类student
{
public:
    Student(int id,  string name, int class_id, double score) : Person(id, name), class_id_(class_id), score_(score) {}
    void display() const 
	{
        cout << "学生 " << endl;
        Person::display();
        cout << "班级: " << class_id_ << endl;
		cout << "成绩: " << score_ << endl;
    }
private:
    int class_id_;
    double score_;
};

class Teacher : public Person //声明公用派生类teacher
{
public:
    Teacher(int id, string name, string title, string department) : Person(id, name), title_(title), department_(department) {}
    void display() const 
	{
         cout << "老师 " << endl;
        Person::display();
         cout << "职称: " << title_ <<  endl;
		 cout << "部门: " << department_ <<  endl;
    }
private:
    string title_;
    string department_;
};

int main() 
{
    Student s1(1, "A", 1, 90.5);
    Student s2(2, "B", 1, 80.0);
    Teacher t1(3, "C", "教授", "计算机系");
    Teacher t2(4, "D", "副教授", "数学系");

    s1.display();
    s2.display();
    t1.display();
    t2.display();

    return 0;
}```

运行结果

![[MP1$B($O4X6]84AQ~PO[$FO.png]]
# 第六题

```cpp
#include <iostream>
using namespace std;

class Real 
{
protected:
    float x;

public:
    Real() : x(0) {}   
    Real(float x) : x(x) {}

    virtual void Display() = 0;
};

class Rational : public Real 
{
private:
    int y;

public:
    Rational() : y(1) {}
    Rational(int x, int y) : Real(x), y(y) {}

    void Display() 
	{
        cout << x << "/" << y << endl;
    }
};

class Complex : public Real 
{
private:
    float y;

public:
    Complex() : y(0) {}
    Complex(float x, float y) : Real(x), y(y) {}

    void Display() 
	{
        if (y > 0) 
		{
            cout << x << "+" << y << "i";
        } 
        else if ( y == 0 )
        {
        	cout << x ;
		}
		else 
		{
            cout << x << y << "i";
        }
        cout << endl;
    }
};

int main() 
{
    Rational x(9, 19);
    Complex z(3.14, -2.78);

    Real* ptr1 = &x;
    Real* ptr2 = &z;

    cout << "x = ";
    ptr1->Display();

    cout << "z = ";
    ptr2->Display();

    return 0;
}
```

运行结果

![[2N@WVG9_DX5)_[V@F4]@1CO.png]]