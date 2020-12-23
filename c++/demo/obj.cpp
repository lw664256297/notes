#include <iostream>
#include <string>
using namespace std;

// 声明类
class AData
{
public:
    string name;
    int age;
    string sex;
    void say()
    {
        cout << "我叫:" << name << "今年:" << age << "岁"
             << "性别:" << sex << endl;
    }
};

int main()
{
    // 创建对象
    // AData adata;
    // adata.name = "张德帅";
    // adata.age = 18;
    // adata.sex = "男";
    // adata.say();
    // delete adata; // 一定要删除-释放内存

    // 使用对象指针
    AData *bdata = new AData;
    bdata->name = "张德帅";
    bdata->age = 18;
    bdata->sex = "男";
    bdata->say();
    delete bdata; // 一定要删除-释放内存
}
