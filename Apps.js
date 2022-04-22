var products = [
    {id: 100, title: "pencil", price: 20, color: 'black'},
    {id: 143, title: "pen", price: 210, color: 'black'},
    {id: 122, title: "pen2", price: 209, color: 'grey'},
    {id: 145, title: "pen3", price: 201, color: 'blue'},
    {id: 121, title: "pen4", price: 3453434, color: 'pink'},
    {id: 139, 
        title: "pen5", 
        price: 899, 
        color: 'white',
        features: [{fe1:'something', fe2:'som....else'}]},
    
    ]
    
    
    
    
    
    
    var list = [32, 61, 30, 45, 80, 4]; 
    
    var result = findCount(list);
    
  
    
    function findCount (x){
    
        var count = 0;
        for (var i=0; i<x.length; i++){
            if (x[i] > 50){
                count = count +1;
            }
    
        }
       return count; 
    }
    
    
    console.log ("Total numbers which are greater that 50:" , result);
    
    
    
    
    
    