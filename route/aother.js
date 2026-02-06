const express =require('express');
const router=express.Router();
const {getAllAother,getAotherId,deleteAother,updateAother,creatAother}= require('../controler/aothercontroler')
//vildeat for criting 
function createvalidate(obj){
const shcema=joi.object({
firstname:joi.string().min(3).max(10).required(),
lastname:joi.string().min(3).max(10).required(),
nasonalty:joi.string().min(3).max(10)
})
return shcema.validate(obj)
}

router.get('/',getAllAother)

router.get('/:id',getAotherId)
router.post('/',creatAother)
router.put('/:id',updateAother)
router.delete('/:id',deleteAother)


module.exports=router;