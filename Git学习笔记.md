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

# 合并单个版本号
git cherry-pick  xxxx(版本号)

# 合并某分支到当前分支
git merge name(分支)

# 设置本地分支为线上分支
git branch --set-upstream-to=origin/hotfix hotfix

# 查看远程分支地址
git remote -v
```

## 关联远程分支

```bash
# 1、Git init （在本地工程目录下），生成.git 文件夹
Git init

# 2、上传修改的文件
git add *

# 3、(*可替换成具体要上传的文件名，*表示提交所有有变化的文件) 3、添加上传文件的描述
git commit -m "test"

# 4、（创建分支）
git branch test

# 5、（切换分支）
git checkout test

# 6、与远程分支相关联
git remote add origin https://github.com/yangxiaoyan20/BowlingScore.git

# 7、（将分支上传）
git push origin test
```

## vscode 报错

        it's not possible to change the commit message in the middle of rebase. please complete the rebase operation and use interactive rebase insetead

重新设置不会在后台发生。“进行中的重新设置”表示您开始了重新设置，并且由于冲突导致重新设置被中断。您必须恢复变基（git rebase --continue）或中止变基（git rebase --abort）。

正如错误消息所 git rebase --continue 提示的那样，您要求 git 应用一个补丁，导致补丁为空。最有可能的是，这意味着该补丁已被应用，您想使用来删除它 git rebase --skip。

sudo docker run -it --name=mosquitto --privileged -p 1883:1883 -p 9001:9001 -v /root/mqtt/mosquitto/config:/mosquitto/config/ -v /root/mqtt/mosquitto/data:/mosquitto/data -v /root/mqtt/mosquitto/log:/mosquitto/log -d eclipse-mosquitto

## 分支操作

echo "# vue3-demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/lw664256297/vue3-demo.git
git push -u origin main

## 合并线上分支

git remote add origin https://github.com/lw664256297/vue3-demo.git
git branch -M main
git push -u origin main
