# UIT.IE104
A project IE104 for UIT

# How to run

Please fork repo, ![image](https://user-images.githubusercontent.com/45875394/201038596-15cd7945-ce49-4a41-8d2e-74c4b64c0c32.png)

### Add root repo remote:

With SSH:
```
git remote add cafe git@github.com:LuxionRob/UIT.IE104.git
git remote set-url --push cafe DISABLE
```

With HTTPS:
```
git remote add cafe https://github.com/LuxionRob/UIT.IE104.git
git remote set-url --push cafe DISABLE
```

### Install node package:

```cd client && npm i && cd ../server && npm i && npm run seed```

### Start in dev env:

At root folder

```
cd client && npm start
```

Open another terminal

```
cd server && npm run dev
```

### Build:
At root folder
```
cd server && npm run build
```

### Workflow:

Update change from root repo
```
git pull cafe master
```

After pushing into forked repo, create PR (Pull request) and wait for a reviewer <(")
