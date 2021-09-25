export const check_for_repetition_and_remove = (list : any[]) => {
    let repetitive_indexes: any = []
    let without_repetition_list: any[]
    
    //code to remove all repetition
    without_repetition_list = list.filter((x,i)=>
       (i == list.indexOf(x)) && (x !== '')      
    )

    //code lfor all the repeating elements
    /* const test1 = list.filter((x,i)=>
        (x == list[i]) && (list.indexOf(list[i]) !== i)       
    ) */

    list.forEach((x,index) => {
        for(let i=0; i <= list.length; i++){
            if ( (x == list[i]) && (list.indexOf(list[i]) !== index) && (x !== '') ){
                
                repetitive_indexes.push(index) //catalogs the indexes of the repetitions                
                //console.log('repetitive_indexes: '+repetitive_indexes)
            }//end of if
        }//end of for
    })    
    
    return { without_repetition_list, repetitive_indexes }    
}

export const check_for_emptyspace_and_remove = (list : any[]) => {
    //console.log('its in this bitch space')
    let filledspace_indexes: any = []
    let emptyspace_indexes: any = []
    let without_emptyspace_list: any = []

    //collate list of removing space and collat index of all the empty space
    list.forEach((x,i) => {
        if(x !== ''){
            without_emptyspace_list.push(x)
            //console.log('without_emptyspace_list.push(x): '+x)
            filledspace_indexes.push(i)
        }
        
    })

    //collat list of index of empty space
    for(let i = 0; i <list.length; i++){ 
        if(!(filledspace_indexes.includes(list.indexOf(list[i])))){console.log(i)
            emptyspace_indexes.push(i)}
    } 
    return { without_emptyspace_list, emptyspace_indexes}
}


export const reorders_index_removing_space_and_repetition = (list : any[]) => {

    //console.log('its in this bitch')
    const { without_emptyspace_list, emptyspace_indexes } = check_for_emptyspace_and_remove(list)
    const { without_repetition_list, repetitive_indexes } = check_for_repetition_and_remove(list)

    let list_without_emptyspace_or_rep = [...new Set([...without_emptyspace_list,...without_repetition_list])]
    let indexOf_emptyspace_or_rep = [ ...new Set([ ...emptyspace_indexes, ...repetitive_indexes])]

    indexOf_emptyspace_or_rep.sort((a,b)=> a-b)
    return {list_without_emptyspace_or_rep , indexOf_emptyspace_or_rep}
}

export const reorders_index_adding_space_and_repetition = (list : any[], empty_space_indexes: any[]) => {
    
    const emptyString: never[] = []
    
    empty_space_indexes.forEach((listItem, listIdex)=>{
        list.splice(listItem,0, emptyString[0])
        //console.log(list)
    })

    return list
}

