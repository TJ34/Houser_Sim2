module.exports = {
    getHouses(req,res){
        let db = req.app.get('db');
        db.get_houses().then(houses => {
            return res.status(200).json(houses);
        })
    },
    addHouse(req,res){
        const {house_name, address, city, property_state, zip} = req.body;
        let db = req.app.get('db');
        db.add_house([house_name, address, city, property_state, zip]).then(
            houses => {return res.status(200).json(houses)}
        )
    },
    deleteHouse(req,res){
        let db = req.app.get('db');
        db.delete_house(req.params.id).then(houses => {
            return res.status(200).json(houses)
        })
    },
    updateHouse(req,res){
        const{house_name} = req.body;
        const{id}=req.params;
        let db = req.app.get('db');
        db.update_house([id,house_name]).then(houses => res.status(200).json(houses));

    } 
}