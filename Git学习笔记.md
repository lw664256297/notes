# Git 学习笔记

> 基本常用命令

- 首先下载 Git 软件
- 克隆远程仓库

```bash
git clone https://github.com/xxxx
```

> 本地库的操作

```bash
# 第一步：修改文件后,把文件放到使用命令 git add readme.txt 添加到暂存区里面去
git add xxx(文件名)

# 第二步：用命令 git commit告诉Git，把文件提交到仓库。
git commit -m "xxx"(提交注释)

# 第三步：查看状态
git status

# 第四步：文件修改完了，使用命令上传库
git push -u origin master(库名称)

# 查看分支
git branch

# 创建分支
git branch name

# 切换分支
git checkout name

# 创建+切换分支
git checkout –b name

# 合并某分支到当前分支
git merge name

#删除分支
git branch –d name

# 回退
git reset -- hard HEAD~*(*代表是回到那个版本)


# 如果我要恢复到  特定的版本如何做？
# 1.先查看版本号
git reflog

# 使用 reset 命令回退版本号
git reset --hard (版本号)

```
