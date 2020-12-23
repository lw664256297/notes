#include <iostream>
#include <string>
// using namespace std;
int main()
{
    std::string name;
    int age;
    std::string sex;
    // 获取用户输入
    std::cin >> name >> age >> sex;
    // 控制台输出  endl 换行
    std::cout << "我叫:" << name << "今年:" << age << "岁了" << std::endl;

    std::cout << "性别:" << sex;

    int *p = new int; //分配1个int型的内存空间
    delete p;         //释放内存
}