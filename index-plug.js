const {
  Tapable,
  SyncHook,
} = require('tapable');

class NongYao extends Tapable {
  constructor() {
    super();
    this.hooks = {
      pick: new SyncHook(['name']),
    }
  }
}

class Player0{
  apply(ny) {
    ny.hooks.pick.tap('player0', (name) => {
       console.log(name)
    })
  }
}

class Player1{
  apply(ny) {
    ny.hooks.pick.tap('player0', (name) => {
       console.log(name)
    })
  }
}

class Player2{
  apply(ny) {
    ny.hooks.pick.tap('player0', (name) => {
       console.log(name)
    })
  }
}

const config = {};
config.plugins = [
  new Player0(),
  new Player1(),
  new Player2(),
];

class Lancher {
   constructor({ plugins }) {
     this.plugins = plugins;
   }

   run() {
     const ny = new NongYao();
     // 挂载listener
     this.plugins.forEach(plug => { plug.apply(ny)})
     // pub
     ny.hooks.pick.call('aql');
   }  
}

const lc = new Lancher(config);

lc.run();

