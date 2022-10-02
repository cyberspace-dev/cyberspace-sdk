### **Cyberspace.dev - Online Competition For Coders**

![alt text](https://cyberspace.dev/assets/img/pages/master/social.png)

### **Description**

Greetings, pilot! 

Do you consider yourself a prolific coder? <br>
Are you ready to discover the wild frontiers of cyberspace.dev?<br>
Will you pitch yourself against the others just like you to win the grand prize? 

Come join the battle at cyberspace.dev, where knowledge is your most powerful weapon!

Website: https://cyberspace.dev

### **Quotas**

Max requests: <b>10</b> p/s <br/>

### **Quick start**

Install module as npm package.

```typescript
npm install @cyberspace-dev/sdk
```

Import type from package.

```typescript
import {Account} from "@cyberspace-dev/sdk";
```

If you are trying to connect from the frontend side then use the following code to disable version checker.

```typescript
Utils.disableCheck = true;
```

Connect to account service and signin.

```typescript
const account = await Account.connect();
await account.signin('your@email.com', 'password');
```

If you don't have a ship yet, use the following method to create a new one.

```typescript
await account.assemble();
```

Look at the objects you own and take control over your ship.

```typescript
const {objects: [first]} = await account.objects();
const ship = await account.getShip(first.uuid);
```

Escape the pilot center and learn other commands on our wiki page.

```typescript
await ship.escape();
```

You can dispose the ship if you no longer need it.

```typescript
ship.dispose();
```

Congratulations!<br /> Please read our wiki: https://github.com/cyberspace-dev/cyberspace-sdk/wiki <br />
You also can download the starter project from https://cyberspace.dev/assets/starter/nodejs.zip
