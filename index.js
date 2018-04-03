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
  
}
