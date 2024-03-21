function acceptDecorator(func){
    return function(id,status){
        func(id,status);
    }
}

export default acceptDecorator;

