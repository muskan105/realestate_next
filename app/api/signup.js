import User from '../../models/user';
import dbConnect from '../../config/dbConnect';

export default async function handler(req,res){
    if(req.method === 'POST'){
        dbConnect();
        const {firstName,lastName,email,password}=req.body;
        const user = await User.create({firstName,lastName,email,password})
        res.status(201).json({user});
    }
    
}