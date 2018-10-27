const funcs = {

    changedata(unix){
         function cahngd(str){
             return str >=10 ? str : `0${str}`
         }

        let data = new Date(unix)
        let year = data.getFullYear()
        let mon = cahngd(data.getMonth()+1)
        let da = cahngd(data.getDate())
       return `${year}-${mon}-${da}` 
    }
}
module.exports = funcs