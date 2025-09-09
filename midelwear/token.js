const jwt=require('jsonwebtoken');
function verfiytoken(req,res,next){

const token=req.headers.token;
if(token){
    try{
        const decoded= jwt.verify(token,process.env.jwt_secrt_key);
        req.user=decoded;
        next();
    }
    catch(error){
        res.status(401).json({message:"invaild token"})
    }
}else{res.status(401).json("you need token")
}

}
function verifyAndAuthorize(req,res, next){
    verfiytoken(req,res,()=>{
        if(req.user.id===req.params.id||req.user.isAdmean){next()}
  else { return res.status(403).json("you are not allowed to update the ather user only your")
}
    })
}

function verfiytokenAndadmin(req,res, next){
    verfiytoken(req,res,()=>{
        if(req.user.isAdmean){next()}
  else { return res.status(403).json("you are not allowed to update the ather user only your")
}
    })
}
module.exports={verfiytoken,verifyAndAuthorize,verfiytokenAndadmin};