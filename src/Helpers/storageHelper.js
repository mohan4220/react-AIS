class storageHelper{
    constructor(){
        if(!storageHelper.instance){
            this.data=[]
            storageHelper.instance=this
        }
        return storageHelper.instance
    }


}