# 生成安卓签名证书

## 安装环境
先安装java环境 /backend/java/环境.md

控制台执行，填好信息即可
```bash
keytool -genkeypair -v -keystore com.xxx.xxx.keystore -alias com.xxx.xxx -keyalg RSA -keysize 2048 -validity 10000
```

## 公钥

```bash
brew install jadx

jadx-ui
```
- 打开apk,

![apk](/assets/app/apk.png)

modulus: 公钥
MD5： md5

> https://cloud.tencent.com/document/product/243/97789


## 错误

解决"ERROR: JAVA_HOME is set to an invalid directory: @@HOMEBREW_JAVA@@"的步骤和代码

```bash
# 看下java版本 @17
ls -l /usr/local/opt/openjdk@17

# 设置
export JAVA_HOME="/usr/local/opt/openjdk@17"

echo $JAVA_HOME
```