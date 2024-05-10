import styles from "@/app/ui/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
const ProductsPage = ({placeholder}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..."/>
                <Link href="/dashboard/products/add">
                <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Created At</td>
                            <td>Stock</td>
                            <td>Action</td>

                        </tr>
                    
                </thead>
                <tbody>
                    <tr>
                        <td><div className={styles.product}>
                            <Image 
                            src="/noproduct.jpg"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.productImage}
                            />
                            Iphone
                        </div>
                        </td>
                        <td>desc</td>
                        <td>$999</td>
                        <td>13.01.2022</td>
                        <td>72</td>
                        <td>
                            <Link href="/dashboard/products/test">
                            <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>

                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}
export default ProductsPage