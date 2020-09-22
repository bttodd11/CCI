// Hash Table

class hashTable {

    // The size of the array is being defined here.
    constructor(size = 4){
    this.bucket = new Array(size)
    this.size = size
    }
    
    // This is the hash function that will turn the
    // string into an INT to be stored.
    hash(key){
    return key.toString().length % this.size
    }
    
    

    // This will set the value for our table using a
    // key , value pair.
    set(key, value){
    
      let index = this.hash(key);
      
      
      if(!this.bucket[index]){
      this.bucket[index] = [];
      }
      
      this.bucket[index].push([key,value])
      
      return index;
    }
    
    // This will get the value from the hash table by 
    // checking the key.
    get(key){
    
      let index = this.hash(key);
     
      if(!this.bucket[index]){
      return null
      }
      
      for(let bucket of this.bucket[index]){
        if(bucket[0] === key){
        return bucket[1]
        }
      }
    }
    }
    
    // This is defining out hash table for the size that
    // we need the table to be 
    const newHash = new hashTable(10)
    

    // This is how we set the value to our hash table
    let setter = newHash.set("FirstName", "Brian")
    let setter1 = newHash.set("LastName", "Luke")
    let getter = newHash.get("LastName")
