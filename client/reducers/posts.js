//A reducer takes in 2 things:

//1. the action(info about what happened)
//2. Copy of current state
//action, store
//okay let me see
//update and return  store

function posts(state = [], action) {
  console.log('postsReducers: ', state, action);
  return state;
}

export default posts;
