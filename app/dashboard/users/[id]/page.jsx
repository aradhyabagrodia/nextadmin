import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
const SingleUserPage = () => {
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
                <label>UserName</label>
                <input type="text" name="username" placeholder="John Doe" />
                <label>Email</label>
                <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
                <label>Password</label>
                <input type="password" name="password" />
                <label>Phone</label>
                <input type="phone" name="phone" placeholder="+1234567" />
                <label>Address</label>
                <input type="text" name="address" placeholder="Vellore" />
                <label>is Admin?</label>
                <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
                </select>
                <label>is Active?</label>
                <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
                </select>
                <button className={styles.button}>Update</button>
                </form>

            </div>
        </div>
    )
}
export default SingleUserPage