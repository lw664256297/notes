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

# git config命令的–global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

# 1.查看git配置信息
$ git config --list


# 2.查看git用户名、密码、邮箱的配置
$ git config user.name
$ git config user.password
$ git config user.email


# 3.设置git用户名、密码、邮箱的配置
$ git config user.name "freedom"
$ git config user.password "123456"
$ git config user.email "xxx@qq.com"
# 3.设置git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name "asdasd"
$ git config --global user.password "asdsa"
$ git config --global user.email "XXX@qq.com"


# 4.修改git用户名、密码、邮箱的配置（跟设置语法一样，没有用户名就添加，有了用户名就修改）
$ git config user.name "freedom"
# 4.修改git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name "freedom"


// git cherry-pick
```
