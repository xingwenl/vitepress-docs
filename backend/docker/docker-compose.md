
# docker-compose 

## 下载安装
```bash
# 这个是官方地址，可能比较慢，推荐使用下面的国内镜像地址
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 国内镜像地址
curl -L https://get.daocloud.io/docker/compose/releases/download/1.29.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

# 下载完之后可以看下 /usr/local/bin 这个目录有没有 docker-compose 这个文件
```

### 授权
```bash
# 给docker compose 目录授权
sudo chmod +x /usr/local/bin/docker-compose

# 查看一下version，显示有版本号那就说明安装成功了
docker-compose version
```

## 使用
```bash
# 启动
docker-compose up -d

-d	# 在后台运行服务容器
–no-color	# 不使用颜色来区分不同的服务的控制输出
–no-deps	# 不启动服务所链接的容器
–force-recreate	# 强制重新创建容器，不能与 –no-recreate 同时使用
–no-recreate # 如果容器已经存在，则不重新创建，不能与 –force-recreate 同时使用
–no-build	# 不自动构建缺失的服务镜像
–build	# 在启动容器前构建服务镜像
–abort-on-container-exit	# 停止所有容器，如果任何一个容器被停止，不能与-d同时使用
-t，-–timeout  # int	停止容器时候的超时（默认为 10 秒）
–remove-orphans	# 删除服务中没有在 compose 文件中定义的容器
-f # 指定使用的 Compose 模板文件，默认为 docker-compose.yml，可以多次指定

docker-compose start
docker-compose stop
docker-compose logs

docker-compose version

# 移除 --rmi all
docker-compose down

# 重新打包
docker-compose build

# 查看容器状态
docker-compose ps

# 删除所有（停止状态的）服务容器
docker-compose rm

# 在指定服务上执行一个命令。
docker-compose run
# 暂停运行中的服务容器
docker-compose pause
```

