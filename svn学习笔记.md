```bash
# 检出
svn checkout

# 强制add 注意不能在node_mode使用
svn add * --force

# 回退add的文件
svn revert --depth=infinity .
```