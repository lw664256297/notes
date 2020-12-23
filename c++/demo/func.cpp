#include <iostream>
using namespace std;

// 交换两个值
inline void swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int m, n;
    // 获取控制台输入
    cin >> m >> n;
    cout << "输入值M:" << m << endl;
    cout << "输入值N:" << n << endl;
    swap(&m, &n);
    cout << "交互后的值" << m << n;

    return 0;
}