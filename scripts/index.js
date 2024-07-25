


class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {

    constructor() {
        this.activities = []
        this.id=1
    }

    createActivity(title, description, imgUrl) {
        
        const activity = new Activity(this.id, title, description, imgUrl)
        this.activities.push(activity)
        this.id++
    }

    getAllActivities(){
       return this.activities
    }

    deleteActivity(id){

       this.activities= this.activities.filter((x)=>x.id!==id)


    }
}

const repositorio = new Repository();
repositorio.createActivity( "caminata", "Caminata desde la villa hasta el mar", "hhttmd")
repositorio.createActivity( "jugar fulbito", "Caminata desde la villa hasta el mar", "hhttmd")
repositorio.createActivity( "compras", "Caminata desde la villa hasta el mar", "hhttmd")
repositorio.createActivity( "estudio", "Caminata desde la villa hasta el mar", "hhttmd")

repositorio.deleteActivity(2)

console.log(repositorio)

