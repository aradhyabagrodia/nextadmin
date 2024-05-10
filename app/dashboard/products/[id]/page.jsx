import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill/>
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="Iphone" />
                <label>Price</label>
                <input type="number" name="price" placeholder="JohnDoe@gmail.com" />
                <label>Stock</label>
                <input type="number" name="stock" placeholder="23" />
                <label>Color</label>
                <input type="text" name="color" placeholder="red" />
                <label>Size</label>
                <input type="text" name="size" placeholder="Vellore" />
                <label>Cat?</label>
                <select name="cat" id="cat">
                <option value="kitchen">Kitchen</option>
                <option value="computers">Computers</option>
                </select>
                <label>Description</label>
               <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                <button className={styles.button}>Update</button>
                </form>

            </div>
        </div>
    )
}
export default SingleProductPage