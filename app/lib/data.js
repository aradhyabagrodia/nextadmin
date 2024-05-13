import { User } from "./models";
import { Product } from "./models";
import { connectToDB } from "./utils";
export const fetchUsers = async (q,page) => {
    
    const regex = new RegExp(q,"i")
    const ITEM_PER_PAGE =2
    try{
        connectToDB()
        const count = await User.find({username: { $regex: regex}}).count();
        const users = await User.find({username: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        return {count,users};

    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch new users!")
    }
};
export const fetchUser = async (id) => {
    
    console.log(id)
    try{
        connectToDB()
        const user = User.findById(id)
        return user;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch user!")
    }
};
export const fetchProduct = async (id) => {
    
    
    try{
        connectToDB()
        const product = Product.findById(id)
        return product;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch product!")
    }
};
export const fetchProducts = async (q,page) => {
    
    const regex = new RegExp(q,"i")
    const ITEM_PER_PAGE =2
    try{
        connectToDB()
        const count = await Product.find({title: { $regex: regex}}).count();
        const products = await Product.find({title: {$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        return {count,products}

    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch new products!")
    }
}