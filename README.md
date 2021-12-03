### **Cyberspace.dev - Online Game For Developers**

![alt text](https://cyberspace.dev/assets/img/pages/master/social.png)

### **Description**

Hi Pilot !

Cyberspace.dev - online competition for coders! The game has a fairly simple game model and does not require much time to start. This is an excellent platform for both manned control and for the development of automation scripts and even artificial intelligence!

Our website: https://cyberspace.dev

### **Quotas**

Max requests: <b>5</b> p/s <br/>

### **Quick start**

Install module as npm package

```typescript
npm install @cyberspace-dev/sdk
```

Import type from package

```typescript
import {Account} from "@cyberspace-dev/sdk";
```

If you are trying to connect from the frontend side then use the following code to disable version checker

```typescript
Utils.disableCheck = true;
```

Connect to account service and signin

```typescript
const account = await Account.connect();
await account.signin('your@email.com', 'password');
```

Look at objects you own and select any ship

```typescript
const objects = await account.objects();
const instance = objects.find((object: any) => object.type === 'Ship');
```

If you don't have a ship yet, use the following method to create a new one.

```typescript
await account.assemble();
```

Take control over your ship

```typescript
const {uuid, system} = instance;
const ship = await account.getShip(uuid, system);
```

Escape from the planet and explore other commands in our wiki

```typescript
await ship.escape();
```

You can dispose the ship if you no longer need it because it consumes 1 connection

```typescript
ship.dispose();
```

Congratulations!<br /> Please read our wiki: https://github.com/cyberspace-dev/cyberspace-sdk/wiki<br />
You also can download the starter project from https://cyberspace.dev/assets/starters/starter.zip
