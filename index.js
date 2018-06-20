var peeps = ['John Lennon','Paul McCartney','George Harrison','Ringo Starr']
var inst = ['Guitar','Bass Guitar','Lead Guitar','Drums']

function theBeatlesPlay(musicians,instruments){
  var array = []
  for (let i=0; i<4; i++){
    var a= (peeps[i] + ' plays ' + inst[i])
    
  console.log(a)
  array.push(a)
    
  }
  return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(fact){
  for (let i=0; i<facts.length;i++){
    var a = (facts[i]+'!!!')
    
  }
}

/*Again, unable to complete due to server error*/