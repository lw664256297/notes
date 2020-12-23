#include <iostream>
using namespace std;

inline void name(int type)
{
    switch (type)
    {
    case 1:

        cout << "-----1" << endl;
        break;
    case 2:

        cout << "-----2" << endl;
        break;

    default:
        break;
    }
}

inline void age(char type)
{
    switch (type)
    {
    case 'a':
        cout << "-----a" << endl;
        break;
    case 'b':
        cout << "-----b" << endl;
        break;
    case 'c':
        cout << "-----c" << endl;
        break;
    default:
        break;
    }
}

int main()
{
    int type;
    char nameshd;

    cin >> type;
    name(type);

    cin >> nameshd;
    age(nameshd);
}
