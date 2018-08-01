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


const ny = new NongYao();

// sub1
ny.hooks.pick.tap('player0', (name) => {
  console.log(`当前选择英雄: ${name}`);
})

// sub2
ny.hooks.pick.tap('player1', (name) => {
  if (name === 'aql') console.log('别选安琪拉？？');
})

// sub3
ny.hooks.pick.tap('player2', (name) => {
  if (name === 'aql') console.log('这把要输啊？？');
})

// pub
ny.hooks.pick.call('aql')
