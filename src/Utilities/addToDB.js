const getStoredBook = () =>{
    const storeItems = localStorage.getItem("readlist");

    if(storeItems){
        const storedBooks = JSON.parse(storeItems);
        return storedBooks;
    }
    else{
        return [];
    }
}

const addToStoredBook = (id) =>{
    const addToData = getStoredBook();
    
    if(addToData.includes(id)){
        alert("This book is already in your read list.");
    }
    else{
        addToData.push(id);
        const data = JSON.stringify(addToData);
        localStorage.setItem("readlist", data);
    }

}

export {addToStoredBook}