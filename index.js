function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  
  veto = function(){
    return 'No, I must disagree'
  }
  
  approve = function(){
    return 'You can do that!'
  }
  doCharity = function(){
    return  'I like to help people.'
  }
  releasePressStatement = function(){
    return 'You will see great things from Scuber.'
  }
  sayHi = function(){
    return 'Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.'
  }
}
