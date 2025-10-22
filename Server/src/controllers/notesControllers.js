export function getAllNotes(req,res){
     res.send("you got 150 notes")
}
export function createANote (req,res){
    res.send("you got 150 notes")
}
export function updateANote (req,res){
    res.status(200).json({response:"post updated  succesfully"})
}
export function deleteANote (req,res){
    res.status(200).json({response:"post deleted succesfully"})
}