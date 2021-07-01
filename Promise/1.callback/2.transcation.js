class Transaction{
  perform(anyMethod,wrappers){
    
  }
}
let transaction = new Transaction();

let oldFunc = ()=>{
  console.log('原有的逻辑');
}
transaction.perform(oldFunc, [{
  initialize(){
    console.log("init1");
  },
  close(){
    console.log("close1");
  }
},{
    initialize(){
      console.log("init2");
    },
    close(){
      console.log("close2");
    }
  }
]);