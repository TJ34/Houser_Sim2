module.exports = {
    getHouses(req,res){
        let db = req.app.get('db');
        db.get_houses().then(houses => {
            return res.status(200).json(houses);
        })
    },
    addHouse(req,res){
        const {house_name, address, city, state, zip} = req.body;
        let db = req.app.get('db');
        db.add_house([house_name, address, city, state, zip]).then(
            houses => {return res.status(200).json(houses)}
        )
    },
    deleteHouse(req,res){
        let db = req.app.get('db');
        db.delete_house(req.params.id).then(houses => {
            return res.status(200).json(houses)
        })
    },
     
}