class Theif {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  //   this.rank = null;
  }

  getCount(){
    var theifCountRef = database.ref('theifCount');
    theifCountRef.on("value",(data)=>{
      theifCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      theifCount: count
    });
  }

  update() {
    var theifIndex = "theif" + this.index;
    database.ref(theifIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getTheifInfo(){
    var theifInfoRef = database.ref('theif');
    theifInfoRef.on("value",(data)=>{
      // allPlayers = data.val();
    })
  }

  // getCarsAtEnd() {
  //   database.ref('CarsAtEnd').on("value", (data) => {
  //     this.rank=data.val();
  //   })
  // }
  
  // static updateCarsAtEnd(rank) {
  //   database.ref('/').update ({
  //     CarsAtEnd:rank
  //   })
  // }
}